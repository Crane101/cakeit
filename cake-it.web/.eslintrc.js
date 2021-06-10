module.exports = {
    env: {
        browser: true,
        node: true,
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    extends: ['plugin:react/recommended', 'eslint:recommended', 'plugin:promise/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        sourceType: 'module',
    },
	globals: {
		JSX: true,
		},
    plugins: ['eslint-plugin-prefer-arrow', 'eslint-plugin-unicorn', 'eslint-plugin-react', '@typescript-eslint', '@typescript-eslint/tslint', 'promise'],
    rules: {
        'brace-style': 'error',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
        '@typescript-eslint/array-type': [
            'error',
            {
                default: 'array',
            },
        ],
        '@typescript-eslint/consistent-type-assertions': 'error',
        '@typescript-eslint/consistent-type-definitions': 'error',
        '@typescript-eslint/dot-notation': 'error',
        '@typescript-eslint/indent': 'error',
        '@typescript-eslint/member-delimiter-style': [
            'error',
            {
                multiline: {
                    delimiter: 'semi',
                    requireLast: true,
                },
                singleline: {
                    delimiter: 'semi',
                    requireLast: false,
                },
            },
        ],
        '@typescript-eslint/member-ordering': 'error',
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'variable',
                format: ['camelCase', 'PascalCase'],
            },
        ],
        '@typescript-eslint/no-empty-function': 'error',
        '@typescript-eslint/no-empty-interface': 'error',
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-parameter-properties': 'error',
        '@typescript-eslint/no-shadow': [
            'error',
            {
                hoist: 'all',
            },
        ],
		        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        '@typescript-eslint/no-unused-expressions': 'error',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/prefer-for-of': 'error',
        '@typescript-eslint/quotes': [
            'error',
            'single',
            {
                avoidEscape: true,
            },
        ],
        '@typescript-eslint/semi': ['error', 'always'],
        '@typescript-eslint/triple-slash-reference': 'off',
        '@typescript-eslint/unified-signatures': 'error',
        'arrow-body-style': 'error',
        'arrow-spacing': 'error',
        'arrow-parens': ['error', 'as-needed'],
        complexity: [
            'error',
            {
                max: 40,
            },
        ],
        'constructor-super': 'error',
        curly: 'error',
        'default-case': 'error',
        'dot-notation': 'error',
        'eol-last': 'error',
        eqeqeq: ['error', 'always'],
        'id-blacklist': ['error', 'any', 'Number', 'number', 'String', 'string', 'Boolean', 'boolean', 'Undefined', 'undefined'],
        'id-match': 'error',
        'linebreak-style': ['error', 'unix'],
        'max-classes-per-file': ['error', 5],
        'max-len': [
            'error',
            {
                code: 160,
            },
        ],
        'new-parens': 'error',
        'no-bitwise': 'error',
        'no-caller': 'error',
        'no-cond-assign': 'error',
        'no-constant-condition': 'error',
        'no-control-regex': 'error',
        'no-debugger': 'error',
        'no-empty': 'error',
        'no-empty-function': 'error',
        'no-eval': 'error',
        'no-fallthrough': 'error',
        'no-invalid-regexp': 'error',
        'no-irregular-whitespace': 'error',
        'no-new-wrappers': 'error',
        'no-redeclare': 'error',
        'no-restricted-imports': [
            'error',
            {
                paths: [
                    'date-fns',
                    'aphrodite',
                    {
                        name: 'aphrodite/no-important',
                        importNames: ['css', 'StyleSheet', 'StyleDeclaration'],
                    },
                ],
            },
        ],
        'no-sparse-arrays': 'error',
        'no-template-curly-in-string': 'error',
        'no-throw-literal': 'error',
        'no-underscore-dangle': 'error',
        'no-unsafe-finally': 'error',
        'no-unused-expressions': 'error',
        'no-unused-labels': 'error',
        'no-unused-vars': 'off',
        'no-var': 'error',
        'object-shorthand': 'error',
        'one-var': ['error', 'never'],
        'padding-line-between-statements': [
            'error',
            {
                blankLine: 'always',
                prev: '*',
                next: 'return',
            },
        ],
        'prefer-arrow/prefer-arrow-functions': 'error',
        'prefer-const': 'error',
        'prefer-template': 'error',
        'quote-props': ['error', 'as-needed'],
        radix: 'error',
        'react/jsx-boolean-value': ['error', 'never'],
        'react/jsx-curly-spacing': 'off',
        'react/jsx-key': 'error',
        'react/self-closing-comp': 'error',
        'react/prop-types': 'off',
        semi: 'error',
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'never',
                named: 'never',
                asyncArrow: 'always',
            },
        ],
        'spaced-comment': [
            'error',
            'always',
            {
                markers: ['/'],
            },
        ],
        'no-ex-assign': 'error',
        'no-extra-semi': 'error',
        'unicorn/prefer-switch': 'off',
        'use-isnan': 'error',
        'no-extra-boolean-cast': 'error',
        'no-duplicate-case': 'error',
        'no-inner-declarations': 'error',

        'react/react-in-jsx-scope': 0,
        'object-curly-spacing': ['error', 'always'],
        'require-jsdoc': 0,
        'operator-linebreak': ['error', 'after', { overrides: { ':': 'before' } }],

        'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],

        'newline-before-return': ['error'],
        'object-shorthand': ['error', 'always'],
        'comma-dangle': [
            'error',
            {
                arrays: 'always-multiline',
                objects: 'always-multiline',
                imports: 'always-multiline',
                exports: 'always-multiline',
                functions: 'never',
            },
        ],

        'no-undef': 'error',

        'promise/catch-or-return': ['error', { allowFinally: true }],

        '@typescript-eslint/tslint/config': [
            'error',
            {
                rules: {
                    'import-spacing': true,
                    'no-unnecessary-callback-wrapper': true,
                    'prefer-method-signature': true,
                    typedef: [true, 'call-signature', 'parameter', 'property-declaration', 'member-variable-declaration'],
                    whitespace: [true, 'check-branch', 'check-decl', 'check-operator', 'check-typecast'],
                },
            },
        ],
    },
};
