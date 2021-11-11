import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Chat} from './chat.model';

const baseUrl = `http://localhost:3005/messages`;

@Injectable()
export class UserService {
  constructor(private readonly http: HttpClient) {}

  createAuthorizationHeader(headers: HttpHeaders, token: string) {
    headers.append('Authorization', `Bearer ${token}`);
  }

  get(token: string) {
    const authHeader = new HttpHeaders({Authorization: `Bearer ${token}`});
    return this.http.get<Chat[]>(baseUrl, {
      headers: authHeader,
    });
  }

  post(message: Chat, token: string) {
    const authHeader = new HttpHeaders({Authorization: `Bearer ${token}`});
    return this.http.post(baseUrl, message, {headers: authHeader});
  }

  getUserTenantId(token: string) {
    const authHeader = new HttpHeaders({Authorization: `Bearer ${token}`});
    return this.http.get('http://localhost:3005/userTenantId', {
      headers: authHeader,
      responseType: 'text',
    });
  }
}
