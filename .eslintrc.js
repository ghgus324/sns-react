module.exports ={
    extends:[
        "react-app",
        "typescript",
        "typescript/react",
        "typescript/prettier",
        "typescript/prettier-react",
    ],
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint","prettier"],
    rules: {
        "prettier/prettier": "error",
        "react/prop-types": "off",
        "no-console": 1,
        "camelcase": "off",
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/camelcase": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-member-accessibility": "off",
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/no-parameter-properties": "off",
        "@typescript-eslint/no-var-requires": "off"
    },
};