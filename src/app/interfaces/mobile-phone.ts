import { Rule, RuleType } from "@midwayjs/decorator";
import { CreateApiPropertyDoc } from "@midwayjs/swagger";

/**
 * 查找
 */
export class IFindIn {
  @CreateApiPropertyDoc("当前页")
  @Rule(RuleType.number().required().min(1).max(100000).default(1).optional())
  offset?: number;

  @CreateApiPropertyDoc("每页数量")
  @Rule(RuleType.number().required().min(1).max(1000).default(10).optional())
  limit?: number;

  @CreateApiPropertyDoc("筛选字段-id")
  @Rule(RuleType.string().trim().max(10).optional())
  id?: string;

  @CreateApiPropertyDoc("筛选字段-型号")
  @Rule(RuleType.string().trim().max(50).optional())
  modelName?: string;
}

export class IFindOneIn {
  @CreateApiPropertyDoc("筛选字段-id")
  @Rule(RuleType.string().required().trim().max(10).optional())
  id?: string;
}

export class ICreateIn {
  /**
   * 型号
   */
  @CreateApiPropertyDoc("型号", { example: "xx" })
  modelName: string;
  /**
   * 尺寸
   */
  @CreateApiPropertyDoc("尺寸", { example: "4.7" })
  size: string;
  /**
   * 规格
   */
  @CreateApiPropertyDoc("规格", { example: "blue" })
  spec: string;
  /**
   * 内存
   */
  @CreateApiPropertyDoc("内存", { example: 800 })
  ram: number;
  /**
   * 空间
   */
  @CreateApiPropertyDoc("空间", { example: 12800 })
  rom: number;
  /**
   * 序列号
   */
  @CreateApiPropertyDoc("序列号", { example: "00010" })
  seriaNumber: string;
}

export class ICreateOut {
  /**
   * id
   */
  @CreateApiPropertyDoc("id")
  id: string;
}

export class IUpdateIn {
  /**
   * id
   */
  @CreateApiPropertyDoc("id")
  id: string;
  /**
   * 型号
   */
  @CreateApiPropertyDoc("型号")
  modelName: string;
  /**
   * 尺寸
   */
  @CreateApiPropertyDoc("尺寸")
  size: string;
  /**
   * 规格
   */
  @CreateApiPropertyDoc("规格")
  spec: string;
  /**
   * 内存
   */
  @CreateApiPropertyDoc("内存")
  ram: number;
  /**
   * 空间
   */
  @CreateApiPropertyDoc("空间")
  rom: number;
  /**
   * 序列号
   */
  @CreateApiPropertyDoc("序列号")
  seriaNumber: string;
}
