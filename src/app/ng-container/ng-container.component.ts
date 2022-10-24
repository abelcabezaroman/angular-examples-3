import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.scss']
})
export class NgContainerComponent implements OnInit {

  list: string[]= ["Abel", "Julio", "Manuela", "Sara", "Gustavo"]
  constructor() { }

  ngOnInit(): void {
  }

}
