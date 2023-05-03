import { OfferState } from "../models/offer.state";
import { offerReducer } from "./reducers/offers.reducers";
import { ActionReducerMap } from "@ngrx/store";

export interface AppState {
  offers: OfferState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {//exportado al app.module
  offers: offerReducer,

}
