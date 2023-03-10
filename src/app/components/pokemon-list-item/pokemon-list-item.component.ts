import { Component, Input, OnInit } from '@angular/core';

import { PokePicture } from 'src/app/enums/pokemon.enum';
import { Pokemon } from 'src/app/models/pokemon.model';


@Component({
  selector: 'app-pokemon-list-item',
  templateUrl: './pokemon-list-item.component.html',
  styleUrls: ['./pokemon-list-item.component.css']
})
export class PokemonListItemComponent {

  @Input() pokemon?: Pokemon;

  public get PokePicture() {
    return PokePicture;
  }
}
