import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  data: Card = {
    title: 'Gatattack',
    img: 'http:...',
    attack: 188,
    type: 'venom',
  };

  constructor() {}

  ngOnInit(): void {
    this.data.attack = 233;
  }
}

interface Card {
  title: string;
  img: string;
  attack?: number;
  type: 'venom' | 'plant';
}
