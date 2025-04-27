// Vercel Serverless 代理，将前端的 /api/proxy/* 请求转发到后端 HTTP 接口
// 这样可以解决浏览器 Mixed Content 问题，无需后端支持 HTTPS

export default async function handler(req, res) {
  // 拼接目标后端接口地址
  const targetUrl = 'http://codercba.com:1888/airbnb/api' + req.url.replace('/api/proxy', '');

  // 构造 fetch 请求参数
  const fetchOptions = {
    method: req.method,
    headers: { ...req.headers },
    // GET 请求不能有 body
    body: req.method === 'GET' ? undefined : req.body,
  };

  // 发起请求
  const response = await fetch(targetUrl, fetchOptions);
  const data = await response.arrayBuffer();

  // 设置响应头
  response.headers.forEach((value, key) => {
    res.setHeader(key, value);
  });

  res.status(response.status).send(Buffer.from(data));
}
