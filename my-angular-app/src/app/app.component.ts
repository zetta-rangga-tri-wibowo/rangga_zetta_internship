import { Component } from '@angular/core';
import {Card} from "./component/card/card.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-app';

  // initial cards
  cards: Card[] = [
    { id: 1, title: 'Card 1', description: 'This is card 1', status: 'active' },
    { id: 2, title: 'Card 2', description: 'This is card 2', status: 'inactive' },
    { id: 3, title: 'Card 3', description: 'This is card 3', status: 'active' }
  ]

  // Function add a new card
  addCard() {
    this.cards.push({
      id: this.cards.length + 1,
      title: `Card ${this.cards.length + 1}`,
      description: `This is card ${this.cards.length + 1}`,
      status: 'inactive'
    });
  }

  // Function to remove a card
  resetCards() {
    this.cards = [];
  }

  // Delete a card
  deleteCard(cardId: number) {
    this.cards = this.cards.filter(c => c.id !== cardId);
  }

  // Function to handle the status change of the card
  onStatusChange(updatedCard: Card) {
    const card = this.cards.find(c => c.id === updatedCard.id);
    if (card) {
      card.status = updatedCard.status;
    }
  }
}
