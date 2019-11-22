// next.config.js

const withCss = require('@zeit/next-css')

module.exports = withCss({
  environment: {
    apiUrl: process.env.API_URL,
  },
});
