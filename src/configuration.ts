import { App, Configuration } from '@midwayjs/decorator';
import { ILifeCycle } from '@midwayjs/core';
import { Application } from 'egg';
import * as orm from '@midwayjs/orm';
import * as swagger from '@midwayjs/swagger';
import { join } from 'path';

@Configuration({
  imports: [
    orm, // 加载 orm 组件
    {
      component: swagger,
      // 只在 local 环境下启用
      enabledEnvironment: ['local', 'prod']
    }
  ],
  importConfigs: [join(__dirname, './config/')]
})
export class ContainerLifeCycle implements ILifeCycle {
  @App()
  app: Application;

  // 启动前处理
  async onReady(): Promise<void> {}

  // 可以在这里做些停止后处理
  // async onStop(): Promise<void> {}
}
