import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../pokemons.service';

@Component({
  selector: 'app-pokemon-number',
  templateUrl: './pokemon-number.component.html',
  styleUrls: ['./pokemon-number.component.css']
})

export class PokemonNumberComponent implements OnInit {
	pokemon = null;

  constructor(private pokemonsService: PokemonsService) {}

  ngOnInit() {
  }

  searchPokemon(id:number){
  	this.pokemonsService.getById(id).subscribe(
  		data => {
  		this.pokemon = data
  		console.log(this.pokemon)
  	});
  }
}
