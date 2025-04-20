const { createServer } = require('vite');

(async () => {
  const server = await createServer({
    // any valid user config options, plus `mode` and `configFile`
    configFile: './vite.config.js',
    root: process.cwd(),
    server: {
      port: 3000,
    },
  });
  await server.listen();

  server.printUrls();
})();
