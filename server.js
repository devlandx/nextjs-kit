/*
 * @Author: starkwang
 * @Contact me: https://shudong.wang/about
 * @Date: 2019-11-21 15:25:24
 * @LastEditors: starkwang
 * @LastEditTime: 2019-11-27 18:30:56
 * @Description: file content
 */
const Koa = require('koa');
const next = require('next');
const Router = require('koa-router');
const proxyMiddleware = require('http-proxy-middleware');
const c2k = require('koa2-connect');
const Sentry = require('@sentry/node');
// const routes = require('./routes');
const dev = process.env.NODE_ENV === 'development';
const app = next({ dev });
const handle = app.getRequestHandler();
// const handler = routes.getRequestHandler(app);
// process.exit(1)
const port = 3200;
Sentry.init({
  dsn: ''
});

// 客户端跨域代理
const proxyTable = {
  '/node': {
    target: 'https://api.shudong.wang',
    changeOrigin: true
  }
};

app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();
  Object.keys(proxyTable).forEach(context => {
    let options = proxyTable[context];
    if (typeof options === 'string') {
      options = { target: options };
    }
    router.get('*', c2k(proxyMiddleware(options.filter || context, options)));
  });
  router.get('/a/:id', async ctx => {
    console.log('ctx.query', ctx);
    await app.render(ctx.req, ctx.res, '/b', ctx.query);
    // ctx.respond = false;
  });
  router.get('/b', async ctx => {
    await app.render(ctx.req, ctx.res, '/a', ctx.query);
    ctx.respond = false;
  });

  router.get('*', async ctx => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  server.use(async (ctx, nxt) => {
    ctx.res.statusCode = 200;
    await nxt();
  });

  server.use(router.routes());
  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
