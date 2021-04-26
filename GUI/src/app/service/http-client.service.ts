import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class ETL{
  constructor(
    public name:string,
    public type:string,
    public url:string,
    public queryFrequency:string,
    public mapping: string,
  ){}
}

export class Target{
  constructor(
    public Foreign_Exchange_Id:string,
    public Currency_Format:string,
    public Base_Format:string,
    public Currency_Value_Multiplier:string,
    public Country:string,
    public Date_Time:string,
  ){}
}

export class Transform{
  constructor(
    public transform:string
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

  public runSource(){
    return this.httpclient.post<String>("http://localhost:8080/ETL/run", "run");
  }

  public stopSource(e:ETL){
    return this.httpclient.delete<ETL>("http://localhost:8080/ETL/stop"+"/"+e.name);
  }

  public addTransform(transform: Transform){
    return this.httpclient.post<Transform>("http://localhost:8080/ETL/transform",transform);
  }

  public getTransform(){
    return this.httpclient.get<Transform[]>("http://localhost:8080/ETL/transform"); 
  }

  public fetchSource(url){
    //console.log(url);
    url = url.replaceAll("&amp;", "&");
    //console.log(url1);
    return this.httpclient.get(url);
  }

  public getTarget(){
    return this.httpclient.get<Target[]>("http://localhost:8080/ETL/target");
  }

}
