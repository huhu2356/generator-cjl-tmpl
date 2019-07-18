import { Application } from 'egg';

export default (app: Application) => {
    const { INTEGER, STRING } = app.Sequelize;
    const MmpcBindLog = app.admobModel.define(
        'mmpc_bind_log',
        {
            id: {
                autoIncrement: true,
                primaryKey: true,
                type: INTEGER,
            },
            mallId: INTEGER,
            userId: INTEGER,
            mobile: STRING,
        },
        {
            freezeTableName: true,
            underscored: true,
            tableName: 'mmpc_bind_log',
            timestamps: true,
            paranoid: true,
        },
    );

    return MmpcBindLog;
};

export interface MmpcBindLog {
    id: number;
    mallId: number;
    userId: number;
}
