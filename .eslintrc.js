module.exports = {
  extends: getExtends(),
  plugins: getPlugins(),
  rules: getRules(),
  parserOptions: getParserOptions(),
  env: getEnv(),
  settings: getSettings(),
};

function getExtends() {
  return [
    "react-app",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
  ];
}

function getPlugins() {
  return ["react", "import"];
}

function getRules() {
  return {
    "jsx-a11y/anchor-is-valid": 0,
    "no-unused-vars": 0,
    "import/no-anonymous-default-export": 0,
    "react/prop-types": 0,
    "no-console": ["error", { allow: ["warn", "error", "info"] }],
    "import/no-named-as-default": 0,
    "import/no-named-as-default-member": 0,
    "prefer-const": 2,
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "index",
          "sibling",
          "parent",
        ],
        "newlines-between": "always",
      },
    ],
  };
}

function getParserOptions() {
  return {
    ecmaVersion: 12,
  };
}

function getEnv() {
  return {
    es2021: true,
  };
}

function getSettings() {
  return {};
}
