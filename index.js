import typescript from 'typescript';

export function vitePluginTypescriptTranspile({ fileRegex = /\.ts$/, cwd = process.cwd() }) {
  const fileName = typescript.findConfigFile(cwd, typescript.sys.fileExists);
  if (!fileName) throw 'tsconfig.json not found!';

  const text = typescript.sys.readFile(fileName);
  if (text === undefined) throw new Error(`failed to read '${fileName}'`);

  const result = typescript.parseConfigFileTextToJson(fileName, text);
  if (result.error !== undefined)
    throw new Error(`failed to parse '${fileName}'`);
}

const parsedTsConfig = typescript.parseJsonConfigFileContent(result.config, typescript.sys, cwd);

const compilerOptions = {
  ...parsedTsConfig.options,
  inlineSources: true,
  inlineSourceMap: true,
  sourceMap: false
}

return {
  name: 'typescript-transpile',

  /**
   * @param {string} src
   * @param {string} id
   * @returns
   */
  transform(src, id) {
    if (fileRegex.test(id)) {
      const program = typescript.transpileModule(src, {
        compilerOptions,
        fileName: id
      });

      return {
        code: program.outputText,
        map: program.sourceMapText
      };
    }
  }
};

