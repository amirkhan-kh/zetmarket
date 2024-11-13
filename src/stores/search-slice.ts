import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface ISearchStateType {
    placeholder: string;
    searchType: string;
}

const initialState: ISearchStateType = {
    placeholder: "Enter search text...",
    searchType: "Global",
}

export const SerchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
        searchInput: (state, action: PayloadAction<string>) => { 
            switch (action.payload) { 
                case "/": 
                    state.placeholder = "Enter search text...";
                    state.searchType = 'GLOBAL'; 
                    break;
                case "/orders": 
                    state.placeholder = "Enter order name...";
                    state.searchType = "ORDER"; 
                    break;
                case "/order-completed": 
                    state.placeholder = "Enter order completed";
                    state.searchType = "COMPLETED"; 
                    break;
                case "/orders-cenceld": 
                    state.placeholder = "Enter order cenceled";
                    state.searchType = "CENCELED"; 
                    break;
                case "/leads": 
                    state.placeholder = "Enter lead name";
                    state.searchType = "LEADS"; 
                    break;
                default:  
                    state.placeholder = "Enter search text...";
                    state.searchType = "GLOBAL"; 
                    break;
            }
        }
  },
})

export const { searchInput } = SerchSlice.actions
export default SerchSlice.reducer
