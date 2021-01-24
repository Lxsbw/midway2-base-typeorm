import { Provide, Inject } from "@midwayjs/decorator";
import { Context } from "egg";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository, Like, FindManyOptions } from "typeorm";
// import { LoDashStatic } from "lodash";
import { BaseService } from "../base/base.service";
import { MobilePhoneModel } from "../model/mobile-phone";
import {
  IFindIn,
  IFindOneIn,
  ICreateIn,
  ICreateOut,
  //   IUpdateIn,
} from "../interfaces/mobile-phone";
import * as SnowFlake from "../utils/SnowFlake";

export interface IMobilePhoneService extends MobilePhoneService {}

@Provide()
export class MobilePhoneService extends BaseService {
  @Inject()
  ctx: Context;

  //   @Inject()
  //   private _: LoDashStatic;

  @InjectEntityModel(MobilePhoneModel)
  mobilePhoneModel: Repository<MobilePhoneModel>;

  /**
   * id查找
   */
  async findOne(params: IFindOneIn): Promise<any> {
    const where: any = {};
    // 匹配id
    if (params.id) {
      where.id = params.id;
    }
    const result = await this.mobilePhoneModel.findOne({ where });
    return result;
  }

  /**
   * 查找
   */
  async findAll(params: IFindIn): Promise<any> {
    console.log("service : ", params);
    const { limit, offset, ...filter } = params;
    const where: any = {};
    const order: any = { id: "DESC", createdAt: "DESC" };

    // 匹配id
    if (filter.id) {
      where.id = filter.id;
    }
    // 模糊匹配名称
    if (filter.modelName) {
      where.modelName = Like(`${filter.modelName}%`);
    }

    const options: FindManyOptions = {
      where,
      order,
      skip: offset,
      take: limit,
    };

    const [rows, count] = await this.mobilePhoneModel.findAndCount(options);

    return { count, rows };
  }

  /**
   * 添加手机
   */
  async create(param: ICreateIn): Promise<ICreateOut> {
    console.log("service param : ", param);
    const inse = param as MobilePhoneModel;
    console.log("service param as inse: ", inse);
    inse.id = SnowFlake.GetId();
    console.log("service inse : ", inse);
    const entity = await this.mobilePhoneModel.save(inse);

    console.log("service entity : ", entity);

    return { id: entity.id };
  }

  //   /**
  //    * 更新
  //    */
  //   async update(param: IUpdateIn): Promise<any> {
  //     let uData: any = {};
  //     if (param.id) {
  //       uData.id = param.id;
  //     }
  //     if (param.modelName) {
  //       uData.modelName = param.modelName;
  //     }
  //     if (param.size) {
  //       uData.size = param.size;
  //     }
  //     if (param.spec) {
  //       uData.spec = param.spec;
  //     }
  //     if (param.ram) {
  //       uData.ram = this._.toInteger(param.ram);
  //     }
  //     if (param.rom) {
  //       uData.rom = this._.toInteger(param.rom);
  //     }
  //     if (param.seriaNumber) {
  //       uData.seriaNumber = param.seriaNumber;
  //     }

  //     const where = { id: param.id };

  //     const result = await this.mobilePhoneModel.update(uData, where);
  //     console.log(result);
  //     return result;
  //   }
}
