const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://4ftu78iqf6.execute-api.us-east-1.amazonaws.com/',
      changeOrigin: true,
      secure: false,
    })
  );
};
