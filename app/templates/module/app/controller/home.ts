import { Controller } from 'egg';

export default class HomeController extends Controller {
    public async index() {
        this.ctx.body = `cjl-tmpl env:${this.app.config.env}`;
    }

    public async status() {
        this.ctx.body = 'ok';
    }

    public async all() {
        this.ctx.body = 'wow, all miss';
    }
}
