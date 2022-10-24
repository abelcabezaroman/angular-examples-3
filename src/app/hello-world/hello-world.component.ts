import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit {

  name!: string;
  age: any = 27;
  role: string = "Teacher";

  days: number[] = [21,31,16,12]

  constructor() { }

  ngOnInit(): void {

    this.age = "27";
  }

}
