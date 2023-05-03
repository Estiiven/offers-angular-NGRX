import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError, mergeMap } from 'rxjs/operators';
import { OfferService } from 'src/app/offer.service';

@Injectable()
export class OffersEffects {

  constructor(
    private actions$: Actions,
    private service : OfferService
  ) { }

  //acciones secundarias
  loadOffers$ = createEffect(() => this.actions$
  .pipe(
    ofType('[offer List] load offers'),//mismos nombres en las actions
    mergeMap(() => this.service.getOffers()
      .pipe(
        map(off => ({ type: '[offer List] loaded succes', offers: off })),//item es la propiedad de loaded
        catchError(() => EMPTY)
      ))
  )
  );

}
