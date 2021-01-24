import { App, Configuration } from '@midwayjs/decorator';
import { ILifeCycle } from '@midwayjs/core';
import { Application } from 'egg';
import * as orm from '@midwayjs/orm';
import { join } from 'path';

@Configuration({
  imports: [
    orm, // 加载 orm 组件
  ],
  importConfigs: [join(__dirname, './config/')],
})
export class ContainerLifeCycle implements ILifeCycle {
  @App()
  app: Application;

  // 启动前处理
  async onReady(): Promise<void> {}

  // 可以在这里做些停止后处理
  // async onStop(): Promise<void> {}
}
