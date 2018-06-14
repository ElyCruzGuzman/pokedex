import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PokemonsService {

  constructor(private http: HttpClient) { }

  public getAll(){
  	return this.http.get('http://pokeapi.co/api/v2/pokemon/1')
  }
  public getById(id){
  	return this.http.get(`http://pokeapi.co/api/v2/pokemon/${id}`)
  }
  public getByType(type){
  	return this.http.get(`http://pokeapi.co/api/v2/pokemon/${type}`)
  }
}
