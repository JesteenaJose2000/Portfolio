import { Injectable } from '@angular/core';
import {
  concat,
  concatMap,
  delay,
  from,
  ignoreElements,
  interval,
  map,
  of,
  repeat,
  take,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TypeWriterService {
  constructor() {}

  type({ word, speed, backwards = false }: any) {
    return interval(speed).pipe(
      map((x) =>
        backwards
          ? word.substring(0, word.length - x)
          : word.substring(0, x + 1)
      ),
      take(word.length)
    );
  }

  typeEffect(word: string) {
    return concat(
      this.type({ word, speed: 100 }),
      of('').pipe(delay(1200), ignoreElements()),
      this.type({ word, speed: 100, backwards: true }),
      of('').pipe(delay(500), ignoreElements())
    );
  }

  getTypewriterEffect(text: string) {
    return this.typeEffect(text).pipe(repeat());
  }
}
