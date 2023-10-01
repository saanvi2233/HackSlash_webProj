import { createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
  // Make it read-only
  IDLE: 'idle',
  ERROR: 'error',
  LOADING: 'loading',
});

const homeSlice = createSlice({
  name: 'home', // Add a name for the slice
  initialState: {
    data: null,  // You can set the initial state as needed
    status: STATUSES.IDLE,
  },
  reducers: {
    setProducts(state, action) {
      // Don't make async calls from reducers; use thunks for that
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setProducts, setStatus } = homeSlice.actions;

// Creating a thunk for fetching data
export const fetch = () => async (dispatch) => {
  dispatch(setStatus(STATUSES.LOADING));

  // You can make an async call here to fetch data and dispatch the results
  try {
    const response = await fetchData(); // Replace with your actual data fetching code
    dispatch(setProducts(response.data));
    dispatch(setStatus(STATUSES.IDLE));
  } catch (error) {
    dispatch(setStatus(STATUSES.ERROR));
  }
};

// Replace fetchData with your actual data fetching function
const fetchData = async () => {
  // Simulated data fetching
//   return { data: /* Your fetched data */ };
};

export default homeSlice.reducer;
