import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  constructor() { }
  // array of string
    messages: string[] = [];
  // add message function
    add(message: string) {
        this.messages.push(message);
    }
  // clear message function
    clear() {
        this.messages = [];
    }

}
