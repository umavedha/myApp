import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor(private httpClient: HttpClient) {}

  addUserData(data: any) {
    return this.httpClient.post(environment.appUrl + '/addUserData', data);
  }
  getAllUsers() {
    return this.httpClient.get(environment.appUrl + '/getAllUsers');
  }

  // getUserById(userId: number) {
  //   return this.httpClient.get(`http://localhost:3000/getUserById/${userId}`);
  // }
  getUserById(userId: number) {
    return this.httpClient.get(
      environment.appUrl + `/getUserById?id=${userId}`
    );
  }
  updateUserDataById(userId: number, data: any) {
    return this.httpClient.put(
      environment.appUrl + `/updateUserDataById?id=${userId}`,
      data
    );
  }
  deleteUserById(userId: any) {
    return this.httpClient.delete(
      environment.appUrl + `/deleteUserById?id=${userId}`
    );
  }
}
