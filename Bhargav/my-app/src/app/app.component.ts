import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'bhargav';

  public secation:string;
  public sizeText:number;

  constructor() { 
    this.secation="bhargav";
    this.sizeText=50;
  }

  public buttonlist(patel:string):void{
    if(patel=='deceres')
{
  this.sizeText=this.sizeText -10;
}
else{
  this.sizeText=this.sizeText +10;

}
  }
  ngOnInit(): void {
  }

}
