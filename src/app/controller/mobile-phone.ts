import {
  Inject,
  Controller,
  Get,
  //Post,
  Provide,
  Query,
  ALL,
} from "@midwayjs/decorator";
import { Context } from "egg";
import { BaseController } from "../base/base.controller";
import { IMobilePhoneService } from "../service/mobile-phone";
import { IFindIn } from "../interfaces/mobile-phone";

@Provide()
@Controller("/api/mobile-phone")
export class MobilePhoneController extends BaseController {
  @Inject()
  ctx: Context;

  @Inject()
  mobilePhoneService: IMobilePhoneService;

  @Get("/findall")
  async findAll(ctx: Context, @Query(ALL) query: IFindIn) {
    const result = await this.mobilePhoneService.findAll(query);
    return { success: true, message: "OK", data: result };
  }
}
