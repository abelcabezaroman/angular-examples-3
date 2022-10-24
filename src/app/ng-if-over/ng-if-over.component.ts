import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-over',
  templateUrl: './ng-if-over.component.html',
  styleUrls: ['./ng-if-over.component.scss'],
})
export class NgIfOverComponent implements OnInit {
  age: number = 15;

  constructor() {}

  ngOnInit(): void {}

  happyBirthday() {
    this.age++;
  }

  planets = [
    {
      name: 'Mercurio',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Mercury_in_color_-_Prockter07_centered.jpg',
    },{
      name: "Venus",
      img: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Venus-real_color.jpg"
    },
    {
      name: "Tierra",
      img: "https://upload.wikimedia.org/wikipedia/commons/1/1f/As08-16-2593.jpg"
    },{
      name: "Marte",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Schiaparelli_Hemisphere_Enhanced.jpg/640px-Schiaparelli_Hemisphere_Enhanced.jpg"
    }
  ];
}
