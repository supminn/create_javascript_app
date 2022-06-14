# Vanilla JavaScript Starter Kit

**create_javascript_app** is a webpack configured to create modern javascript web applications.

## **Installation**

This starter kit could be installed in 2 ways.

1. Clone this repository and start working on the development.
2. Using [degit](https://github.com/Rich-Harris/degit).

### Instructions while using degit

degit installation:

```bash
npm install -g degit
```

Follow the below instructions to use this starter kit:

```
degit supminn/create_javascript_app#development my-app-name
cd my-app-name

# to start your application in localhost:8080
using npm --> npm run start
using yarn --> yarn start
```

## **List of Dependencies**

This application contains the following dependencies provided by wepack.

- Babel
- CSS support
- Assets (images)
- Code Splitting
- Caching
- HTML optimisation

#

## Babel

Babel loader converts all the code written in modern flavors of JS (and supersets of JavaScript) into plain old JavaScript code that is supported by older browsers. Thanks to Babel loader we can enjoy new JavaScript syntax and code using EcmaScript 2015 syntax.

Read more about [babel-loader](https://www.npmjs.com/package/babel-loader), [babel-loader: webpack](https://webpack.js.org/loaders/babel-loader/), [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env).

## CSS and Style Loader

css-loader is an npm module that helps webpack collect CSS code from all the CSS files referenced within this application and add it into a string.
Post which, the style-loader takes this output string includes it within the &lt;style&gt; tags in the `index.html` file.

Read more about [css-loader](https://www.npmjs.com/package/css-loader), [style-loader](https://www.npmjs.com/package/style-loader).
Read more on [css-loader in webpack](https://webpack.js.org/loaders/css-loader/).

## Including Images

In order to include images (or assets), we can use the built-in [Asset Modules](https://webpack.js.org/guides/asset-management/#loading-images) provided within webpack 5 to easily incorporate those within this application.

You can modify the app title & favicon from `html-webpack-plugin` in `webpack.commom.js` file.

## Code Splitting

Code splitting is one of the most compelling features of webpack. Using this feature, code can be split into various bundles such that parallel (or on demand) loading could be achieved. It creates smaller sized bundles and controls resource load prioritization which could lead to improvements in application's load time.

Read more about [code-splitting](https://webpack.js.org/guides/code-splitting/).

## Caching

So we're using webpack to bundle our modular application which yields a deployable /public directory. Once the contents of /public have been deployed to a server, clients (typically browsers) will hit that server to grab the site and its assets. The last step can be time consuming, which is why browsers use a technique called caching. This allows sites to load faster with less unnecessary network traffic.

Read more about [caching](https://webpack.js.org/guides/caching/#output-filenames)

 ## HTML Optimization

The `HtmlWebpackPlugin` simplifies the creation of HTML files to serve all the webpack bundles. This plugin generates a HTML5 file includes all the webpack bundles within &lt;body&gt; using &lt;script&gt; tag.

Read more about [html-webpack-plugin](https://www.npmjs.com/package/html-webpack-plugin).

## Starter kit demo

https://user-images.githubusercontent.com/30731236/121202814-37fce380-c893-11eb-9c2b-d8168c8024ec.mp4

