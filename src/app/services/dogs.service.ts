import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs'; // OPTIONAL: Observables value-add
import { map } from 'rxjs/operators';
import { Dog } from '../models/dog'; // OPTIONAL: Observables value-add.

@Injectable({
  providedIn: 'root'
})
export class DogsService {
  private url: string = environment.dataUrl;

  constructor(private http: HttpClient) {
    const likes = localStorage.getItem('likes');
    if (!likes) {
      localStorage.setItem('likes', JSON.stringify([]));
    }
  }

  all(): Observable<Dog[]> {
    return this.http.get(`${this.url}/dogs`) as Observable<Dog[]>;
  }

  get(dogId: string): Observable<Dog[]> {
    return this.all().pipe(
      map(dogs => dogs.filter(dog => dog.id === dogId))
    );
  }

  getLikes(dogId): number {
    const likes = JSON.parse(localStorage.getItem('likes'));
    return parseInt(likes[dogId]);
  }

  update(dog): void {
    const likes = JSON.parse(localStorage.getItem('likes')) || localStorage.setItem('likes', JSON.stringify({}));
    likes[dog.id] = dog.likes;
    localStorage.setItem('likes', JSON.stringify(likes));
  }
}
