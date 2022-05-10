import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {

  constructor() { 

  }
 
  
  ngOnInit(): void {
    
  }



  prix:any=200;//recuperer de BDD
  reduction:any=10;//en porcentage ,recuperer de BDD
  newPrice:any =(this.prix - (this.prix * (this.reduction/100)));
  date:any="april 8,2022 11:44:20";//recuperer de BDD un tableau de dates avec les autres colonnes de prix ,image

  days:number=0;
  hours:number=0 ;
  minutes:number=0 ;
  secs:number=0 ;
  x=setInterval(()=>{
    // let array = [1,2,3];   for pour implementer tous les articles de chrono
    // for (let i = 0; i < array.length; i++) {
    //   console.log(array[i]);
    // }
    var tab;
    tab=document.getElementById("div");
    var futureDate:any = new Date(this.date).getTime();//date que vous voulez (fin de promo), getTime() en ms,Thu Apr 07 2022 19:00:00 GMT+0200
    var today:any = new Date().getTime(); //date a ce moment, Thu Apr 07 2022 17:50:06 GMT+0200
    var distance = futureDate-today;//distance en ms
    this.days=Math.floor(distance/(1000*60*60*24));// /1000 pass en secondes, *60 pass en minutes , *60 pass en hours,*24 pass en days
    this.hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));
    this.minutes=Math.floor((distance%(1000*60*60))/(1000*60));
    this.secs=Math.floor((distance%(1000*60))/(1000));
    console.log(this.days);
    if(distance<0){
      clearInterval(this.x);
      tab.style.display="None";
      //suppression d'element dans la BDD
      this.newPrice=0;
      
    }
  },500);

  



}
