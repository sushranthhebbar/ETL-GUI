import { Component, OnInit } from '@angular/core';
import { HttpClientService,Target } from '../service/http-client.service';

@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.css']
})
export class TargetComponent implements OnInit {

  constructor(private httpClientService:HttpClientService) { }

  target:Target[];

  ngOnInit(): void {
    this.httpClientService.getTarget().subscribe(
      (response) => {
        this.target = response;
        //console.log(this.target);
        }
    )
  }

}
