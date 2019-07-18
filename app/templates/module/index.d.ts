import 'egg';
import * as sequelize from 'sequelize';

declare module 'egg' {
    interface IModel extends sequelize.Sequelize, PlainObject {}

    interface Application {
        admobModel: IModel;
    }

    interface Context {
        admobModel: IModel;
    }
}
