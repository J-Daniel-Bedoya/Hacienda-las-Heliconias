import { configureStore } from '@reduxjs/toolkit'
import isViewSlice from './slices/isView.slice'

export type RootState = {
  isView: {
    isView: boolean,
    isViewNav: boolean,
  },
};

export default configureStore({
  reducer: {
    isView: isViewSlice,
  }
})