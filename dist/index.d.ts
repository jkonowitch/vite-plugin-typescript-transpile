import { CompilerOptions } from 'typescript';
export declare function vitePluginTypescriptTranspile({ fileRegex, cwd, compilerOverrides }: {
    fileRegex: RegExp;
    cwd: string;
    compilerOverrides: CompilerOptions;
}): {
    name: string;
    transform(src: string, id: string): {
        code: string;
        map: string | undefined;
    } | undefined;
};
