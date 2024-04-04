import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, deleteContact, addContact, editContact } from "./operations";
import toast from "react-hot-toast";

const handlePending = (state) => {
    state.loading = true;
    toast.loading('Waiting...')
}

const handleRejected = (state, action) => {
    state.loading = false;
    state.error = action.payload;
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
            items: [],
            loading: false,
            error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.pending, handlePending)
            .addCase(fetchContacts.fulfilled, (state, action) => {
                toast.dismiss();
                state.loading = false;
                state.error = null;
                state.items = action.payload;
            })
            .addCase(fetchContacts.rejected, handleRejected)
            .addCase(deleteContact.pending, handlePending)
            .addCase(deleteContact.fulfilled, (state, action) => {
                toast.dismiss();
                state.loading = false;
                state.error = null;
                const index = state.items.findIndex(item => item.id === action.payload.id);
                state.items.splice(index, 1);
                toast.success('Contact deleted');
            })
            .addCase(deleteContact.rejected, handleRejected)
            .addCase(addContact.pending, handlePending)
            .addCase(addContact.fulfilled, (state, action) => {
                toast.dismiss();
                state.loading = false;
                state.error = null;
                state.items.push(action.payload);
                toast.success('Contact added');
            })
            .addCase(addContact.rejected, handleRejected)
            .addCase(editContact.fulfilled, (state, action) => {
                const index = state.items.findIndex(item => item.id === action.payload.id);
                state.items.splice(index, 1, action.payload)
            })
    }
});

export const contactsReducer = contactsSlice.reducer;

// Selectors
