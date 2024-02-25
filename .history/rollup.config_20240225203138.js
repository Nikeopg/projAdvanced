import plugin from "rollup-plugin-import-css";

export default {
    input: "src/app.js",
    output: {
        dir: "dist",
        format: "iife",
    },
    plugins: [],
};
