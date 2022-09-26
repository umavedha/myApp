import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor(private httpClient: HttpClient) {}

  getAllUsers() {
    return this.httpClient.get('http://localhost:3000/users');
  }

  addUserData(data: any) {
    return this.httpClient.post('http://localhost:3000/users', data);
  }
  deleteUserById(userId: any) {
    return this.httpClient.delete('http://localhost:3000/users/' + userId);
  }
  getUserById(userId: number) {
    return this.httpClient.get(`http://localhost:3000/users/${userId}`);
  }
  updateUserDataById(userId: number, data: any) {
    return this.httpClient.put(`http://localhost:3000/users/${userId}`, data);
  }
}
