import { EggAppConfig, EggAppInfo, PowerPartial } from "egg";

export type DefaultConfig = PowerPartial<EggAppConfig>;

export default (appInfo: EggAppInfo) => {
  const config = {} as DefaultConfig;

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1611416695132_5898";

  // add your config here
  config.middleware = [];

  config.swagger = {
    title: "Midway2 Swagger",
    description:
      "This is a sample server Midway server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.",
    version: "1.0.0",
    termsOfService: "https://github.com/fsd-nodejs/service-mw2",
    contact: {
      name: "tkvern",
      url: "https://github.com/tkvern",
      email: "lxsbw@outlook.com",
    },
    license: {
      name: "MIT",
      url: "https://github.com/midwayjs/midway/blob/serverless/LICENSE",
    },
    // 访问：http://127.0.0.1:7001/swagger-ui/index.html 拿到 swagger UI 界面。
    // 访问：http://127.0.0.1:7001/swagger-ui/json 拿到 swagger json 结构。
  };

  return config;
};
