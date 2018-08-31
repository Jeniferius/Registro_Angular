import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '../../node_modules/@angular/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string;
  constructor(private http: Http) {
    this.baseUrl = 'http://registrate.ngrok.io/premio';
  }

  peticionGet() {
    return this.http.get(this.baseUrl).toPromise();
  }

  enviarDatosForm(datos) {
    let url = 'http://registrate.ngrok.io/register';
    return this.http.post(url, datos).toPromise();
  }

  postLogin(datos) {
    let url = 'http://registrate.ngrok.io/login';
    return this.http.post(url, datos).toPromise();
  }

  obtenerPremio() {
    let url = "http://registrate.ngrok.io/premio";
    let headers = new Headers();
    headers.append('user-token', '3K¡cL?l.?F0E0ek¡k¡$1');
    let opts = new RequestOptions()
    opts.headers = headers

    return this.http.get(url, opts).toPromise();
  }
}
// quieroPremio
// qweqwe