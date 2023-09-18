import { createSlice, PayloadAction } from '@reduxjs/toolkit';
  
export const pruebaSlice = createSlice({
  name: 'prueba',
  initialState: '',
  reducers: {
    setPrueba: (state, actions: PayloadAction<string>) => {
        return actions.payload
    }
  }
})
  
export const { setPrueba } = pruebaSlice.actions;
export default pruebaSlice.reducer;