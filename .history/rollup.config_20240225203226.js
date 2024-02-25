import plugin from "rollup-plugin-import-css";
import { RollupNodeResolveOptions } from "@rollup/plugin-node-resolve";}

export default {
    input: "src/app.js",
    output: {
        dir: "dist",
        format: "iife",
    },
    plugins: [plugin()],
};
