import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/enviroment';
import { PaypalCapture, PaypalOrder } from '../interfaces/checkout.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(
    private http: HttpClient
  ) { }


  createPaypalCheckout(bookIds: number[]){
    const returnUrl = 'http://localhost:4200/cart';
    return this.http.post<PaypalOrder>(`${environment.apiBase}/checkout/paypal/create?returnUrl=${returnUrl}`, bookIds);
  }

  capturePaypalCheckout(token:string){
    return this.http.post<PaypalCapture>(`${environment.apiBase}/checkout/paypal/capture?token=${token}`, null);
  }
}
