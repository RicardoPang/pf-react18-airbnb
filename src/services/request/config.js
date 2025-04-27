// 本地开发直接请求后端 HTTP，线上部署通过 Vercel 代理转发，彻底解决 Mixed Content 和本地开发 404 问题
export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://codercba.com:1888/airbnb/api"
    : "/api/proxy";
export const TIMEOUT = 10000;
