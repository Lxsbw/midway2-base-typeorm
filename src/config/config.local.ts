import { ConnectionOptions } from 'typeorm';

// 数据库配置
export const orm: ConnectionOptions = {
  type: 'mysql',
  host: '121.37.188.31',
  port: 6606,
  username: 'root',
  password: 'Admin@123',
  database: 'midway_test',
  synchronize: false,
  logging: true
};

// 这个配置在local是占位，不起作用
// config.cluster是 egg-cluster 的配置，midway 在 dev 时已经不再使用 egg-cluster，所以不会生效。
// 可以在 dev 时增加端口解决 "dev": "midway-bin dev --ts --port=6001"
// 部署时，如果使用 egg-scripts，将会继续生效。如果使用 bootstrap 方式，可以通过 configuire({port: 6001}) 参数解决。
export const cluster = {
  listen: {
    path: '',
    port: 8088,
    hostname: '127.0.0.1'
  }
};

export const security = {
  csrf: false
};
