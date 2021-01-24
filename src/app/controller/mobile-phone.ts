import {
  Inject,
  Controller,
  Get,
  Post,
  //   Put,
  Provide,
  Query,
  Body,
  //   ALL,
  //   Param,
} from "@midwayjs/decorator";
import { Context } from "egg";
import { CreateApiDoc } from "@midwayjs/swagger";
import { BaseController } from "../base/base.controller";
import { IMobilePhoneService } from "../service/mobile-phone";
import { ICreateIn } from "../interfaces/mobile-phone";

@Provide()
@Controller("/api/mobile-phone", {
  tagName: "MobilePhone",
  description: "手机信息管理",
})
export class MobilePhoneController extends BaseController {
  @Inject()
  ctx: Context;

  @Inject()
  mobilePhoneService: IMobilePhoneService;

  @Get("/find")
  @(CreateApiDoc()
    .summary("id查找")
    .description("id查找")
    .param("ctx")
    .param("id", { required: true, example: "xx" })
    .build())
  async find(ctx: Context, @Query() id: string) {
    const result = await this.mobilePhoneService.findOne(ctx.request.query);
    return { success: true, message: "OK", data: result };
  }

  @Get("/findall")
  @(CreateApiDoc()
    .summary("查找")
    .description("查找")
    .param("ctx")
    .param("当前页", { type: "number", required: true, example: 0 })
    .param("每页数量", { type: "number", required: true, example: 10 })
    .param("id", { type: "string" })
    .param("型号", { type: "string" })
    .build())
  async findAll(
    ctx: Context,
    @Query() offset: number,
    @Query() limit: number,
    @Query() id: string,
    @Query() modelName: string
  ) {
    const result = await this.mobilePhoneService.findAll(ctx.request.query);
    return { success: true, message: "OK", data: result };
  }

  @Post("/create")
  @(CreateApiDoc()
    .summary("添加手机")
    .description("添加手机")
    .param("ctx")
    .param("手机信息", { type: "object", required: true })
    .build())
  async create(ctx: Context, @Body() param: ICreateIn) {
    const result = await this.mobilePhoneService.create(ctx.request.body);
    return { success: true, message: "OK", data: result };
  }

  //   @Put("/update")
  //   @(CreateApiDoc()
  //     .summary("更新手机")
  //     .description("更新手机")
  //     .param("ctx")
  //     .param("手机信息", { type: "object", required: true })
  //     .build())
  //   async update(ctx: Context, @Body() param: IUpdateIn) {
  //     console.log("Controller : ", ctx.request.body);
  //     const result = await this.mobilePhoneService.update(ctx.request.body);
  //     return { success: true, message: "OK", data: result };
  //   }
}
