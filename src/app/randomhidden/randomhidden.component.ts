import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-randomhidden',
  templateUrl: './randomhidden.component.html',
  styleUrls: ['./randomhidden.component.scss'],
})
export class RandomhiddenComponent implements OnInit {
  newValue = '';
  characters = [
    {
      name: 'Persona',
      counter: 5,
    },
    {
      name: 'Turtle',
      counter: 1,
    },
  ];

  globalCharactersName: string[] = [];

  showingCharacterName: string = "";
  showingCounter: number = -1;

  constructor() {}

  ngOnInit(): void {}

  addNew() {
    this.characters.push({
      name: this.newValue,
      counter: 1,
    });
  }

  changeCounter(character: any, newValue: any) {
    character.counter = newValue;
  }

  start() {
    this.globalCharactersName = [];
    this.showingCounter = -1;

    for (const character of this.characters) {
      for (let index = 0; index < character.counter; index++) {
        this.globalCharactersName.push(character.name)
      }
    }

    this.globalCharactersName = this.shuffleArray(this.globalCharactersName)

    this.nextCharacterName();
  }

  nextCharacterName(){
    this.showingCounter++;
    this.showingCharacterName = this.globalCharactersName[this.showingCounter]
  }

   shuffleArray(array: string[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
}
