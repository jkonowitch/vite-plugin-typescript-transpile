// Define the shape of the options object that the vitePluginTsc function accepts
interface VitePluginTscOptions {
  fileRegex?: RegExp;
  cwd?: string;
}

// Define the shape of the object that the vitePluginTsc function returns
interface VitePluginTscReturn {
  name: string;
  transform(
    src: string,
    id: string
  ): {
    code: string;
    map: string | undefined;
  } | void;
}

// Declare the vitePluginTsc function with the defined input and output types
export function vitePluginTypescriptTranspile(options: VitePluginTscOptions): VitePluginTscReturn;
