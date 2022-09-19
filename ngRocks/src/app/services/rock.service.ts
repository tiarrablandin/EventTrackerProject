import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Rock } from '../models/rock';

@Injectable({
  providedIn: 'root'
})
export class RockService {
  private baseUrl = 'http://localhost:8082/';
  private url = this.baseUrl + 'api/rocks/';

  constructor(private http: HttpClient) { }

  index(){
    return this.http.get<Rock[]>(this.url).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('RockService.index(): error retrieving rock: ' + err)
        );
      })
    );
  }

  search(searchTerm: string){
    return this.http.get<Rock[]>(this.url + searchTerm).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('RockService.index(): error retrieving rock: ' + err)
        );
      })
    );
  }

  create(rock: Rock){
    return this.http.post<Rock>(this.url, rock).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('RockService.create(): error retrieving rock: ' + err)
        );
      })
    )
  }

  update(rock: Rock){
    return this.http.put<Rock>(this.url + rock.id, rock).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('RockService.update(): error updating Rock: + err')
        );
      })
    );
  }

  delete(id: number){
    return this.http.delete<void>(this.url + id).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error(
            'RockService.delete(): error deleting Rock: + err'
          )
        );
      })
    );
  }

}
