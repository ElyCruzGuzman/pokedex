import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../pokemons.service';


@Component({
  selector: 'app-pokemon-type',
  templateUrl: './pokemon-type.component.html',
  styleUrls: ['./pokemon-type.component.css']
})
export class PokemonTypeComponent implements OnInit {

	types = [
    {value: '1', viewValue: 'Normal'},
    {value: '2', viewValue: 'Fighting'},
    {value: '3', viewValue: 'Flying'},
    {value: '4', viewValue: 'Poison'},
    {value: '5', viewValue: 'Ground'},
    {value: '6', viewValue: 'Rock'},
    {value: '7', viewValue: 'Bug'},
    {value: '8', viewValue: 'Ghost'},
    {value: '9', viewValue: 'Steel'},
    {value: '10', viewValue: 'Fire'},
    {value: '11', viewValue: 'Water'},
    {value: '12', viewValue: 'Grass'},
    {value: '13', viewValue: 'Electric'},
    {value: '14', viewValue: 'Psychic'},
    {value: '15', viewValue: 'Ice'},
    {value: '16', viewValue: 'Dragon'},
    {value: '17', viewValue: 'Dark'},
    {value: '18', viewValue: 'Fairy'}
  ];

  constructor(private pokemonsService: PokemonsService) { }

  ngOnInit() {
  }

}
