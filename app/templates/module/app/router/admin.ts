import { Application } from 'egg';

export default (app: Application) => {
    const { router, controller } = app;

    /**
     * 
     * @api {get} /api/v1/bind-logs 注册用户列表
     * @apiName bindlog list
     * @apiGroup BindLogs
     * @apiVersion  1.0.0
     * 
     * @apiParam  {int} mall-id 商场id
     * @apiParam  {int} page
     * @apiParam  {int} page-size
     * 
     * @apiSuccess (200) {int} id unique id
     * 
     * @apiParamExample Request-Example:
     * {{host}}/api/v1/bind-logs/?mall-id=553
     * 
     * @apiSuccessExample Success-Response:
     * {
        "success": true,
        "code": 200,
        "message": "success",
        "data": {
            "count": 12593,
            "list": [
                {
                    "id": 4,
                    "mallId": 553,
                    "userId": 5410736,
                    "mobile": "15129683057",
                    "createdAt": "2019-04-19T10:08:49.000Z",
                    "updatedAt": "2019-04-19T10:08:49.000Z",
                    "deletedAt": null
                }
            ]
        }
    }
     * 
     */
    router.get('/api/v1/bind-logs', controller.v1.bindLog.index);

    router.get('/api/v1/bind-logs/:id', controller.v1.bindLog.show);
    router.post('/api/v1/bind-logs', controller.v1.bindLog.create);
    router.put('/api/v1/bind-logs/:id', controller.v1.bindLog.update);
    router.del('/api/v1/bind-logs/:id', controller.v1.bindLog.destroy);
};
