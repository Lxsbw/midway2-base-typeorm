import { ConnectionOptions } from 'typeorm';

// 数据库配置
export const orm: ConnectionOptions = {
  type: 'mysql',
  host: '121.37.188.31',
  port: 6606,
  username: 'root',
  password: 'Admin@123',
  database: 'egg_test',
  synchronize: false,
  logging: true,
};

export const cluster = {
  listen: {
    path: '',
    port: 8088,
    hostname: '127.0.0.1',
  },
};

export const security = {
  csrf: false,
};
