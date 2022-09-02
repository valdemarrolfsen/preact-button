import { defineConfig } from "tsup";
import alias from "esbuild-plugin-alias";

export default defineConfig({
  minify: false,
  dts: true,
  sourcemap: true,
  target: "esnext",
  esbuildPlugins: [
    alias({
      react: require.resolve("preact/compat"),
      "react-dom": require.resolve("preact/compat"),
      "react/jsx-runtime": require.resolve("preact/jsx-runtime"),
    }),
  ],
  format: ["esm", "cjs", "iife"],
});
