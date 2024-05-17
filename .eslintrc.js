module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "standard-with-typescript",
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": "./tsconfig.json"
    },
    "rules": {
        "@typescript-eslint/no-extraneous-class": "off",
        "@typescript-eslint/no-misused-promises": "off",
        "@typescript-eslint/no-explicit-any": "error",
        "n/no-path-concat": "off",
        "import/no-unresolved": "off"
    },

    "ignorePatterns": [
        "dist",
        "node_modules",
        ".eslintrc.js",
        "test"
    ],

    "overrides": [
        {
            files: ['src/apps/redilink/frontend/**/*.ts', 'src/apps/frontend/**/*.tsx'],
            parserOptions: {
            project: ['./src/apps/frontend/tsconfig.json'],
            },
        },
    ]

    
}
