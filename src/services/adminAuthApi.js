import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setAdminState } from "../store/client/reducers/adminSlice";
import { setUserInState } from "../store/client/reducers/userSlice";
// import { useSelector } from "react-redux";
const BASE_URL = process.env.REACT_APP_SERVER_ENDPOINT;

export const adminAuthApi = createApi({
  reducerPath: "adminAuthApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `/admin/`,
  }),
  endpoints: (builder) => ({
    loginAdmin: builder.mutation({
      query: (credentials) => {
        return {
          url: "login",
          method: "POST",
          body: credentials,
          credentials: "include",
        };
      },
      transformResponse: (result) => result,
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const data = await queryFulfilled;
          dispatch(setUserInState(data.data));
        } catch (error) {
          console.log("failed login request ", error);
        }
      },
    }),

    logoutAdmin: builder.mutation({
      query() {
        return {
          url: "logout",
          credentials: "include",
        };
      },
    }),
  }),
});

export const { useLogoutAdminMutation, useLoginAdminMutation } = adminAuthApi;
