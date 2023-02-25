module.exports = {
    files: ["**/*.astro"],
    extends: [
        "plugin:astro/recommended",
        "plugin:astro/jsx-a11y-strict"
    ],
    parser: "astro-eslint-parser",
    parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
    }
}
