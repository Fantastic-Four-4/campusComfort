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
      fetchStaff: build.query({
        query: () => {
          return {
            url: `/auth/staff/`,
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `Bearer ${localStorage.getItem("adminToken")}`,

            },
          };
        },
        providesTags: (result = [], error, arg) =>
          result?.length
            ? [...result?.map(({ _id }) => ({ type: "Staff", _id })), "Staff"]
            : ["Staff"],
      }),
      deleteStaff: build.mutation({
        query: (createJobcardData) => {
          const {_id}=createJobcardData
          return {
            url: `/auth/staff/${_id}`,
            method: "DELETE",
            body: createJobcardData,
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${localStorage.getItem("adminToken")}`,


              // ...formdata.getHeaders(),
            },
          };
        },
        invalidatesTags: (result, error, arg) => [{ type: "Staff", _id: arg._id }],
      }),
      updateStaff: build.mutation({
        query: (createJobcardData) => {
          const {_id}=createJobcardData
          return {
            url: `/auth/staff/${_id}`,
            method: "PATCH",
            body: createJobcardData,
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${localStorage.getItem("adminToken")}`,


              // ...formdata.getHeaders(),
            },
          };
        },
        invalidatesTags: (result, error, arg) => [{ type: "Staff", _id: arg._id }],
      }),
      createStaff: build.mutation({
        query: (createJobcardData) => {
        
   
     
        
          return {
            url: `/auth/admin/register`,
            method: "POST",
            body: createJobcardData,
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${localStorage.getItem("adminToken")}`,


              // ...formdata.getHeaders(),
            },
          };
        },
        invalidatesTags: (result, error, arg) => [{ type: "Staff", _id: arg._id }],
      }),
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
        query: ({hostel_page,filter,hostel_name,limit,filter_obj,allowed_for,distance}) => {
          return {
            url: `/api/hostel/?limit=${limit}&page=${hostel_page}${filter}&hostel_name=${hostel_name}${filter_obj}${allowed_for}${distance}`,
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
      getMyHostel: build.query({
        query: ({id}) => {
          return {
            url: `/api/Myhostel/${id}`,
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          };
        },
     
      }),
      updateHostel: build.mutation({
        query: (createJobcardData) => {
          const {_id}=createJobcardData
          return {
            url: `/api/hostel/${_id}`,
            method: "PATCH",
            body: createJobcardData,
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${localStorage.getItem("adminToken")}`,


              // ...formdata.getHeaders(),
            },
          };
        },
        invalidatesTags: (result, error, arg) => [{ type: "Hostel", _id: arg._id }],
      }),
      deleteHostel: build.mutation({
        query: (createJobcardData) => {
          const {_id}=createJobcardData
          return {
            url: `/api/hostel/${_id}`,
            method: "DELETE",
            body: createJobcardData,
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${localStorage.getItem("adminToken")}`,


              // ...formdata.getHeaders(),
            },
          };
        },
        invalidatesTags: (result, error, arg) => [{ type: "Hostel", _id: arg._id }],
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
  useGetMyHostelQuery,
  useCreateHostelMutation,
  useUpdateHostelMutation,
  useDeleteHostelMutation,

  
  useFetchStaffQuery,
  useCreateStaffMutation,
  useUpdateStaffMutation,
  useDeleteStaffMutation,
} = allApi;

export { allApi };
