import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormService } from '../form.service';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  username: string = '';
  email: string = '';
  userId: number = 0;
  isUpdate: boolean = false;
  userData: any;
  user: any;

  constructor(
    private formService: FormService,
    private router: Router,
    private aRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    // initialising reactive form using form group
    // this.user = new FormGroup({
    //   username: new FormControl('', [
    //     Validators.required,
    //     Validators.minLength(3),
    //   ]),
    //   email: new FormControl('', [Validators.required]),
    // });

    // using form builder

    this.user = this.fb.group({
      username: [null, [Validators.required, Validators.minLength(2)]],
      email: [null, Validators.email],
    });

    this.aRoute.params.subscribe((user: any) => {
      this.isUpdate = true;
      console.log(user);
      this.isUpdate = user.hasOwnProperty('userId') ? true : false;
      if (this.isUpdate) {
        this.userId = user['userId'];
        this.getUserById(this.userId);
      }
    });
  }
  get form() {
    return this.user.controls;
  }
  addUser() {
    let userDetail = this.user.value;
    console.log(this.user);

    console.log(userDetail);

    // this.formService.addUserData(userDetail).subscribe((userData: any) => {
    //   console.log(userData);
    //   this.router.navigate(['userlist']);
    // });
  }

  getUserById(userId: number) {
    this.formService.getUserById(userId).subscribe((userDetail: any) => {
      console.log(userDetail, 'userdata');
      this.userData = userDetail;
      // this.name = this.userData[0].username;
      // this.email = this.userData[0].email;
      this.user.patchValue(this.userData[0]);
    });
  }
  editUser() {
    let userDetail = this.user.value;

    this.formService
      .updateUserDataById(this.userId, userDetail)
      .subscribe((data) => {
        console.log(data);
        this.router.navigate(['userlist']);
      });
  }
  backToForm() {
    this.router.navigate(['userlist']);
  }
}
