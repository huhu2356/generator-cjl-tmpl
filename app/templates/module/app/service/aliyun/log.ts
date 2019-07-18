import { Service } from 'egg';

export default class LogService extends Service {
    public track(params) {
        const { ctx, app } = this;
        const { host, project, logstore } = app.config.aliyun.track;
        const url = `https://${project}.${host}/logstores/${logstore}/track?APIVersion=0.6.0`;
        ctx.curl(url, {
            method: 'GET',
            data: params,
        }).catch(() => {
            // ignore
        });
    }
}
