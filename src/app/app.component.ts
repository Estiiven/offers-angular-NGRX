import { Component, OnInit } from '@angular/core';
import { OfferService } from './offer.service';
import { Store } from '@ngrx/store';
import { loadOffers, loadedOffers} from './state/actions/offers.actions';
import { Observable } from 'rxjs';
import { selectListOffers, selectLoading} from './state/selectors/offer.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  offers$: Observable<any> = new Observable();

  selectedOffer$: Observable<any> = new Observable(); //ultimate version

  loading$: Observable<boolean> = new Observable();

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit(): void {
    this.loading$ = this.store.select(selectLoading);
    //accion1
    this.store.dispatch(loadOffers());

    this.offers$ = this.store.select(selectListOffers);
  }
}



