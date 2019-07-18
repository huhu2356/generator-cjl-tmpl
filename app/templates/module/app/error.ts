import CODE from './code';

export class ValidationError {
    public code: string;
    public message: string;
    public stack: string;
    public error: Error;

    public constructor(error) {
        this.error = error;
        this.message = error.message;
        this.stack = error.stack;
        this.code = CODE.ERR_HTTP_PARAMS;
    }
}
