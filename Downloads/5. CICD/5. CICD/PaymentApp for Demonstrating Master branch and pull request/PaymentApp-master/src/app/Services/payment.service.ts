import { Injectable, EventEmitter } from '@angular/core';
import { Card } from '../Shared/card.model'

@Injectable({
    providedIn: 'root'
  })
export class paymentService{

    cardSelected = new EventEmitter();

    cards: Card[] = [
        new Card("Credit Card"),
        new Card("Debit Card"),
        new Card("UPI"),
        new Card("Paytm"),
      ];

    getPaymentMethods(){
        return this.cards.slice();
    }
}