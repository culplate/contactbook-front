import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors";

export const selectIsLoading = state => state.contacts.loading;
export const selectIsError = state => state.contacts.error;
export const selectContacts = state => state.contacts.items;
export const selectFilteredContacts = createSelector(
    [selectContacts, selectNameFilter],
    (contacts, nameFilter) => {
        return contacts.filter((item) =>
            {
                return item.number.includes(nameFilter)
                    || item.name.toLowerCase().includes(nameFilter.toLowerCase())
            }
        );
    }
);