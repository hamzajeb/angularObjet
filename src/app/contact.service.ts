import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Contact} from './contact';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpClient:HttpClient) { }

  getContact():Observable<Contact[]>{
  //   var  Contactes= [
  //     { nom : "hamza" , prenom:"jebbour" , tel:"55222321",statut:"active",sex:"homme"},
  //     { nom : "said" , prenom:"karam" , tel:"55222321",statut:"inactive",sex:"homme"},
  //     { nom :"samia" , prenom:"bakkali" , tel:"80022321",statut:"active",sex:"femme"},
  //     { nom :"toto" , prenom:"toto" , tel:"55000021",statut:"inactive",sex:"homme"},
  //     { nom :"chaimae" , prenom:"salim" , tel:"55000021",statut:"inactive",sex:"homme"}
  //   ];
  //   return Contactes;
      return this.httpClient.get<Contact[]>("http://localhost/contacts-app-php-api/get_contacts.php");
  }

  
}
