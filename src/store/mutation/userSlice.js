import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import axios from "axios";
import { url } from "./url";
// import url from "./url"
// const url = "http://127.0.0.1:8000/";
//  const url = "https://spacemate.pythonanywhere.com/";
// const url = "http://localhost:8000/";

// export const url = "https://abundancesystems.pythonanywhere.com/";

// userActions.js
export const userLogin = createAsyncThunk(
  "user/login",
  async ({ email, password }, thunkAPI) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `${url}/auth/login/`,
        { email, password },
        config
      );
      // store user's token in local storage
      const token = data.userToken;
      console.log(userToken);
      const { dispatch } = thunkAPI;
      localStorage.setItem("userToken", data.userToken);
      message.success("User Logged In");
      dispatch(getUser());
      return { token };
    } catch (err) {
      // return custom error message from API if any
      message.error("Invalid Credentials");
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);
export const adminLogin = createAsyncThunk(
  "admin/login",
  async ({ email, password }, thunkAPI) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `${url}/auth/admin/login`,
        { email, password },
        config
      );
      // store user's token in local storage
      const token = data.userToken;
      console.log(userToken);
      const { dispatch } = thunkAPI;
      localStorage.setItem("adminToken", data.userToken);
      message.success("Admin Logged In");
      dispatch(getAdmin());
      return { token };
    } catch (err) {
      // return custom error message from API if any
      message.error("Invalid Credentials");
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const userLogin_Google = createAsyncThunk(
  "user/login",
  async (GToken, thunkAPI) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `${url}/auth/google/login`,
        { Gtoken: GToken },
        config
      );
      // store user's token in local storage
      const token = data.userToken;
      console.log(userToken);
      const { dispatch } = thunkAPI;
      localStorage.setItem("userToken", data.userToken);
      message.success("User Logged In");
      dispatch(getUser());
      return { token };
    } catch (err) {
      // return custom error message from API if any
      message.error("Invalid Credentials");
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

//user get as well as verify
export const getUser = createAsyncThunk(
  "api/account/me",
  async (_, thunkAPI) => {
    try {
      const res = await fetch(`${url}/auth/verify`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
      const data = await res.json();

      localStorage.setItem("user", JSON.stringify({ ...data }));
      console.log("getuser", data);
      if (res.status === 200) {
        return { ...data };
      } else {
        if (data.message === "Blocked") {
          message.error("You Are Blocked");
        }
        localStorage.removeItem("userToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("user");
        localStorage.removeItem("alpha");
        localStorage.removeItem("usera");
        return thunkAPI.rejectWithValue(data);
      }
    } catch (err) {
      localStorage.removeItem("userToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("user");
      localStorage.removeItem("alpha");
      localStorage.removeItem("usera");
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const getAdmin = createAsyncThunk(
  "api/account/admin",
  async (_, thunkAPI) => {
    try {
      const res = await fetch(`${url}/auth/verify/admin`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
        },
      });
      const data = await res.json();

      localStorage.setItem("admin_user", JSON.stringify({ ...data }));
      if (res.status === 200) {
        return { ...data };
      } else {
        localStorage.removeItem("admin_user");
        localStorage.removeItem("adminToken");
        return thunkAPI.rejectWithValue(data);
      }
    } catch (err) {
      localStorage.removeItem("admin_user");
      localStorage.removeItem("adminToken");

      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);
// export const Product_page = createAsyncThunk(
//   "product_page",
//   async (username, thunkAPI) => {
//     try {
//       // configure header's Content-Type as JSON

//       console.log("product_page", username);
//       return username;
//     } catch (err) {
//       return thunkAPI.rejectWithValue(err);
//     }
//   }
// );
const hostel_page = "hostel_page";
const order_page = "order_page";
const review_page = "review_page";
const user_page = "user_page";
export const Hostel_page = (newPage) => {
  return {
    type: hostel_page,
    payload: newPage,
  };
};
export const Order_page = (newPage) => {
  return {
    type: order_page,
    payload: newPage,
  };
};
export const Review_page = (newPage) => {
  return {
    type: review_page,
    payload: newPage,
  };
};
export const User_page = (newPage) => {
  return {
    type: user_page,
    payload: newPage,
  };
};

export const Product_name = createAsyncThunk(
  "product_name",
  async (username, thunkAPI) => {
    try {
      // configure header's Content-Type as JSON

      console.log("product_name", username);
      return username;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);
export const Sort_product = createAsyncThunk(
  "sort_product",
  async (username, thunkAPI) => {
    try {
      // configure header's Content-Type as JSON

      console.log("sort_product", username);
      return username;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const Filter_obj = createAsyncThunk(
  "filter_obj",
  async (username, thunkAPI) => {
    try {
      return username;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);
export const AllowedFor = createAsyncThunk(
  "AllowedFor",
  async (username, thunkAPI) => {
    try {
      return username;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);
export const Distance = createAsyncThunk(
  "Distance",
  async (username, thunkAPI) => {
    try {
      return username;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

// initialize userToken from local storage
const userToken = localStorage.getItem("userToken", "role")
  ? localStorage.getItem("userToken", "role")
  : null;

const initialState = {
  loading: true,
  admin_loading: true,
  user: null,
  admin_user: null,
  userToken: localStorage.getItem("userToken"),
  adminToken: localStorage.getItem("adminToken"),
  admin: false,
  isAuthenticated: false,
  error: null,
  loginStatus: "",
  loginError: "",
  hostel_page: 1,
  order_page: 1,
  user_page: 1,
  review_page: 1,
  product_name: "",
  filter_obj: "&",
  allowed_for: "",
  sort_product: -1,
  hostel_name: "",
  distance:"",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout(state, action) {
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("userToken");
      localStorage.removeItem("user");
      localStorage.removeItem("admin_user");
      localStorage.removeItem("alpha");
      localStorage.removeItem("adminToken");

      return {
        ...state,
        userToken: "",
        adminToken: "",
        user: "",
        admin_user: "",
        loading: false,
        admin_loading: false,
        isAuthenticated: false,
        userToken: "",
        hostel_page: 1,
        user_page: 1,
        admin: false,
        product_name: "",
        filter_obj: "&",
        order_page: 1,
        sort_product: -1,
        allowed_for: "",

        hostel_name: "",
  distance:"",

      };
    },
  },
  extraReducers: (builder) => {
    // login user
    builder
      .addCase(userLogin.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(userLogin.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.userToken = payload.token;
      })
      .addCase(userLogin.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.isAuthenticated = false;
        state.userToken = "";
      })

      .addCase(adminLogin.pending, (state, action) => {
        state.admin_loading = true;
      })
      .addCase(adminLogin.fulfilled, (state, { payload }) => {
        state.admin_loading = false;
        state.adminToken = payload.token;
        state.admin = true;
      })
      .addCase(adminLogin.rejected, (state, { payload }) => {
        state.admin_loading = false;
        state.error = payload;
        state.adminToken = "";
        state.admin = false;
      })

      //   get user
      .addCase(getUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;

        // state.user = action.payload;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.userToken = "";

        state = action.payload;
      })
      .addCase(getAdmin.pending, (state) => {
        state.admin_loading = true;
      })
      .addCase(getAdmin.fulfilled, (state, action) => {
        state.admin_loading = false;
        state.admin = true;
        state.admin_user = action.payload;

        // state.user = action.payload;
      })
      .addCase(getAdmin.rejected, (state, action) => {
        state.admin_loading = false;
        state.adminToken = "";
        state.admin = false;
        state = action.payload;
      })

      .addCase(hostel_page, (state, action) => {
        state.hostel_page = action.payload;
      })
      .addCase(review_page, (state, action) => {
        state.review_page = action.payload;
      })
      .addCase(order_page, (state, action) => {
        state.order_page = action.payload;
      })
      .addCase(user_page, (state, action) => {
        state.user_page = action.payload;
      })

      .addCase(Product_name.fulfilled, (state, action) => {
        state.hostel_name = action.payload;
      })
      .addCase(Filter_obj.fulfilled, (state, action) => {
        state.filter_obj = action.payload;
      })
      .addCase(AllowedFor.fulfilled, (state, action) => {
        state.filter_obj = action.payload;
      })
      .addCase(Distance.fulfilled, (state, action) => {
        state.distance = action.payload;
      })
      .addCase(Sort_product.fulfilled, (state, action) => {
        state.sort_product = action.payload;
      });
  },
});
// export default userSlice.reducer;

export const { logout } = userSlice.actions;

// export default userSlice.reducer;
export default userSlice.reducer;
