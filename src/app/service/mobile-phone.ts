import { Provide, Inject } from "@midwayjs/decorator";
import { Context } from "egg";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository, Like } from "typeorm";
import { BaseService } from "../base/base.service";
import { MobilePhoneModel } from "../model/mobile-phone";
import { IFindIn } from "../interfaces/mobile-phone";

export interface IMobilePhoneService extends MobilePhoneService {}

@Provide()
export class MobilePhoneService extends BaseService {
  @Inject()
  ctx: Context;

  @InjectEntityModel(MobilePhoneModel)
  mobilePhoneModel: Repository<MobilePhoneModel>;

  async findAll(params: IFindIn): Promise<any> {
    const { limit, offset, ...filter } = params;
    const where: any = {};
    const order: any = { id: "DESC", createdAt: "DESC" };

    // 模糊匹配id
    if (filter.id) {
      where.id = filter.id;
    }
    // 模糊匹配名称
    if (filter.modelName) {
      where.modelName = Like(`${filter.modelName}%`);
    }

    const [rows, count] = await this.mobilePhoneModel.findAndCount({
      where,
      order,
      take: offset,
      skip: offset * (limit - 1),
    });

    return { count, rows };
  }
}
