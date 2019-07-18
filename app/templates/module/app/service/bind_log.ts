import { Service } from 'egg';
import { MmpcBindLog } from '../model/admob/mmpc_bind_log';

export default class BindLogService extends Service {
    public async list({ mallId, page, pageSize, startTime }) {
        const { ctx, app } = this;
        const { offset, limit } = ctx.helper.paginate({ page, pageSize });
        const Op = app.Sequelize.Op;
        const {
            count,
            rows: bingLogsI,
        } = await ctx.admobModel.MmpcBindLog.findAndCountAll({
            where: {
                ...(mallId && { mallId }),
                ...(startTime && { createdAt: { [Op.gt]: startTime } }),
            },
            offset,
            limit,
        });
        const bindLogs = bingLogsI.map(e => e.dataValues);

        return {
            count,
            list: bindLogs,
        };
    }

    public async show({ id }): Promise<MmpcBindLog> {
        const { ctx } = this;
        const bindLogI = await ctx.admobModel.MmpcBindLog.findOne({
            where: { id },
        });
        const bindLog = bindLogI ? bindLogI.dataValues : null;

        return bindLog;
    }

    public async destroy({ id }) {
        const { ctx } = this;
        const deletedCount = await ctx.admobModel.MmpcBindLog.destroy({
            where: { id },
        });

        return deletedCount;
    }

    public async create({ mallId, userId, mobile }) {
        const { ctx } = this;
        const bindLogI = await ctx.admobModel.MmpcBindLog.create({
            mallId,
            userId,
            mobile,
        });

        return bindLogI.dataValues;
    }

    public async update({ id, mallId, userId }) {
        const { ctx } = this;
        const [updatedCount] = await ctx.admobModel.MmpcBindLog.update(
            {
                mallId,
                userId,
            },
            {
                where: { id },
            },
        );

        return updatedCount;
    }
}
