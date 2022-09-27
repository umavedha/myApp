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
    this.aRoute.params.subscribe((user:any) => {
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
      .addUserData({ username: this.name, email: this.email })
      .subscribe((userData:any) => {
        console.log(userData);
        this.router.navigate(['userlist']);
      });
  }
  getUserById(userId: number) {
    this.formService.getUserById(userId).subscribe((userDetail:any) => {
      console.log(userDetail, 'userdata');
      this.userData = userDetail;
      this.name = this.userData[0].username;
      this.email = this.userData[0].email;
    });
  }
  editUser() {
    this.formService
      .updateUserDataById(this.userId, {
        username: this.name,
        email: this.email,
      })
      .subscribe((data) => {
        console.log(data);
        this.router.navigate(['userlist']);
      });
  }
}
