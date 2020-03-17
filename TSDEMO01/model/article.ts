import { MssqlDb } from "../modules/db";

// 定义数据库的映射
class ArticleClass {
  title: string | undefined;
  desc: string | undefined;
}

const ArticleModel = new MssqlDb<ArticleClass>();

export { ArticleClass, ArticleModel };
