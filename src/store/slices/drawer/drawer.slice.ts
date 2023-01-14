import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = false

export const drawerSlice = createSlice({
  name: 'drawer',
  initialState,
  reducers: {
    showDrawer: (state, action: PayloadAction<boolean>) => action.payload
  },
})

export const { showDrawer } = drawerSlice.actions

const drawerReducer = drawerSlice.reducer;
export default drawerReducer;
