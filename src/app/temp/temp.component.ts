import { Component, OnInit } from '@angular/core';
import { phonenumber } from './contact';
@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent implements OnInit {

  phonenumber: Array<phonenumber>;
  constructor() {
    this.phonenumber = [];
  }
  ngOnInit(): void {
  }

  addContact(phonenumber1, phonenumber2, phonenumber3) {
    let contact = new phonenumber(phonenumber1, phonenumber2, phonenumber3);
    this.phonenumber.push(contact);
    console.log(contact)
  }
}
