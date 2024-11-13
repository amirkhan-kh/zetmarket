import {configureStore} from '@reduxjs/toolkit';
import TooggleSlice from './toogle-slice';
import SerchSlice from './search-slice';
export const store = configureStore({
    reducer: {
        tooggle: TooggleSlice,
        search: SerchSlice,
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch