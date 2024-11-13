import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from '../../app/store'

interface IToogleState {
    isOpen: boolean;
}

const initialState: IToogleState = {
    isOpen: true
}

export const TooggleSlice = createSlice({
  name: 'tooggle',
  initialState,
  reducers: {
        tooggleAside: (state) => {
        state.isOpen = !state.isOpen
        }
  },
})

export const { tooggleAside } = TooggleSlice.actions


export default TooggleSlice.reducer