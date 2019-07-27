<h1 align="center">gatsby-theme-auth0 🔐</h1>

<p align="center">
  <strong>A Gatsby theme for adding Auth0 to your application.</strong>
</p>

[![GitHub](https://img.shields.io/github/license/epilande/gatsby-theme-auth0?style=flat-square)](https://github.com/epilande/gatsby-theme-auth0/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/gatsby-theme-auth0?style=flat-square)](https://www.npmjs.com/package/gatsby-theme-auth0)
[![Netlify Status](https://api.netlify.com/api/v1/badges/c495103e-b0fc-4378-adea-9845c8c1476c/deploy-status)](https://app.netlify.com/sites/gatsby-theme-auth0/deploys)

## Installation

```sh
$ npm install --save gatsby-theme-auth0
```

## Usage

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-auth0",
      options: {
        domain: process.env.AUTH0_DOMAIN,
        clientID: process.env.AUTH0_CLIENT_ID,
        redirectUri: process.env.AUTH0_CALLBACK_URL,
        // audience: process.env.AUTH0_AUDIENCE, // Optional
        // responseType: process.env.AUTH0_RESPONSE_TYPE, // Optional
        // scope: process.env.AUTH0_SCOPE, // Optional
      },
    },
  ],
};
```

### Theme options

| Key            | Default                  | Required | Description                     |
| -------------- | ------------------------ | -------- | ------------------------------- |
| `domain`       |                          | `true`   | Configure Auth0 `Domain`        |
| `clientID`     |                          | `true`   | Configure Auth0 `Client ID`     |
| `redirectUri`  |                          | `true`   | Configure Auth0 `Callback URL`  |
| `audience`     |                          | `false`  | Configure Auth0 `Audience`      |
| `responseType` | `"token id_token"`       | `false`  | Configure Auth0 `Response Type` |
| `scope`        | `"openid email profile"` | `false`  | Configure Auth0 `Scope`         |

<!-- ## Shadowing -->

## Dev

### Set up env variables

Go to demo application directory, copy the `.env.example` -> `.env.development`. Fill in the required environment variables before starting up the client dev server.

### Available Scripts

#### `$ yarn dev`

This will run the demo app in development mode using `.env.development`.

Navigate to [http://localhost:8000](http://localhost:8000) to view it in the browser.

#### `$ yarn build`

This will build the demo app for production using `.env.production`.

Outputs to the `demo/public` folder.
