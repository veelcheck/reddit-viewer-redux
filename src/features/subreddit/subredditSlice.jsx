import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const loadSubreddit = createAsyncThunk(
  'subreddit/loadComments',
  async (permalink) => {
    try {
      const response = await axios.get(
        `https://www.reddit.com${permalink}.json`
      );

      const data = response.data;

      const payload = {
        id: data.id,
        title: data.title,
        author: data.author,
        text: data.text,
        created: data.created,
        permalink: data.permalink,
        ups: data.ups,
        downs: data.downs,
        numComments: data.num_comments,
        url: data.url,
      };
      return payload;
    } catch (error) {
      console.log('Error fetching data:', error);
      throw error;
    }
  }
);
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
    isLoading: false,
    hasError: false,
  },
  reducers: {
    setSubreddit: (state, action) => {
      console.log(action);
      state.subreddit = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadSubreddit.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(loadSubreddit.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.subreddit = action.payload;
      })
      .addCase(loadSubreddit.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

export const { setSubreddit } = subredditSlice.actions;
export const selectedSubreddit = (state) => state.subreddit.subreddit;
export default subredditSlice.reducer;
