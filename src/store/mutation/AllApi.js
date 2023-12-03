import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { url } from "./url";

const allApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: `${url}` }),
  refetchOnMountOrArgChange: true,
  tagTypes: [
    "Product",
    "User",
    "Cart",
    "Wishlist",
    "Staff",
    "Trending",
    "Order",
    "CartQuantity",
    "Review",
    "Hostel",
  ], //refresh when it innvalidates
  endpoints(build) {
    return {
      createUser: build.mutation({
        query: (createJobcardData) => {
          return {
            url: `/auth/register/`,
            method: "POST",
            body: createJobcardData,
            headers: {
              Accept: "application/json",

              // ...formdata.getHeaders(),
            },
          };
        },
        invalidatesTags: (result, error, arg) => [
          { type: "User", _id: arg._id },
        ],
      }),
      createHostel: build.mutation({
        query: (createJobcardData) => {
          return {
            url: `/api/hostel/`,
            method: "POST",
            body: createJobcardData,
            headers: {
              Accept: "application/json",

              // ...formdata.getHeaders(),
            },
          };
        },
        invalidatesTags: (result, error, arg) => [
          { type: "Hostel", _id: arg._id },
        ],
      }),
      
      fetchHostel: build.query({
        query: ({hostel_page,filter,hostel_name,limit}) => {
          return {
            url: `/api/hostel/?limit=${limit}&page=${hostel_page}${filter}&hostel_name=${hostel_name}`,
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          };
        },
        providesTags: (result = [], error, arg) =>
          result?.data?.length
            ? [...result?.data?.map(({ _id }) => ({ type: "Hostel", _id })), "Hostel"]
            : ["Hostel"],
      }),
      dummyRun: build.mutation({
        query: () => {
          return {
            success: "200",
          };
        },
        invalidatesTags: ["Product"],
      }),
    };
  },
});

export const {
  useCreateUserMutation,
  useDummyRunMutation,

  useFetchHostelQuery,
} = allApi;

export { allApi };
