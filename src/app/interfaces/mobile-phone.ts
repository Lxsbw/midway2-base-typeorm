import { Rule, RuleType } from "@midwayjs/decorator";
import { CreateApiPropertyDoc } from "@midwayjs/swagger";

/**
 * 查找
 */
export class IFindIn {
  @CreateApiPropertyDoc("当前页")
  @Rule(RuleType.number().min(1).max(100000).default(1).optional())
  offset?: number;

  @CreateApiPropertyDoc("每页数量")
  @Rule(RuleType.number().min(1).max(1000).default(10).optional())
  limit?: number;

  @CreateApiPropertyDoc("筛选字段-id")
  @Rule(RuleType.string().trim().max(10).optional())
  id?: string;

  @CreateApiPropertyDoc("筛选字段-名称")
  @Rule(RuleType.string().trim().max(50).optional())
  modelName?: string;
}
