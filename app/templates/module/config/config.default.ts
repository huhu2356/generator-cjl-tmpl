import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
    const config = {} as PowerPartial<EggAppConfig>;

    config.keys = appInfo.name + '_1562828039168_1595';

    config.middleware = ['errorHandler'];

    config.security = {
        csrf: {
            enable: false,
        },
    };

    config.aliyun = {
        track: {
            host: 'cn-hangzhou.log.aliyuncs.com',
            project: 'test-mingren',
            logstore: 'test',
        },
    };

    const bizConfig = {};

    return {
        ...config,
        ...bizConfig,
    };
};
