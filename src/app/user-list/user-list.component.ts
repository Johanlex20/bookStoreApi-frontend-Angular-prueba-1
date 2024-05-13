import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { UserService, } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: []
})
export class UserListComponent implements OnInit {
  
  users?: User[]; 

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
      this.users = userPage.content;
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



}
