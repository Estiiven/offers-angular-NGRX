import { createReducer, on } from '@ngrx/store';
import { loadOffers, loadedOffers} from '../actions/offers.actions';
import { OfferState } from 'src/app/models/offer.state';


const initialState: OfferState = {
  loading: false,
  offers: [],
};

export const offerReducer = createReducer(
  initialState,
  on(loadOffers, (state) => ({
    ...state,
    loading : true
  })),
  on(loadedOffers, (state, {offers}) => ({
    ...state,
    loading : false,
    offers : offers
  })),

    // // Set the selected user's ID and name in the store
    // on(selectUser, (state, { id, name }) => ({
    //   ...state,
    //   selectedUserId: id,
    //   selectedUserName: name
    // })),
    // // Set the loading state to true when starting to load user information
    // on(loadUserInformation, (state) => ({
    //   ...state,
    //   loading: true
    // })),

)
