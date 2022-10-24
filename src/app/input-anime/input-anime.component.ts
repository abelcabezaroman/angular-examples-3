import { Component, Input, OnInit } from '@angular/core';
import { AnimeModel } from '../models/anime.model';

@Component({
  selector: 'app-input-anime',
  templateUrl: './input-anime.component.html',
  styleUrls: ['./input-anime.component.scss'],
})
export class InputAnimeComponent implements OnInit {
  @Input() data: AnimeModel = {
    title: 'Chainsaw man',
    description: 'El hombre que mata con la motosierra',
    imgUrl:
      'https://phantom-marca.unidadeditorial.es/cc5478f8c2b5ed7d1fca884715e46c5a/resize/1320/f/jpg/assets/multimedia/imagenes/2022/09/08/16626485680816.jpg',
  };

  constructor() {}

  ngOnInit(): void {}
}

