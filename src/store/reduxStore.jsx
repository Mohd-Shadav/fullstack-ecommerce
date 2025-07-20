import { configureStore } from "@reduxjs/toolkit"

import categorySlicia, { loggedInOutSlicia } from './reduxSlice'

export const store = configureStore({
  reducer:{
      category : categorySlicia,
      isLoggedIn : loggedInOutSlicia
  }
})