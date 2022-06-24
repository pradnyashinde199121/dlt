import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }

  getInputVlues(data:any){
    const HeaderOpt = {
      headers :new HttpHeaders({ 'Content-Type': 'application/json' })
    }

    return this.http.post<any>('https://poc.molecularconnections.com/Tree/getTerm',data,HeaderOpt);
  }
}
