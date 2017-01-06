import { ErrorHandler } from '@angular/core';


/*class ArrayLogger {
    res = [];
    log(s: any): void { this.res.push(s); }
    logError(s: any): void { this.res.push(s); }
    logGroup(s: any): void { this.res.push(s); }
    logGroupEnd() {
        this.res.forEach(error => {
            console.error(error);
        });
    };
} Ashish*/
export class CustomExceptionHandler extends ErrorHandler {
    constructor() {
        super(/*new ArrayLogger(), true*/);
    }

    handleError(error: any): void {

        if (~[401, 404].indexOf(error.status)) {
            window.location.hash = '/login';
        } else {
            super.handleError(error);
        }
    }
}
