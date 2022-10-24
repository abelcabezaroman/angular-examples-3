import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-img',
  templateUrl: './input-img.component.html',
  styleUrls: ['./input-img.component.scss']
})
export class InputImgComponent implements OnInit {

  @Input() imgUrl : string = "https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1175550351.jpg"
  constructor() { }

  ngOnInit(): void {
  }

}
