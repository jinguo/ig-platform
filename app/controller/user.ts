import { Controller } from 'egg';

export default class UserController extends Controller {
  // users GET
  async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.user.getAllUsers();
  }

  // users/:id GET
  async show() {
    const { ctx } = this;
    const { id } = ctx.params;
    ctx.body = await ctx.service.user.getUserById(id);
  }

  // users POST
  async create() {
    const { ctx } = this;
    ctx.body = await ctx.service.user.createUser({
      ...ctx.request.body,
      create_at: new Date(),
    });
  }

  // users/:id PUT
  async update() {
    const { ctx } = this;
    const { id } = ctx.params;
    ctx.body = await ctx.service.user.updateUser(id, {
      ...ctx.request.body,
      update_at: new Date(),
    });
  }

  // users/:id DELETE
  async destroy() {
    const { ctx } = this;
    const { id } = ctx.params;
    ctx.body = await ctx.service.user.deleteUser(id);
  }
}
