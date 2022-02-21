import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Comentario, Comentarios } from './comentario';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  constructor(private http: HttpClient) { }

  incluirComentario(id: number, commentText: string): Observable<Comentario> {
    return this.http.post<Comentario>(`${API}/photos/comments`, {commentText})
  }

  buscarComentario(id: number): Observable<Comentarios>{
    return this.http.get<Comentarios>(`${API}/photos/${id}/comments`);
  }
}
