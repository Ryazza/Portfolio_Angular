import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  api = environment.urlBack;
  baseUrl = "/message/";

  constructor(private http: HttpClient) { }

  async newMessage(form: any){
    return this.http.post(this.api + this.baseUrl, form);
  }
}
