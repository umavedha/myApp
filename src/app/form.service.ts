import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor(private httpClient: HttpClient) {}

  addUserData(data: any) {
    return this.httpClient.post('http://localhost:3000/addUserData', data);
  }
  getAllUsers() {
    return this.httpClient.get('http://localhost:3000/getAllUsers');
  }

  // getUserById(userId: number) {
  //   return this.httpClient.get(`http://localhost:3000/getUserById/${userId}`);
  // }
  getUserById(userId: number) {
    return this.httpClient.get(
      `http://localhost:3000/getUserById?id=${userId}`
    );
  }
  updateUserDataById(userId: number, data: any) {
    return this.httpClient.put(
      `http://localhost:3000/updateUserDataById?id=${userId}`,
      data
    );
  }
  deleteUserById(userId: any) {
    return this.httpClient.delete(
      `http://localhost:3000/deleteUserById?id=${userId}`
    );
  }
}
