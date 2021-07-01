import { Component, OnInit } from '@angular/core';
import {MessageService} from "../../service/message.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  email: any;
  subject: any;
  message: any;

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }

  async onSubmit(event: any) {
      event.preventDefault();
    (await this.messageService.newMessage({
        contact: this.email,
        sujet: this.subject,
        message: this.message
      })).subscribe({
        next: data => {
          let result = document.getElementById('resultMsg')
          //@ts-ignore
          if(data.success === true) {
            if(result) {
              result.innerText = "Votre message a bien été envoyer !";
              // @ts-ignore
              (document.getElementById('email')).value = "";
              // @ts-ignore
              (document.getElementById('sujet')).value = "";
              // @ts-ignore
              (document.getElementById('message')).value = "";
            }
          } else {
            if(result) {
              result.innerText = "Votre message n'a pas été envoyer :("
            }
          }
        }
      })
  }

  handleEmailChange(event: any) {
    this.email = event.target.value;
  }

  handleSubjectChange(event: any) {
    this.subject = event.target.value;
  }

  handleMessageChange(event: any) {
    this.message = event.target.value;
  }
}
