import { Context } from 'egg';
import * as _ from 'lodash';
import { v4 as uuid } from 'uuid';

export default () => {
    return async (ctx: Context, next: Function) => {
        const startTime = new Date().getTime();
        try {
            // TODO
            ctx.traceId = uuid();
            // under the hood: it change the querystring
            ctx.query = _.mapKeys(ctx.query, (_val, key) => {
                return _.camelCase(key);
            });
            await next();

            const endTime = new Date().getTime();
            ctx.logHttp({
                level: 'info',
                costTime: endTime - startTime,
            });
        } catch (error) {
            ctx.fail({ error });

            const endTime = new Date().getTime();
            ctx.logHttp({
                level: 'error',
                costTime: endTime - startTime,
                errMsg: error.stack,
            });
        }
    };
};
