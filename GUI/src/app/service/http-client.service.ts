import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class ETL{
  constructor(
    public name:string,
    public type:string,
    public url:string,
  ){}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpclient: HttpClient) { }

  public getMessage(){
    console.log("getMessage");
    return this.httpclient.get<ETL[]>("http://localhost:8080/ETL");
  }

  public deleteSource(e:ETL) {
    return this.httpclient.delete<ETL>("http://localhost:8080/ETL" + "/"+ e.name);
  }

  public addSource(e:ETL){
    return this.httpclient.post<ETL>("http://localhost:8080/ETL",e);
  }

}
