import { Component } from '@angular/core';
import {FormsModule } from '@angular/forms';
import emailjs, {type EmailJSResponseStatus} from '@emailjs/browser';

interface ContactForm{
  nom:string;
  email:string;
  message:string;
}

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {

  form:ContactForm = {
    nom:'',
    email:'',
    message:'',
  };


  envoyer(){
    emailjs.send(
      'service_9o83nxb',
      'template_87tvvge',
      {...this.form},
      {publicKey:'Sk8fay_Gm_Fm8UkMD',
    });
    this.form.email="";
    this.form.message="";
    this.form.nom="";
    document.getElementById("remerciement")?.style.setProperty("display", "flex");
  }
}
