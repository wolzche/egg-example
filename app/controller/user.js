'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async info() {
      const { ctx } = this;
      ctx.body = {
          name: `hello ${ctx.params.id}`,
          age: 'sdfsdf'
      };
  }
}

module.exports = UserController;
