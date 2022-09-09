import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  API_URL,
  API_KEY,
} from "../../config";

const initialState = {
  page : 1,
  searchText : "",
  sliderImages : [],
  movies: [],
  singleMovie : {},
  isLoading: true,
  isError : false,
  errMsg : "",
}

export const getMovies = createAsyncThunk("movie/getMovies", async ([page, searchText], thunkAPI) => {
  try {
    const endpoint = searchText
      ? `${SEARCH_BASE_URL}${searchText}&page=${page}`
      : `${POPULAR_BASE_URL}&page=${page}`;
    const resp = await axios(endpoint);
    const posterArray = resp.data.results.map(item => item.poster_path).slice(0, 8);
    return {
      ...resp.data,
      posterArray,
    };
  } catch (error) {
    return thunkAPI.rejectWithValue("Sorry, there was an error fetching movies... Please retry");
  }
})

export const getSingleMovie = createAsyncThunk("movie/getSingleMovies", async (movieId, thunkAPI) => {
  try {
    const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
    const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
    const resp = await axios(endpoint);
    const creditResp = await axios(creditsEndpoint);

    // get directors only
    const directors = creditResp.data?.crew?.filter(
          member => member.job === "Director");
    return {
      ...resp?.data, 
      actors: creditResp.data?.cast,
      directors : directors,
		}
  } catch (error) {
    return thunkAPI.rejectWithValue("Sorry, there was an error fetching single movie... Please retry");
  }
})

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    getSearchText : (state, action) => {
      state.searchText = action.payload;
      state.page = 1
    },
    prevPage : (state) => {state.page--},
    nextPage : (state) => {state.page++},
    resetPage : (state) => {return initialState}
  },
  extraReducers: {
    [getMovies.pending]: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    [getMovies.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.movies = action.payload.results;
      state.sliderImages = action.payload.posterArray
    },
    [getMovies.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errMsg = action.payload;
    },

    /// for single Movies

    [getSingleMovie.pending]: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    [getSingleMovie.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.singleMovie = action.payload;
    },
    [getSingleMovie.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errMsg = action.payload;
    },
  },
});

export const {getSearchText, prevPage, nextPage, resetPage} = movieSlice.actions;

export default movieSlice.reducer;