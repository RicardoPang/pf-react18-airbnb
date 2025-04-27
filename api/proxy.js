// Vercel Serverless 代理，将前端的 /api/proxy/* 请求转发到后端 HTTP 接口
// 这样可以解决浏览器 Mixed Content 问题，无需后端支持 HTTPS

export default async function handler(req, res) {
  // 保证路径拼接正确，/api/proxy/home/plus => /airbnb/api/home/plus
  const backendPath = req.url.replace(/^\/api\/proxy/, '');
  const targetUrl = 'http://codercba.com:1888/airbnb/api' + backendPath;

  const fetchOptions = {
    method: req.method,
    headers: { ...req.headers },
    body: req.method === 'GET' ? undefined : req.body,
  };

  const response = await fetch(targetUrl, fetchOptions);
  const data = await response.arrayBuffer();

  response.headers.forEach((value, key) => {
    res.setHeader(key, value);
  });

  res.status(response.status).send(Buffer.from(data));
}
