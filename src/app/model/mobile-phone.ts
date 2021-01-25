/*
 * @Author: zhixiong.fu
 * @Date: 2021-01-24 16:01:10
 * @Last Modified by: zhixiong.fu
 * @Last Modified time: 2021-01-25 00:47:35
 */
import { EntityModel } from '@midwayjs/orm';
import { Column } from 'typeorm';
import { BaseModel } from '../base/base-model';

@EntityModel({
  name: 'mobile_phone'
})
export class MobilePhoneModel extends BaseModel {
  @Column({
    type: 'varchar',
    length: 50,
    name: 'model_name',
    comment: '型号'
  })
  modelName: string;

  @Column({
    type: 'varchar',
    length: 50,
    comment: '尺寸'
  })
  size: string;

  @Column({
    type: 'varchar',
    length: 50,
    comment: '规格'
  })
  spec: string;

  @Column({
    type: 'integer',
    comment: '内存'
  })
  ram: number;

  @Column({
    type: 'integer',
    comment: '空间'
  })
  rom: number;

  @Column({
    type: 'varchar',
    length: 50,
    name: 'seria_number',
    comment: '序列号'
  })
  seriaNumber: string;
}
