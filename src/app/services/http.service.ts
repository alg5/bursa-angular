import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
// import { User } from './user';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
// import { Customer } from '../objects/Customer';
//  import { PaperModel } from '../Models/PaperModel';

@Injectable({ providedIn: 'root' })
export class HttpService {
// papers: PaperModel[];
  constructor(private http: HttpClient) { }

  
  GetPapers(numPage = 1, rows = 5, dateFrom : string, dateTo :string ): Observable<any>  {
    //const strUsers = "assets/users.json";
    const res = "http://localhost:5000/Paper/GetPapers";
    console.log("444:dateFrom", dateFrom);
    let params = new HttpParams().set('page', numPage.toString()).set('rows', rows.toString())
    .set('from', dateFrom).set('to', dateTo);
    return this.http.get(res, { params: params }).pipe(map(data => {
      const bt = data['BursaTypeList'];
      const pt = data['PapersList'];
      // const papersData = JSON.parse(data as string);
      // console.log("GetPapers: ", data);
      // console.log("BursaTypeList: ", bt);
      // console.log("PapersList: ", pt);

      // return papersData;
      return data;
      
    }),
      catchError(err => {
        console.log("err: ", err);
        return throwError(err);
      }))
  };
  GetPaperById(paperId :number ): Observable<any>  {
    //const strUsers = "assets/users.json";
    const res = "http://localhost:5000/Paper/GetPaperById";
    let params = new HttpParams().set('id', paperId.toString())
    return this.http.get(res, { params: params }).pipe(map(data => {

      console.log("GetPaperById: ", data);

      // return papersData;
      return data;
      
    }),
      catchError(err => {
        console.log("err: ", err);
        return throwError(err);
      }))
  };
  SearchPapersByName(paperName :string ): Observable<any>  {
    //const strUsers = "assets/users.json";
    const res = "http://localhost:5000/Paper/SearchPapersByName";
    let params = new HttpParams().set('name', paperName)
    return this.http.get(res, { params: params }).pipe(map(data => {

      // console.log("SearchPapersByName: ", data);

      // return papersData;
      return data;
      
    }),
      catchError(err => {
        console.log("err: ", err);
        return throwError(err);
      }))
  };
}