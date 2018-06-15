import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PokemonsService {

  constructor(private http: HttpClient) { }

  public getAll(){
  	return this.http.get('http://pokeapi.co/api/v2/pokemon/')
  }
  public getById(id:number){
  	return this.http.get('http://pokeapi.co/api/v2/pokemon/' + id)
  }
  public getByType(type:number){
  	return this.http.get('http://pokeapi.co/api/v2/type/' + type)
  }
}
