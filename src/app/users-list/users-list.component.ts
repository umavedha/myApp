import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormService } from '../form.service';
interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  avatar: string;
}
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  usersList: any;

  constructor(
    private appService: FormService,
    private router: Router,
    private aRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //   this.usersList = [
    //     {
    //       id: 7,
    //       email: 'michael.lawson@reqres.in',
    //       firstName: 'Michael',
    //       lastName: 'Lawson',
    //       avatar: 'https://reqres.in/img/faces/7-image.jpg',
    //     },
    //     {
    //       id: 8,
    //       email: 'lindsay.ferguson@reqres.in',
    //       firstName: 'Lindsay',
    //       lastName: 'Ferguson',
    //       avatar: 'https://reqres.in/img/faces/8-image.jpg',
    //     },
    //     {
    //       id: 9,
    //       email: 'tobias.funke@reqres.in',
    //       firstName: 'Tobias',
    //       lastName: 'Funke',
    //       avatar: 'https://reqres.in/img/faces/9-image.jpg',
    //     },
    //     {
    //       id: 10,
    //       email: 'byron.fields@reqres.in',
    //       firstName: 'Byron',
    //       lastName: 'Fields',
    //       avatar: 'https://reqres.in/img/faces/10-image.jpg',
    //     },
    //     {
    //       id: 11,
    //       email: 'george.edwards@reqres.in',
    //       firstName: 'George',
    //       lastName: 'Edwards',
    //       avatar: 'https://reqres.in/img/faces/11-image.jpg',
    //     },
    //     {
    //       id: 12,
    //       email: 'rachel.howell@reqres.in',
    //       firstName: 'Rachel',
    //       lastName: 'Howell',
    //       avatar: 'https://reqres.in/img/faces/12-image.jpg',
    //     },
    //   ];
    // }
    // userRemoval(index: any) {
    //   console.log('before removal', index, this.usersList);
    //   this.usersList.splice(index, 1);
    //   console.log('after removal', this.usersList);
    this.getallUserData();
  }
  getallUserData() {
    this.appService.getAllUsers().subscribe((usersList) => {
      this.usersList = usersList;
      console.log(this.usersList);
    });
  }
  addUserForm() {
    this.router.navigate(['add-user'], { relativeTo: this.aRoute });
  }
  deleteUser(userId: number) {
    this.appService.deleteUserById(userId).subscribe((userId) => {
      console.log(userId, 'deleted');
      this.getallUserData();
    });
  }
  editUser(userId: number) {
    this.router.navigate(['edit-user', userId], { relativeTo: this.aRoute });
  }
}
