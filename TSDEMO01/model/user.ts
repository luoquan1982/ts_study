import { MssqlDb } from "../modules/db";

// 定义数据库的映射
class UserClass {
  username: string | undefined;
  password: string | undefined;
}

const UserModel = new MssqlDb<UserClass>();

export { UserClass, UserModel };
