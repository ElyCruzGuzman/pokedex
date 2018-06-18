import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(pokemons: any, term: any): any {
    if (term === undefined) return pokemons;

    return pokemons.filter(pokemon=> {
    	return pokemon.pokemon.name.toLowerCase().includes(term.toLowerCase());
    })
  }

}
