<p align="center">NervJS IE8+ Boilerplate</p>
<p align="center">
  <a href="https://david-dm.org/saltyshiomix/nerv-ie8-boilerplate">
    <img src="https://david-dm.org/saltyshiomix/nerv-ie8-boilerplate.svg">
  </a>
  <a href="https://david-dm.org/saltyshiomix/nerv-ie8-boilerplate?type=dev">
    <img src="https://david-dm.org/saltyshiomix/nerv-ie8-boilerplate/dev-status.svg">
  </a>
</p>

## About NervJS IE8+ Boilerplate

- Minimal Configuration
- Work on IE8+ and other modern browsers
- Identical API with React 16

Anyone can imagine that the code below does work on IE8?

**index.html**

```html
<body>
  <div id="app"></div>
  <script src="dist/index.js"></script>
</body>
```

**src/index.js** (webpack entry point)

```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <App name="NervJS" />,
  document.getElementById('app'),
);
```

**src/App.jsx**

```jsx
import React from 'react';

export default class App extends React.Component {
  render() {
    return <div>Hello {this.props.name}!</div>;
  }
}
```

## Demo

[This repo's GitHub Pages](https://saltyshiomix.github.io/nerv-ie8-boilerplate)

## How it works

### Transpile to ES3

Transpile ES5 (or above) codes to ES3 ones, so legacy browsers like IE8 can handle them.

**npm**

```bash
# need to transpile to ES3
$ yarn add --dev @babel/core @babel/preset-env @babel/plugin-transform-property-literals @babel/plugin-transform-member-expression-literals

# need to handle React
$ yarn add --dev @babel/preset-react
```

**.babelrc**

```json
{
  "presets": [
    ["@babel/env", {
      "spec": true,
      "useBuiltIns": false
    }],
    "@babel/react"
  ],
  "plugins": [
    "@babel/transform-member-expression-literals",
    "@babel/transform-property-literals"
  ]
}
```

### Polyfill for Internet Explorer 8 (or below)

But on IE8, we need some polyfills like `Object.defineProperty()`.

**index.html**

```html
<head>
<!--[if lte IE 8]>
<script src="polyfill.min.js"></script>
<![endif]-->
</head>
```

This repo uses `es5-polyfill@0.0.6` as `polyfill.min.js`, but some other polyfills might work if implemented core ES5 APIs.

### Handle ReactJS as **ALIAS**

ReactJS does not support IE8.

So we tackle it down by internally using [NervJS](https://github.com/NervJS/nerv).

#### Webpack Alias

**webpack.config.js**

```js
module.exports = {
  resolve: {
    alias: {
      'react': 'nervjs',
      'react-dom': 'nervjs',
    },
  },
};
```

#### Babel Alias

**webpack.config.js**

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
      },
    ],
  },
};
```

**.babelrc**

Resolve with `babel-plugin-module-resolver`.

```json
{
  "plugins": [
    ["module-resolver", {
      "root": ["."],
      "alias": {
        "react": "nervjs",
        "react-dom": "nervjs"
      }
    }]
  ]
}
```

## How to use

```bash
$ git clone https://github.com/saltyshiomix/nerv-ie8-boilerplate
$ cd nerv-ie8-boilerplate
$ yarn
$ yarn build
```

Finally, open `index.html` on your Internet Explorer 8 or modern browsers.
