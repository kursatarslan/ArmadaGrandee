// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';

export abstract class BaseService {
    constructor() { }

    protected handleError(error: any) {
    const applicationError = error.headers.get('Application-Error');

    // either applicationError in header or model error in body
    if (applicationError) {
      return Observable.throw(applicationError);
    }

    let modelStateErrors = '';
    const serverError = error.json();

    if (!serverError.type) {
      // tslint:disable-next-line:no-var-keyword
      // tslint:disable-next-line:prefer-const
      for (let key in serverError) {
        if (serverError[key]) {
          modelStateErrors += serverError[key] + '\n';
        }
      }
    }

    modelStateErrors = modelStateErrors = '' ? null : modelStateErrors;
    return Observable.throw(modelStateErrors || 'Server error');
  }
}
