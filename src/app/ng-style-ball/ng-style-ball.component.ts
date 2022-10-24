import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style-ball',
  templateUrl: './ng-style-ball.component.html',
  styleUrls: ['./ng-style-ball.component.scss']
})
export class NgStyleBallComponent implements OnInit {

  @Input() color: string = "red";

  constructor() { }

  ngOnInit(): void {
  }

}
