module.exports = {
    "parser": "babel-eslint",
    "extends": "airbnb",
    "env": {
      "jest": true ,
      "browser": true,
      "commonjs": true,
      "es6": true,
      "jquery": true
    },
    "rules": {
        "no-param-reassign": [0],
        "no-extend-native": [0],
        "no-plusplus": [0],
        "object-curly-newline": [0],
        "no-console": [0],
        "eol-last": [0],
        "comma-dangle": [0],
        "no-prototype-builtins": [0],
        "camelcase": [0],
        "global-require": [0],
        "no-undef": [0],
        "no-useless-return": [0],
        "no-alert": [0],
        "no-debugger": [0],
        "import/prefer-default-export": [0],
        "class-methods-use-this": [0],
        "no-new": [0],
        "max-len": [0],
        "react/jsx-closing-bracket-location": [0],
        "react/jsx-filename-extension": [
            1,
            {
                "extensions": [
                ".js",
                ".jsx"
                ]
            }
        ],
        "react/jsx-space-before-closing": [0],
        "react/prefer-stateless-function": [0],
        "import/no-unresolved": [
            "error",
            {
              "ignore": [
                "components/",
                "config/",
                "containers/",
                "locale",
                "redux_flow/",
                "static/",
                "theme/",
                "utils/"
              ]
            }
          ],
        "import/no-extraneous-dependencies": [0],
        "import/extensions": "off",
        "global-require": "off",
        "jsx-a11y/anchor-is-valid": [0],
        "no-underscore-dangle": [2, { "allow": ["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] }],
        "react/prop-types": [1, { "ignore": ["location", "history", "actions", "handleSubmit", 
        "common", "commonAction", "connectDragSource", "connectDropTarget", "match", "loader",
        "setErrorInfo", "clearErrorInfo", "errorKey", "errorData", "getErrorInfo", "currentLang"] }],
        "jsx-a11y/no-static-element-interactions": [0],
        "no-unreachable": [0]
    }
};