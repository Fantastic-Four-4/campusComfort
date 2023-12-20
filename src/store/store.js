import { configureStore } from "@reduxjs/toolkit";
import { allApi} from "./mutation/AllApi";
import userReducer from "./mutation/userSlice";
import remainingReducer from "./mutation/remainingSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    remaning: remainingReducer,
    [allApi.reducerPath]: allApi.reducer,
  },
  
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(allApi.middleware);
  },
//   devTools: process.env.NODE_ENV !== "production",
});

export default store;

export {
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

} from "./mutation/AllApi";