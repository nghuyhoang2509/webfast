import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";

export const getPages = createAsyncThunk("page/getPages", async (params) => {
  const res = await api.get(`/page/${params}`);
  return res.data;
});
export const createPage = createAsyncThunk(
  "page/createPage",
  async (params, thunkApi) => {
    const state = thunkApi.getState();
    const uid = state.auth.uid;
    const res = await api.post(`/page/create`, {
      pageInfo: { ...params, uid },
    });
    await thunkApi.dispatch(getPages(uid));
    return res.data();
  }
);

export const updatePage = createAsyncThunk(
  "page/updatePage",
  async (params, thunkApi) => {
    const state = thunkApi.getState();
    const uid = state.auth.uid;
    const res = await api.put(`/page/${params.id}`, {
      pageInfo: params.pageInfo,
    });
    await thunkApi.dispatch(getPages(uid));
    return res.data();
  }
);

export const deletePage = createAsyncThunk(
  "page/deletePage",
  async (params, thunkApi) => {
    const state = thunkApi.getState();
    const uid = state.auth.uid;
    const res = await api.delete(`/page/${params}`);
    await thunkApi.dispatch(getPages(uid));
    return res.data();
  }
);

const initialState = {
  loading: false,
  error: "",
  current: [],
};

const PageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPages.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(getPages.fulfilled, (state, action) => {
        state.loading = false;
        state.current = action.payload.listPage;
      })
      .addCase(createPage.pending, (state) => {
        state.loading = true;
      })
      .addCase(createPage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(createPage.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(deletePage.pending, (state) => {
        state.loading = true;
      })
      .addCase(deletePage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(deletePage.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(updatePage.pending, (state) => {
        state.loading = true;
      })
      .addCase(updatePage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(updatePage.fulfilled, (state) => {
        state.loading = false;
      });
  },
});

export default PageSlice.reducer;
