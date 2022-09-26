import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormService } from '../form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  name: string = '';
  email: string = '';
  userId: number = 0;
  isUpdate: boolean = false;
  userData: any;

  constructor(
    private formService: FormService,
    private router: Router,
    private aRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.aRoute.params.subscribe((user) => {
      this.isUpdate = true;
      console.log(user);
      this.isUpdate = user.hasOwnProperty('userId') ? true : false;
      if (this.isUpdate) {
        this.userId = user['userId'];
        this.getUserById(this.userId);
      }
    });
  }
  addUser() {
    this.formService
      .addUserData({ name: this.name, email: this.email })
      .subscribe((userData) => {
        console.log(userData);
        this.router.navigate(['userlist']);
      });
  }
  getUserById(userId: number) {
    this.formService.getUserById(userId).subscribe((userDetail) => {
      console.log(userDetail);
      this.userData = userDetail;
      this.name = this.userData.name;
      this.email = this.userData.email;
    });
  }
  editUser() {
    this.formService
      .updateUserDataById(this.userId, { name: this.name, email: this.email })
      .subscribe((data) => {
        console.log(data);
        this.router.navigate(['userlist']);
      });
  }
}
