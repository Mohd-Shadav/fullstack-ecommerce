import { configureStore } from "@reduxjs/toolkit"

import {categorySlicia, filterDataSlicia, loggedInOutSlicia, userDataSlicia } from './reduxSlice'

export const store = configureStore({
  reducer:{
      category : categorySlicia,
      isLoggedIn : loggedInOutSlicia,
      userData : userDataSlicia,
      filterDataSlice:filterDataSlicia
  }
})