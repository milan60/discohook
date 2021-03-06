/* eslint "sort-keys": "warn" */

module.exports = {
  extends: [],
  ignorePatterns: ["node_modules", "lib", "dist", "coverage", "!.eslintrc.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    createDefaultProgram: true,
    project: "./tsconfig.json",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "unicorn", "import", "react", "react-hooks"],
  rules: {
    "@typescript-eslint/adjacent-overload-signatures": "warn",
    "@typescript-eslint/array-type": "warn",
    "@typescript-eslint/await-thenable": "warn",
    "@typescript-eslint/ban-ts-comment": "warn",
    "@typescript-eslint/ban-types": "warn",
    "@typescript-eslint/consistent-type-assertions": "warn",
    "@typescript-eslint/consistent-type-definitions": ["warn", "type"],
    "@typescript-eslint/explicit-member-accessibility": [
      "warn",
      { accessibility: "no-public" },
    ],
    "@typescript-eslint/naming-convention": [
      "warn",
      { format: ["strictCamelCase", "StrictPascalCase"], selector: "default" },
      {
        format: ["strictCamelCase", "StrictPascalCase", "UPPER_CASE"],
        selector: "variable",
      },
      {
        format: ["strictCamelCase", "StrictPascalCase"],
        leadingUnderscore: "allow",
        selector: "parameter",
      },
      { format: ["StrictPascalCase"], selector: "typeLike" },
      { filter: "toJS", format: ["camelCase"], selector: "memberLike" },
    ],
    "@typescript-eslint/no-array-constructor": "warn",
    "@typescript-eslint/no-dupe-class-members": "warn",
    "@typescript-eslint/no-empty-interface": "warn",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-extra-non-null-assertion": "warn",
    "@typescript-eslint/no-extraneous-class": "warn",
    "@typescript-eslint/no-floating-promises": "warn",
    "@typescript-eslint/no-for-in-array": "warn",
    "@typescript-eslint/no-implied-eval": "warn",
    "@typescript-eslint/no-inferrable-types": "warn",
    "@typescript-eslint/no-misused-new": "warn",
    "@typescript-eslint/no-misused-promises": "warn",
    "@typescript-eslint/no-namespace": "warn",
    "@typescript-eslint/no-non-null-assertion": "warn",
    "@typescript-eslint/no-parameter-properties": "warn",
    "@typescript-eslint/no-this-alias": "warn",
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "warn",
    "@typescript-eslint/no-unnecessary-condition": [
      "warn",
      { allowConstantLoopConditions: true, ignoreRhs: true },
    ],
    "@typescript-eslint/no-unnecessary-qualifier": "warn",
    "@typescript-eslint/no-unnecessary-type-arguments": "warn",
    "@typescript-eslint/no-unnecessary-type-assertion": "warn",
    "@typescript-eslint/no-unused-expressions": "warn",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-use-before-define": "warn",
    "@typescript-eslint/no-useless-constructor": "warn",
    "@typescript-eslint/no-var-requires": "warn",
    "@typescript-eslint/prefer-as-const": "warn",
    "@typescript-eslint/prefer-for-of": "warn",
    "@typescript-eslint/prefer-function-type": "warn",
    "@typescript-eslint/prefer-includes": "warn",
    "@typescript-eslint/prefer-nullish-coalescing": "warn",
    "@typescript-eslint/prefer-optional-chain": "warn",
    "@typescript-eslint/prefer-readonly": "warn",
    "@typescript-eslint/prefer-regexp-exec": "warn",
    "@typescript-eslint/prefer-string-starts-ends-with": "warn",
    "@typescript-eslint/promise-function-async": "warn",
    "@typescript-eslint/quotes": ["warn", "double", { avoidEscape: true }],
    "@typescript-eslint/require-array-sort-compare": "warn",
    "@typescript-eslint/require-await": "warn",
    "@typescript-eslint/restrict-plus-operands": "warn",
    "@typescript-eslint/return-await": ["warn", "in-try-catch"],
    "@typescript-eslint/switch-exhaustiveness-check": "warn",
    "@typescript-eslint/triple-slash-reference": "warn",
    "@typescript-eslint/unbound-method": "warn",
    "accessor-pairs": ["warn", { enforceForClassMembers: true }],
    "array-callback-return": "warn",
    "class-methods-use-this": "warn",
    "constructor-super": "warn",
    "curly": ["warn", "multi-line", "consistent"],
    "default-param-last": "warn",
    "dot-notation": "warn",
    "eqeqeq": ["warn", "always", { null: "ignore" }],
    "for-direction": "warn",
    "func-name-matching": "warn",
    "func-style": ["warn", "declaration", { allowArrowFunctions: true }],
    "grouped-accessor-pairs": ["warn", "getBeforeSet"],
    "guard-for-in": "warn",
    "id-blacklist": ["warn", "callback", "data"],
    "id-length": ["warn", { exceptions: ["_"] }],
    "id-match": ["warn", "^\\w*$"],
    "import/extensions": "warn",
    "import/first": "warn",
    "import/newline-after-import": "warn",
    "import/no-cycle": "warn",
    "import/no-default-export": "warn",
    "import/no-mutable-exports": "warn",
    "import/no-named-as-default-member": "warn",
    "import/no-named-default": "warn",
    "import/no-namespace": "warn",
    "import/no-self-import": "warn",
    "import/no-unused-modules": "warn",
    "import/no-useless-path-segments": "warn",
    "import/order": [
      "warn",
      {
        "alphabetize": { caseInsensitive: true, order: "asc" },
        "groups": [["builtin", "external", "internal"]],
        "newlines-between": "never",
      },
    ],
    "max-classes-per-file": "warn",
    "max-depth": ["warn", { max: 4 }],
    "max-nested-callbacks": ["warn", { max: 3 }],
    "max-params": ["warn", { max: 4 }],
    "new-cap": "warn",
    "no-alert": "warn",
    "no-async-promise-executor": "warn",
    "no-await-in-loop": "warn",
    "no-bitwise": "warn",
    "no-buffer-constructor": "warn",
    "no-caller": "warn",
    "no-case-declarations": "warn",
    "no-class-assign": "warn",
    "no-compare-neg-zero": "warn",
    "no-cond-assign": "warn",
    "no-constructor-return": "warn",
    "no-control-regex": "warn",
    "no-delete-var": "warn",
    "no-dupe-else-if": "warn",
    "no-duplicate-case": "warn",
    "no-else-return": "warn",
    "no-empty": "warn",
    "no-empty-character-class": "warn",
    "no-empty-pattern": "warn",
    "no-eval": "warn",
    "no-ex-assign": "warn",
    "no-extend-native": "warn",
    "no-extra-bind": "warn",
    "no-extra-boolean-cast": "warn",
    "no-fallthrough": "warn",
    "no-func-assign": "warn",
    "no-global-assign": "warn",
    "no-implicit-coercion": "warn",
    "no-import-assign": "warn",
    "no-inner-declarations": "warn",
    "no-invalid-regexp": "warn",
    "no-invalid-this": "warn",
    "no-irregular-whitespace": "warn",
    "no-iterator": "warn",
    "no-labels": "warn",
    "no-lone-blocks": "warn",
    "no-lonely-if": "warn",
    "no-loop-func": "warn",
    "no-misleading-character-class": "warn",
    "no-multi-assign": "warn",
    "no-multi-str": "warn",
    "no-negated-condition": "warn",
    "no-new": "warn",
    "no-new-func": "warn",
    "no-new-object": "warn",
    "no-new-require": "warn",
    "no-new-wrappers": "warn",
    "no-obj-calls": "warn",
    "no-octal": "warn",
    "no-octal-escape": "warn",
    "no-path-concat": "warn",
    "no-plusplus": ["warn", { allowForLoopAfterthoughts: true }],
    "no-process-exit": "warn",
    "no-proto": "warn",
    "no-prototype-builtins": "warn",
    "no-regex-spaces": "warn",
    "no-restricted-properties": [
      "warn",
      {
        message: "Please use Object.defineProperty instead.",
        property: "__defineGetter__",
      },
      {
        message: "Please use Object.defineProperty instead.",
        property: "__defineSetter__",
      },
    ],
    "no-restricted-syntax": ["warn", "SequenceExpression"],
    "no-return-assign": "warn",
    "no-script-url": "warn",
    "no-self-assign": "warn",
    "no-self-compare": "warn",
    "no-setter-return": "warn",
    "no-shadow-restricted-names": "warn",
    "no-sparse-arrays": "warn",
    "no-undef-init": "warn",
    "no-underscore-dangle": ["warn", { enforceInMethodNames: true }],
    "no-unexpected-multiline": "warn",
    "no-unmodified-loop-condition": "warn",
    "no-unneeded-ternary": "warn",
    "no-unsafe-finally": "warn",
    "no-unsafe-negation": "warn",
    "no-useless-call": "warn",
    "no-useless-catch": "warn",
    "no-useless-computed-key": "warn",
    "no-useless-concat": "warn",
    "no-useless-escape": "warn",
    "no-useless-rename": "warn",
    "no-useless-return": "warn",
    "no-var": "warn",
    "no-void": "warn",
    "no-with": "warn",
    "object-shorthand": "warn",
    "one-var": ["warn", "never"],
    "operator-assignment": "warn",
    "prefer-arrow-callback": "warn",
    "prefer-const": "warn",
    "prefer-exponentiation-operator": "warn",
    "prefer-numeric-literals": "warn",
    "prefer-object-spread": "warn",
    "prefer-regex-literals": "warn",
    "prefer-rest-params": "warn",
    "prefer-spread": "warn",
    "prefer-template": "warn",
    "quote-props": ["warn", "consistent-as-needed"],
    "radix": "warn",
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "warn",
    "react/jsx-boolean-value": "warn",
    "react/jsx-curly-brace-presence": "warn",
    "react/jsx-fragments": "warn",
    "react/jsx-handler-names": "warn",
    "react/jsx-key": ["warn", { checkFragmentShorthand: true }],
    "react/jsx-no-comment-textnodes": "warn",
    "react/jsx-no-target-blank": "warn",
    "react/jsx-no-useless-fragment": "warn",
    "react/jsx-pascal-case": "warn",
    "react/jsx-uses-react": "warn",
    "react/jsx-uses-vars": "warn",
    "react/no-access-state-in-setstate": "warn",
    "react/no-array-index-key": "warn",
    "react/no-children-prop": "warn",
    "react/no-danger-with-children": "warn",
    "react/no-deprecated": "warn",
    "react/no-did-mount-set-state": "warn",
    "react/no-did-update-set-state": "warn",
    "react/no-direct-mutation-state": "warn",
    "react/no-find-dom-node": "warn",
    "react/no-is-mounted": "warn",
    "react/no-redundant-should-component-update": "warn",
    "react/no-render-return-value": "warn",
    "react/no-string-refs": "warn",
    "react/no-this-in-sfc": "warn",
    "react/no-unescaped-entities": "warn",
    "react/no-unknown-property": "warn",
    "react/no-unsafe": "warn",
    "react/no-unused-prop-types": "warn",
    "react/no-unused-state": "warn",
    "react/no-will-update-set-state": "warn",
    "react/prefer-es6-class": "warn",
    "react/prefer-stateless-function": "warn",
    "react/react-in-jsx-scope": "warn",
    "react/require-render-return": "warn",
    "react/self-closing-comp": "warn",
    "react/sort-comp": "warn",
    "react/state-in-constructor": ["warn", "never"],
    "react/style-prop-object": "warn",
    "require-atomic-updates": "warn",
    "require-yield": "warn",
    "spaced-comment": "warn",
    "symbol-description": "warn",
    "unicorn/better-regex": "warn",
    "unicorn/catch-error-name": "warn",
    "unicorn/consistent-function-scoping": "warn",
    "unicorn/custom-error-definition": "warn",
    "unicorn/error-message": "warn",
    "unicorn/explicit-length-check": "warn",
    "unicorn/filename-case": [
      "warn",
      { cases: { camelCase: true, pascalCase: true }, ignore: ["\\.d\\.ts$"] },
    ],
    "unicorn/new-for-builtins": "warn",
    "unicorn/no-abusive-eslint-disable": "warn",
    "unicorn/no-array-instanceof": "warn",
    "unicorn/no-console-spaces": "warn",
    "unicorn/no-for-loop": "warn",
    "unicorn/no-hex-escape": "warn",
    "unicorn/no-new-buffer": "warn",
    "unicorn/no-process-exit": "warn",
    "unicorn/no-unused-properties": "warn",
    "unicorn/prefer-add-event-listener": "warn",
    "unicorn/prefer-dataset": "warn",
    "unicorn/prefer-event-key": "warn",
    "unicorn/prefer-flat-map": "warn",
    "unicorn/prefer-modern-dom-apis": "warn",
    "unicorn/prefer-node-append": "warn",
    "unicorn/prefer-node-remove": "warn",
    "unicorn/prefer-number-properties": "warn",
    "unicorn/prefer-query-selector": "warn",
    "unicorn/prefer-reflect-apply": "warn",
    // "unicorn/prefer-replace-all": "warn",
    "unicorn/prefer-set-has": "warn",
    "unicorn/prefer-string-slice": "warn",
    "unicorn/prefer-text-content": "warn",
    "unicorn/prefer-type-error": "warn",
    "unicorn/prevent-abbreviations": [
      "warn",
      {
        replacements: {
          props: { properties: false },
          ref: { reference: false },
          rej: { reject: true },
          res: { resolve: true },
        },
      },
    ],
    "use-isnan": "warn",
    "yoda": "warn",
  },
  settings: {
    "import/extensions": [".ts", ".tsx", ".d.ts", ".js", ".jsx"],
    "import/external-module-folders": ["node_modules", "node_modules/@types"],
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx", ".d.ts"],
    },
    "import/resolver": {
      node: {
        extensions: [".ts", ".tsx", ".d.ts", ".js", ".jsx"],
      },
    },
    "react": {
      version: "detect",
    },
  },
}
