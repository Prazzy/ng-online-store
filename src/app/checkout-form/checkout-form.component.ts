import { Component } from '@angular/core';

@Component({
  selector: 'ngs-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent {

  constructor() { }

  logForm(value) {
    console.log(value);
  }
}
