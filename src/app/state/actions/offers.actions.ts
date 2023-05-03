//import { ItemModel } from '@core/models/Item.interface';
import { createAction, props } from '@ngrx/store';

//fist action test
export const loadOffers = createAction(
  '[offer List] load offers' //type
);

export const loadedOffers = createAction(
  '[offer List] loaded succes',
  props<{ offers: [] }>() //propiedades
);


