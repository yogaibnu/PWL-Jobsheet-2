import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BiodataService {

  constructor() { }

  getYoga() {
    return [
      {id:1, hobby:"Berlari", ket:"lari 1 jam tiap hari"},
      {id:2, hobby:"Senam", ket:"senam tiap sore"},
      {id:3, hobby:"Bermain Musik", ket:"bermain musik saat waktu senggang"}
    ]
  }
}
