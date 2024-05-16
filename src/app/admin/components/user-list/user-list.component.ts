import { Component, OnInit } from '@angular/core';
import { User, UserPage } from '../../../interfaces/user.interface';
import { UserService, } from '../../services/user.service';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { BookPage } from '../../../interfaces/book.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: []
})
export class UserListComponent implements OnInit {
  
  userPage? :UserPage; 
  displayedColums = ['fullName', 'email', 'password', 'role','createdAt', 'actions'];

  constructor(
    private userService: UserService,
    private router: Router
  ){}
  

  ngOnInit(){
    this.loadUsers();
  }

  loadUsers(){
    this.userService.paginate()
     .subscribe(userPage =>{
      this.userPage = userPage;
     });
  }

  deleteUser(user: User){
    if(confirm('Estas Seguro de eliminar este usuario?')){
      this.userService.delete(user)
      .subscribe(()=>{
          this.loadUsers();
      });
    }
  }

  paginateUsers(event: PageEvent){
    const { pageIndex, pageSize } = event;
    this.userService.paginate(pageSize, pageIndex)
      .subscribe(userPage =>{
        this.userPage = userPage;
      })
  }



}
