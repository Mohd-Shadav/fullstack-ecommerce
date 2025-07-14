import { configureStore } from "@reduxjs/toolkit"

import categorySlice from './reduxSlice'

export const store = configureStore({
  reducer:{
      category : categorySlice
  }
})