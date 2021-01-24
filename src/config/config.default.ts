import { EggAppConfig, EggAppInfo, PowerPartial } from "egg";

export type DefaultConfig = PowerPartial<EggAppConfig>;

export default (appInfo: EggAppInfo) => {
  const config = {} as DefaultConfig;

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1611416695132_5898";

  // add your config here
  config.middleware = [];

  /**
   *  cluster 端口
   */
  config.cluster = {
    listen: {
      path: "",
      port: 7002,
      hostname: "127.0.0.1",
    },
  };

  return config;
};
