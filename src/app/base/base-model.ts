import { CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

/**
 * 基础的Model，对id字段默认会 转字符串处理
 * 继承该Model的话，必须是有id字段的表
 * 默认还会有createdAt、updatedAt
 */
export class BaseModel {
  //   id: string;

  //   @CreateDateColumn({
  //     name: "created_at",
  //   })
  //   createdAt: Date;

  //   @UpdateDateColumn({
  //     name: "updated_at",
  //   })
  //   updatedAt: Date;

  @CreateDateColumn({
    type: 'datetime',
    name: 'created_at',
    comment: '创建时间'
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'datetime',
    name: 'updated_at',
    comment: '更新时间'
  })
  updatedAt: Date;

  // 软删除默认需要配置的字段
  @DeleteDateColumn({
    type: 'datetime',
    name: 'deleted_at',
    select: false,
    comment: '删除时间'
  })
  deletedAt: Date;

  // 对字段进行预处理
  //   @AfterLoad()
  //   init() {
  //     this.id = String(this.id);
  //   }
}
