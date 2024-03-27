# vite-plugin-typescript-transpile

Use the official TypeScript library to transpile TypeScript files in Vite projects. This Vite plugin allows developers to leverage the most up-to-date features of TypeScript, including those not fully supported by other transpilers, like the [ES6 decorators proposal](https://github.com/tc39/proposal-decorators) (currently in Stage 3) which has been implemented in Typescript 5.

## Why Use vite-plugin-typescript-transpile?

Vite, by default, uses ESbuild for transpilation, which is incredibly fast but does not support the latest TypeScript features such as ES6 decorators. Other tools like SWC and Babel either do not implement these features or have incomplete implementations. This plugin provides a way to use the TypeScript's own transpiler for projects new Typescript features are needed, ensuring full compatibility and support. Though I have not benchmarked it, the [`transpileModule`](https://github.com/Microsoft/TypeScript/wiki/Using-the-Compiler-API) API is quite fast as it does not do typechecking - it seems very similar to ESBuild.

## Prerequisites

Users must enable `isolatedModules` in their `tsconfig.json` file to ensure compatibility. You must also set [`moduleResolution`](https://www.typescriptlang.org/tsconfig#moduleResolution) to `"bundler"`.

## Installation

Install the plugin with your package manager of choice:

```bash
npm install vite-plugin-typescript-transpile
```

## Usage

To use this plugin, import it and include it in the `plugins` array of your Vite configuration.

```javascript
import { defineConfig } from 'vite';
import { vitePluginTypescriptTranspile } from 'vite-plugin-typescript-transpile';

export default defineConfig({
  plugins: [vitePluginTypescriptTranspile({})]
});
```

The plugin function accepts an options object where you can specify:

- `fileRegex`: A regular expression to match files that should be transpiled. Defaults to `/\.ts$/`.
- `cwd`: The current working directory. Defaults to `process.cwd()`.

## Contributing

Contributions are welcome! Please submit any issues or pull requests on GitHub.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
