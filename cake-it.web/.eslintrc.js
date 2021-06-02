module.exports = {
    "env": {
        "browser": true,
        "node": true
    },
    "extends": [
        "plugin:react/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "tsconfig.json",
        "sourceType": "module"
    },
    "plugins": [
        "eslint-plugin-prefer-arrow",
        "eslint-plugin-unicorn",
        "eslint-plugin-react",
        "@typescript-eslint",
        "@typescript-eslint/tslint"
    ],
    "rules": {
        "@typescript-eslint/array-type": [
            "error",
            {
                "default": "array"
            }
        ],
        "@typescript-eslint/consistent-type-assertions": "error",
        "@typescript-eslint/consistent-type-definitions": "error",
        "@typescript-eslint/dot-notation": "error",
        "@typescript-eslint/indent": "error",
        "@typescript-eslint/member-delimiter-style": [
            "error",
            {
                "multiline": {
                    "delimiter": "semi",
                    "requireLast": true
                },
                "singleline": {
                    "delimiter": "semi",
                    "requireLast": false
                }
            }
        ],
        "@typescript-eslint/member-ordering": "error",
        "@typescript-eslint/naming-convention": "error",
        "@typescript-eslint/no-empty-function": "error",
        "@typescript-eslint/no-empty-interface": "error",
        "@typescript-eslint/no-for-in-array": "error",
        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/no-namespace": "error",
        "@typescript-eslint/no-parameter-properties": "error",
        "@typescript-eslint/no-shadow": [
            "error",
            {
                "hoist": "all"
            }
        ],
        "@typescript-eslint/no-unnecessary-type-assertion": "error",
        "@typescript-eslint/no-unused-expressions": "error",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/prefer-for-of": "error",
        "@typescript-eslint/quotes": [
            "error",
            "single",
            {
                "avoidEscape": true
            }
        ],
        "@typescript-eslint/semi": [
            "error",
            "always"
        ],
        "@typescript-eslint/triple-slash-reference": "off",
        "@typescript-eslint/unified-signatures": "error",
        "arrow-body-style": "error",
        "arrow-parens": [
            "error",
            "as-needed"
        ],
        "comma-dangle": "error",
        "complexity": [
            "error",
            {
                "max": 40
            }
        ],
        "constructor-super": "error",
        "curly": "error",
        "default-case": "error",
        "dot-notation": "error",
        "eol-last": "error",
        "eqeqeq": [
            "error",
            "always"
        ],
        "id-blacklist": [
            "error",
            "any",
            "Number",
            "number",
            "String",
            "string",
            "Boolean",
            "boolean",
            "Undefined",
            "undefined"
        ],
        "id-match": "error",
        "indent": "error",
        "linebreak-style": [
            "error",
            "unix"
        ],
        "max-classes-per-file": [
            "error",
            5
        ],
        "max-len": [
            "error",
            {
                "code": 160
            }
        ],
        "new-parens": "error",
        "no-bitwise": "error",
        "no-caller": "error",
        "no-cond-assign": "error",
        "no-console": "error",
        "no-constant-condition": "error",
        "no-control-regex": "error",
        "no-debugger": "error",
        "no-empty": "error",
        "no-empty-function": "error",
        "no-eval": "error",
        "no-fallthrough": "error",
        "no-invalid-regexp": "error",
        "no-irregular-whitespace": "error",
        "no-multiple-empty-lines": "error",
        "no-new-wrappers": "error",
        "no-redeclare": "error",
        "no-restricted-imports": [
            "error",
            {
                "paths": [
                    "date-fns",
                    "aphrodite",
                    {
                        "name": "aphrodite/no-important",
                        "importNames": [
                            "css",
                            "StyleSheet",
                            "StyleDeclaration"
                        ]
                    }
                ]
            }
        ],
        "no-shadow": "error",
        "no-sparse-arrays": "error",
        "no-template-curly-in-string": "error",
        "no-throw-literal": "error",
        "no-underscore-dangle": "error",
        "no-unsafe-finally": "error",
        "no-unused-expressions": "error",
        "no-unused-labels": "error",
        "no-unused-vars": "off",
        "no-var": "error",
        "object-shorthand": "error",
        "one-var": [
            "error",
            "never"
        ],
        "padding-line-between-statements": [
            "error",
            {
                "blankLine": "always",
                "prev": "*",
                "next": "return"
            }
        ],
        "prefer-arrow/prefer-arrow-functions": "error",
        "prefer-const": "error",
        "prefer-template": "error",
        "quote-props": [
            "error",
            "as-needed"
        ],
        "quotes": "error",
        "radix": "error",
        "react/jsx-boolean-value": [
            "error",
            "never"
        ],
        "react/jsx-curly-spacing": "off",
        "react/jsx-key": "error",
        "react/jsx-no-bind": "error",
        "react/self-closing-comp": "error",
        "semi": "error",
        "space-before-function-paren": [
            "error",
            {
                "anonymous": "never",
                "named": "never",
                "asyncArrow": "always"
            }
        ],
        "spaced-comment": [
            "error",
            "always",
            {
                "markers": [
                    "/"
                ]
            }
        ],
        "unicorn/prefer-switch": "off",
        "use-isnan": "error",
        "@typescript-eslint/tslint/config": [
            "error",
            {
                "rules": {
                    "brace-style": [
                        true,
                        "1tbs"
                    ],
                    "forbidden-imports": [
                        true,
                        {
                            "**/src/packages/core/**": [
                                "src/packages/!(main|lib|core)/**",
                                "@sgp/!(main|lib|core)"
                            ],
                            "**/src/packages/betting/**": [
                                "src/packages/!(main|lib|betting)/**",
                                "@sgp/!(main|lib|betting)"
                            ],
                            "**/src/!(packages)/**": [
                                "src/packages/**"
                            ],
                            "**/src/**/!(*.spec.(ts|tsx))": [
                                "src/packages/test",
                                "@sgp/test/**"
                            ],
                            "**/src/packages/main/**": [
                                "src/(client|middleware|renderers)/!(types)",
                                "src/packages/!(main)/**",
                                "@sgp/!(main)"
                            ],
                            "**/src/packages/lib/**": [
                                "src/(client|middleware|renderers)/!(types|theme)",
                                "src/packages/!(lib)/**",
                                "@sgp/!(lib)"
                            ]
                        }
                    ],
                    "import-spacing": true,
                    "jsx-required-attributes": [
                        true,
                        [
                            "data-actionable",
                            {
                                "tagNames": [
                                    "Link",
                                    "a",
                                    "button"
                                ],
                                "attributeNames": [
                                    "onClick"
                                ]
                            }
                        ]
                    ],
                    "match-default-export-name": true,
                    "no-duplicate-case": true,
                    "no-ex-assign": true,
                    "no-extra-boolean-cast": true,
                    "no-extra-semi": true,
                    "no-inner-declarations": true,
                    "no-unnecessary-callback-wrapper": true,
                    "origin-ordered-imports": [
                        true,
                        "one-blank-line",
                        [
                            "lib",
                            "^@sgp/test/.+",
                            "^@sgp/(main|lib|tracking)/.+",
                            "user"
                        ]
                    ],
                    "prefer-method-signature": true,
                    "ter-arrow-body-style": true,
                    "ter-arrow-spacing": true,
                    "typedef": [
                        true,
                        "call-signature",
                        "parameter",
                        "property-declaration",
                        "member-variable-declaration"
                    ],
                    "whitespace": [
                        true,
                        "check-branch",
                        "check-decl",
                        "check-operator",
                        "check-typecast"
                    ]
                }
            }
        ]
    }
};
