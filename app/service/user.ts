import { Service } from 'egg';

export interface UserObj {
  name: string;
  create_at?: Date;
  update_at?: Date;
}

export default class UserService extends Service {
  async getAllUsers() {
    const { ctx } = this;
    const users = await ctx.model.User.findAll();
    return users;
  }

  async getUserById(id: number) {
    const { ctx } = this;
    const user = await ctx.model.User.findByPk(id);
    return user;
  }

  async createUser(crateObj: UserObj) {
    const { ctx } = this;
    const user = await ctx.model.User.create({ ...crateObj });
    return user;
  }

  async updateUser(id: number, updateObj: UserObj) {
    const { ctx } = this;
    const user = await ctx.model.User.findByPk(id);
    if (!user) {
      return null;
    }
    await user.update(updateObj);
    return user;
  }

  async deleteUser(id: number) {
    const { ctx } = this;
    const user = await ctx.model.User.findByPk(id);
    if (!user) {
      return null;
    }
    await user.destroy();
    return user;
  }
}
