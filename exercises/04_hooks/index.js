const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>シンプルアプリ</title>
    </head>
    <body>
      <h1>ようこそ！</h1>
      <p>これはシンプルな Node.js アプリケーションです。</p>
    </body>
    </html>
  `);
});

server.listen(PORT, () => {
  console.log(`サーバーが http://localhost:${PORT} で起動しました`);
});
