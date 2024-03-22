import { createSlice } from '@reduxjs/toolkit';

export const subredditSlice = createSlice({
  name: 'subreddit',
  initialState: {
    subreddit: {
      id: '',
      title: '',
      author: '',
      text: '',
      created: '',
      permalink: '',
      ups: '',
      downs: '',
      numComments: '',
      url: '',

    },
  },
  reducers: {
    setSubreddit: (state, action) => {
      console.log(action);
      state.subreddit = action.payload;
    }
  }
})

export const { setSubreddit } = subredditSlice.actions
export const selectedSubreddit = (state) => state.subreddit.subreddit;
export default subredditSlice.reducer;