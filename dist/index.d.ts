export declare function vitePluginTypescriptTranspile({ fileRegex, cwd }: {
    fileRegex?: RegExp | undefined;
    cwd?: string | undefined;
}): {
    name: string;
    transform(src: string, id: string): {
        code: string;
        map: string | undefined;
    } | undefined;
};
