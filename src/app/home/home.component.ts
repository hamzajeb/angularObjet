// import { ContactService } from './../contact.service';
import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Nom:string;
  Prenom:string;
  tel:number;
  Date=new Date();
  Contactes : any;


  constructor(private contactService:ContactService) { }

  ngOnInit(): void {
    // this.Nom="hamza";
    // this.Prenom="jebbour";
    // this.tel=6105927;
    // this.Date=new Date();
    // this.Contactes=this.contactService.getContact();
    this.contactService.getContact().subscribe(
      (data : Contact[])=>{
        this.Contactes=data;
      }
    )

  }

  removeContact(i:any){
    console.log(i);
    this.Contactes.splice(i,1);
  }

}
