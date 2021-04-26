import { Component, OnInit } from '@angular/core';
import { ETL, HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-add-source',
  templateUrl: './add-source.component.html',
  styleUrls: ['./add-source.component.css']
})
export class AddSourceComponent implements OnInit {

  source: ETL = new ETL("","","","","");
  data;
  constructor(private httpClientService:HttpClientService) { }

  ngOnInit(): void {
  }

  addSource(): void{
    this.httpClientService.addSource(this.source).subscribe(
      data => {alert("Source added successfully.");}
    )
  }

  fetchSource(): void{
    this.httpClientService.fetchSource(this.source.url).subscribe(
      response => {
        //console.log(response);
        //console.log(this.source.url);
        this.data = response;
      }
    );
  }

}
/*
https://free.currconv.com/api/v7/convert?q=INR_USD&amp;compact=ultra&amp;apiKey=d42abbfa86b83587c2cd
simple:single:same
key split_string _
key replace_from_dict 0
key add_value_to_target 0 1
key replace_from_dict 1
key add_value_to_target 1 2
none add_date_time 3 5
value split_string none
value add_value_to_target 0 3


https://free.currconv.com/api/v7/convert?q=INR_USD,CAD_USD&amp;compact=ultra&amp;apiKey=d42abbfa86b83587c2cd
simple:multiple:same
key split_string _
key replace_from_dict 0
key add_value_to_target 0 2
key replace_from_dict 1
key add_value_to_target 1 1
none add_date_time 3 5
value split_string none
value add_value_to_target 0 3

*/
