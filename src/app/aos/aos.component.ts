import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-aos',
  templateUrl: './aos.component.html',
  styleUrls: ['./aos.component.css']
})
export class AOSComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

  myFunc(){
    var input,filter,tr,td,i,tab,txtValue;
    input=(<HTMLInputElement>document.getElementById("myInput"));
    filter=input.value.toUpperCase();
    tab=document.getElementById("tab");
    tr=tab.getElementsByClassName("a");
    for(i=0;i<tr.length;i++){
      td=<HTMLInputElement>tr[i];
      console.log(td);
      if(td){
        txtValue=td.textContent||td.innerText;
        console.log(txtValue);
        console.log(filter);
        if(txtValue.toUpperCase().indexOf(filter)>-1){
          td.style.display="";
        }else{
          td.style.display="None";
        }
      }
    }
  }

}
