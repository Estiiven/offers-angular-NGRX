/*
import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { OfferService } from "src/app/offer.service";


export const getSelectedUserInfo = createSelector(
  (state: AppState) => state.selectedUserId, // Get the selected user's ID from the store
  (state: AppState) => state.selectedUserName, // Get the selected user's name from the store
  (selectedUserId: string, selectedUserName: string) => {
    return { id: selectedUserId, name: selectedUserName }; // Return an object with the user's ID and name
  }
);

// Define a selector to get the selected user's information from the service
export const getSelectedUserInformation = createSelector(
  getSelectedUserInfo,
  (userInfo: { id: string, name: string }, service: OfferService) => {
    // Call the service to get the user's information based on the selected ID and name
    const userInformation: any = service.getUserInfo(userInfo.id, userInfo.name);
    return userInformation; // Return the user's information object
  }
);
*/
