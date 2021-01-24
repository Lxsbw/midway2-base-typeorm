/* eslint-disable no-console */
import { Application } from 'egg';

// https://eggjs.org/zh-cn/advanced/loader.html
export default class AppBootHook {
  app: Application;

  constructor(app: Application) {
    this.app = app;
  }

  configWillLoad(): void {
    console.log();
    console.log('====================================');
    console.log('🚀  Your awesome APP is launching...');
    console.log('====================================');
  }

  // Config, plugin files have been loaded.
  configDidLoad(): void {
    // // 增加全局x-request-id处理中间件
    // this.app.config.coreMiddleware.unshift('requestIdMiddleware');
    // // 增加全局错误处理中间件
    // this.app.config.coreMiddleware.unshift('errorHandlerMiddleware');
  }

  async serverDidReady(): Promise<void> {
    // Server is listening.
    console.log('====================================');
    console.log(
      `✅  http://${this.app.config.cluster.listen.hostname}:${this.app.config.cluster.listen.port}`
    );
    console.log(
      `✅  http://${this.app.config.cluster.listen.hostname}:${this.app.config.cluster.listen.port}/api-docs/swagger`
    );
    console.log(
      `✅  http://${this.app.config.cluster.listen.hostname}:${this.app.config.cluster.listen.port}/unittest/:api`
    );
    console.log(
      `✅  http://${this.app.config.cluster.listen.hostname}:${this.app.config.cluster.listen.port}/interface/:api`
    );
    console.log('✅  Your awesome APP launched');
    console.log('====================================');
  }
}
