import { OfferState } from 'src/app/models/offer.state';
import { AppState } from '../app.state';
import { createSelector } from "@ngrx/store";

/*selector padre*/ //offerss hace referencia la tabla de la "database"
//SELECTOR QUE TIENE RELACION CON LA PROPIEDAD items DE app.state
export const selectOffersFeature = (state: AppState) => state.offers;//obtiene la data
//export const selectShoppingFeature = (state: AppState) => state.items;

/*selector hijo*/
export const selectListOffers = createSelector(
  selectOffersFeature,
  (state: OfferState) => state.offers
);

/*selector hijo*/
export const selectLoading = createSelector(
  selectOffersFeature,
  (state: OfferState) => state.loading
);


