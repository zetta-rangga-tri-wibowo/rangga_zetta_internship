import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Card } from './card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  // Input decorator to pass data from parent to child component
  @Input() card!: Card; // lets a parent component update data in the child component.
  @Output() statusChange = new EventEmitter<Card>(); // lets the child send data to a parent component.
  // EventEmitter is a class that emits custom events.

  changeStatus() {
    this.card.status = this.card.status === 'active' ? 'inactive' : 'active';
    this.statusChange.emit(this.card);
  }

}
