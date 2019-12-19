import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, URLSearchParams,ResponseContentType  } from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class DataService {
 
  constructor(private http: Http) { }

authenticateUser(username: string,password:string):Promise<any>{
    console.log('#### service: username='+username );
    let body = JSON.stringify({
                'username':username,
                'password': password      
            });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('/api/authenticateuser',body, options).toPromise().then(
            response => response.json() as any
        ).catch(this.handleError);
}

getEnquiryId():any{
  return this.http.get('/api/getEnquiryId').toPromise().then(
  response => response.json()
  ).catch(this.handleError);
  }

  getProductList():any{
    return this.http.get('/api/getProductList').toPromise().then(
    response => response.json()
    ).catch(this.handleError);
    }

    insertInqyiryDetails(data):Promise<any>{
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      return this.http.post('/api/insertInqyiryDetails',data, options).toPromise().then(
          response => response.json() as any
      ).catch(this.handleError);
  }

  updateEnquiryDetails(data):Promise<any>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('/api/updateEnquiryDetails',data, options).toPromise().then(
        response => response.json() as any
    ).catch(this.handleError);
}

modifyInqyiryDetails(data):Promise<any>{
  let headers = new Headers({ 'Content-Type': 'application/json' });
  let options = new RequestOptions({ headers: headers });
  return this.http.post('/api/modifyInqyiryDetails',data, options).toPromise().then(
      response => response.json() as any
  ).catch(this.handleError);
}

rejectInqyiryDetails(data):Promise<any>{
  let headers = new Headers({ 'Content-Type': 'application/json' });
  let options = new RequestOptions({ headers: headers });
  return this.http.post('/api/rejectInqyiryDetails',data, options).toPromise().then(
      response => response.json() as any
  ).catch(this.handleError);
}


  getEnquiryList():any{
    return this.http.get('/api/getEnquiryList').toPromise().then(
    response => response.json()
    ).catch(this.handleError);
    }

    getApprovedList():any{
      return this.http.get('/api/getApprovedList').toPromise().then(
      response => response.json()
      ).catch(this.handleError);
      }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
}
}
