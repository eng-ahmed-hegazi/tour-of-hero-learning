import { Component, OnInit } from '@angular/core';
import {MessageService} from "../message.service";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
// inject service to the component constructor
// if you want to use the service you should import it and Inject it into the constructor
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
