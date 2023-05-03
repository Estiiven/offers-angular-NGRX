import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  urlApi = ' http://localhost:3000/api';//json de ofertas

  constructor(private http: HttpClient) {
    this.getOffers();
  }

  //obtener ofertas
  getOffers() {
    return this.http.get(`${this.urlApi}/ofertas`);
  }

  // getUserInfo(userId: string, userName: string): Observable<any> {
  //   const url = `${this.urlApi}/${userId}`;
  //   return this.http.get(url).pipe(
  //     map((response: any) => {
  //       return {
  //         id: response.id,
  //         name: userName,
  //         characteristics: response.versions[0].characteristics,
  //         offerId: response.versions[0].id,
  //         offerName: response.versions[0].name
  //       };
  //     })
  //   );
  // }


}


