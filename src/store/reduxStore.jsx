import { configureStore } from "@reduxjs/toolkit"

import {categorySlicia, loggedInOutSlicia, userDataSlicia } from './reduxSlice'

export const store = configureStore({
  reducer:{
      category : categorySlicia,
      isLoggedIn : loggedInOutSlicia,
      userData : userDataSlicia
  }
})