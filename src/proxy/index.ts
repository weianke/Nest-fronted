import * as fs from 'fs';

function looseJsonParse(obj: any) {
  return Function('"use strict";return (' + obj + ')')();
}
function getUrl(key: any) {
  const router = fs.readFileSync('./proxy/config.js', 'utf8');
  const a = router.indexOf('{');
  const b = router.lastIndexOf('}');
  const obj = looseJsonParse(router.substring(a, b + 1));
  return obj[key];
}

export const proxyConfig = {
  location: '/api', // 默认代理路径为 /api，如果想在单个接口中设置，请在接口配置项中添加location
  siteName: '', // 默认项目名为 ''，如果想在单个接口中设置，请在接口配置项中添加siteName
  proxyObj: {
    '/api': {
      target: 'target',
      pathRewrite: { '^/api': '' },
      ws: true,
      secure: false,
      changeOrigin: true,
      router: () => {
        return getUrl('url');
      }
    }
  }
};
