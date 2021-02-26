import {
  Provide,
  Inject,
  Controller,
  Get,
  Post,
  Put,
  Del,
  Query,
  Body,
  Param,
  Validate
} from '@midwayjs/decorator';
import { Context } from 'egg';
import { CreateApiDoc } from '@midwayjs/swagger';
import { BaseController } from '../base/base.controller';
import { IMobilePhoneService } from '../service/mobile-phone';
import { ICreateIn, IUpdateIn } from '../interfaces/mobile-phone';

@Provide()
@Controller('/api/mobile-phone', {
  tagName: 'MobilePhone',
  description: '手机信息管理'
})
export class MobilePhoneController extends BaseController {
  @Inject()
  ctx: Context;

  @Inject()
  mobilePhoneService: IMobilePhoneService;

  @Get('/find')
  @(CreateApiDoc()
    .summary('id查找')
    .description('id查找')
    .param('id', { name: 'id', required: true, example: 'xx' })
    .build())
  async find(@Query() id: string) {
    const result = await this.mobilePhoneService.findOne(
      this.ctx.request.query
    );
    return { success: true, message: 'OK', data: result };
  }

  @Get('/findall')
  @(CreateApiDoc()
    .summary('查找')
    .description('查找')
    .param('当前页', {
      name: 'offset',
      type: 'number',
      required: true,
      example: 0
    })
    .param('每页数量', {
      name: 'limit',
      type: 'number',
      required: true,
      example: 10
    })
    .param('id', { name: 'id', type: 'string' })
    .param('型号', { name: 'modelName', type: 'string' })
    .build())
  async findAll(
    @Query('offset') offset: number,
    @Query('limit') limit: number,
    @Query('id') id: string,
    @Query('modelName') modelName: string
  ) {
    const result = await this.mobilePhoneService.findAll(
      this.ctx.request.query
    );
    return { success: true, message: 'OK', data: result };
  }

  @Post('/create')
  @Validate()
  @(CreateApiDoc()
    .summary('添加手机')
    .description('添加手机')
    .param('手机信息', { type: 'object', required: true })
    .build())
  async create(@Body() param: ICreateIn) {
    const result = await this.mobilePhoneService.create(this.ctx.request.body);
    return { success: true, message: 'OK', data: result };
  }

  @Put('/update')
  @(CreateApiDoc()
    .summary('更新手机')
    .description('更新手机')
    .param('手机信息', { type: 'object', required: true })
    .build())
  async update(@Body() param: IUpdateIn) {
    // console.log("Controller : ", this.ctx.request.body);
    const result = await this.mobilePhoneService.update(this.ctx.request.body);
    return { success: true, message: 'OK', data: result };
  }

  @Del('/delete/:id')
  @(CreateApiDoc()
    .summary('删除手机')
    .description('删除手机')
    .param('手机id', { name: 'id', type: 'object', required: true })
    .build())
  async delete(@Param() id: string) {
    console.log('Controller : ', this.ctx.params);
    const result = await this.mobilePhoneService.delete({
      id: this.ctx.params.id
    });
    return { success: true, message: 'OK', data: result };
  }
}
