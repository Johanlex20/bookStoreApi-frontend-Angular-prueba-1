import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: []
})
export class LayoutComponent {

  constructor(
    private cartService:CartService,
    private authservice:AuthService,
  ){}

  get items(){
    return this.cartService.Items;
  }

  get user(){
    return this.authservice.user;
  }

  logout(){
    this.authservice.logout();
  }

}
