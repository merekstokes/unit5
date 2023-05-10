import { createSlice } from "@reduxjs/toolkit";

export const potentialCountriesSlice = createSlice({
    name: "potentialCountries",
    initialState: {
        value: [
            {
                name: {
                    common: "this is initialPotential",
                },
            },
        ],
    },
    reducers: {
        setPotentialCountries: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { setPotentialCountries, deletePotentialCountries } =
    potentialCountriesSlice.actions;

export const selectPotentials = (state) => state.potentialCountries.value;

export default potentialCountriesSlice.reducer;