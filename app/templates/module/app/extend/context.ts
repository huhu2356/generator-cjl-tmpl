import { Context } from 'egg';
import moment from 'moment';

export default {
    ok(data: {}) {
        (this as Context).body = {
            success: true,
            code: 200,
            message: 'success',
            data,
        };
        return;
    },

    fail({
        code,
        message,
        error,
    }: {
        code?: string;
        message?: string;
        error?: Error & { code };
    }) {
        const errCode = code || (error && error.code) || '00000';
        (this as Context).body = {
            success: false,
            code: Number(`5050${errCode}`),
            message: message || (error && error.message) || 'server error',
            data: null,
            error,
        };
        return;
    },

    logHttp({
        level = 'info',
        costTime = null,
        method = '',
        action = '',
        reqBody,
        resBody,
        errMsg = '',
    }: {
        level?: string;
        costTime?: number | null;
        method?: string;
        action?: string;
        reqBody?: {};
        resBody?: {};
        errMsg?: string;
    }) {
        const convertToStr = input => {
            return typeof input === 'object' ? JSON.stringify(input) : input;
        };

        const data = {
            level: level || 'info',
            created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
            costTime,
            trace_id: (this as Context).traceId || '',
            method: method || (this as Context).method,
            action:
                action ||
                `${(this as Context).origin}${(this as Context).originalUrl}`,
            reqBody: convertToStr(reqBody || (this as Context).request.body),
            resBody: convertToStr(resBody || (this as Context).body),
            errMsg,
        };

        (this as Context).service.aliyun.log.track(data);
    },
};
