import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
    const config: PowerPartial<EggAppConfig> = {};

    config.sequelize = {
        datasources: [
            {
                delegate: 'admobModel',
                baseDir: 'model/admob',
                dialect: 'mysql',
                database: 'test',
                host: '127.0.0.1',
                port: 3306,
                username: 'root',
                password: '123456',
                timezone: '+08:00',
            },
        ],
    };

    return config;
};
