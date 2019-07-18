import { Controller } from 'egg';
import * as joi from 'joi';

import { ValidationError } from '../../error';

export default class BindLogController extends Controller {
    public async index() {
        const { ctx } = this;
        const { mallId, page, pageSize, startTime } = ctx.query;
        const schema = joi.object({
            mallId: joi.number().integer(),
            page: joi.number().integer(),
            pageSize: joi.number().integer(),
            startTime: joi.date().iso(),
        });
        const { error } = schema.validate({
            mallId,
            page,
            pageSize,
            startTime,
        });
        if (error) {
            throw new ValidationError(error);
        }

        const { count, list } = await ctx.service.bindLog.list({
            mallId,
            page,
            pageSize,
            startTime,
        });

        return ctx.ok({ count, list });
    }

    public async show() {
        const { ctx } = this;
        const { id } = ctx.params;
        const bindLog = await ctx.service.bindLog.show({ id });

        return ctx.ok(bindLog);
    }

    public async create() {
        const { ctx } = this;
        const { mallId, userId, mobile } = ctx.request.body;
        const bindLog = await ctx.service.bindLog.create({
            mallId,
            userId,
            mobile,
        });

        return ctx.ok(bindLog);
    }

    public async update() {
        const { ctx } = this;
        const { id } = ctx.params;
        const { mallId, userId } = ctx.request.body;
        const updatedCount = await ctx.service.bindLog.update({
            id,
            mallId,
            userId,
        });

        return ctx.ok({ updatedCount });
    }

    public async destroy() {
        const { ctx } = this;
        const { id } = ctx.params;
        const deletedCount = await ctx.service.bindLog.destroy({ id });

        return ctx.ok({ deletedCount });
    }
}
