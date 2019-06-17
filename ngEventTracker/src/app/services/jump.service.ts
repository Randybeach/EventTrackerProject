import { Injectable } from '@angular/core';
import { Jump } from '../models/jump';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JumpService {

  // private url = "http://localhost:8084/api/jumps"; development
  // private url = "/jumptracker/"; // production
  private url =  environment.url + "api/jumps"; // production

  constructor(private http: HttpClient) { }

  index() {
  return this.http.get<Jump>(this.url);
  }

  create(jump) {
    return this.http.post<Jump>(this.url, jump);

  }
  update(id, jump) {

    const putUrl = this.url + '/' + id;
    return this.http.put<Jump>(putUrl, jump);
  }
  delete(id) {

    const delUrl = this.url + '/' + id;

    return this.http.delete<Jump>(delUrl);
  }
}
