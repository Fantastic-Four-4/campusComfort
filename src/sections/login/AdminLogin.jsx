import { useState } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { alpha, useTheme } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import { jwtDecode } from 'jwt-decode';

import { useRouter } from '../../routes/hooks';

import { bgGradient } from '../../theme/css';

import Logo from '../../components/logo';
import Iconify from '../../components/iconify';
import { LoadingButton } from '@mui/lab';
import { Form, Input, message } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import { useCreateUserMutation } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { Login_show } from '../../store/mutation/remainingSlice';
import { adminLogin, userLogin, userLogin_Google } from '../../store/mutation/userSlice';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// ----------------------------------------------------------------------

export default function AdminLogin() {
  const [show_login_box, setShow_login_box] = useState(false);
  const dispatch=useDispatch()
const {  login_show} = useSelector(
  (state) => state.remaning
);
const {  userToken, user,loading,admin_user, checkAuthLoading ,isAuthenticated,admin,adminToken} = useSelector(
  (state) => state.user
);
const navigate=useNavigate()
useEffect(() => {
if(adminToken&&admin_user){
navigate("/")
}
}, [adminToken,admin_user]);
  const [isGoogleApiLoaded, setIsGoogleApiLoaded] = useState(false);

  const handleCallBack = (res) => {
    console.log(res.credential);
    dispatch(userLogin_Google(res.credential))
    var userobj = jwtDecode(res.credential);
    console.log(userobj);
    dispatch(Login_show(false))
  };
  const google = window.google

  useEffect(() => {
    const handleScriptLoad = () => {
      google.accounts.id.initialize({
        client_id: "287107085331-o3tpuma26c2et6chg7vep6h259erkv22.apps.googleusercontent.com",
        callback: handleCallBack,
      });

      setIsGoogleApiLoaded(true);
    };

    // Load the Google Identity Services library script
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.onload = handleScriptLoad;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    if (isGoogleApiLoaded) {
      google.accounts.id.renderButton(
        document.getElementById("signInDiv"),
        { theme: "outline", size: "large" }
      );
    }
  }, [isGoogleApiLoaded]);
  
  
  const [createUser, creatUserResponseInfo] =
  useCreateUserMutation();

  useEffect(() => {
    if (creatUserResponseInfo?.isSuccess === true) {
      message.success("Register Successfull");
      setShow_login_box(false)
  
    }
    //  if(creatQuotationResponseInfo?)
  }, [creatUserResponseInfo]);



  const theme = useTheme();

  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    // router.push('/dashboard');
  };
  const LoginFun=(data)=>{
    dispatch(adminLogin(data))
  }
  const RegisterFun=(data)=>{
    if(data.password!==data.cpassword){
      message.error("Incorrect Password")
    }else{

      createUser(data)
    }
  }
  const renderForm = (
    <>{!show_login_box?
      <Form onFinish={(data)=>LoginFun(data)}>
      <Stack spacing={3}>
<FormItem  name="email"  >
  <Input className="input-form-cus" placeholder='Enter Email'/>
</FormItem>
<FormItem  name="password"   >
  <Input type="password" className="input-form-cus" placeholder='Enter Password'/>
</FormItem>

     
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ my: 3 }}>
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack>

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        color="inherit"
      >
        Login
      </LoadingButton>
      </Form>
      :  <Form onFinish={(data)=>RegisterFun(data)}>
      <Stack spacing={3}>
<FormItem  name="name"  >
  <Input required className="input-form-cus" placeholder='Enter Name'/>
</FormItem>
<FormItem  name="email"  >
  <Input required className="input-form-cus" placeholder='Enter Email'/>
</FormItem>
<FormItem  name="phone"  >
  <Input required className="input-form-cus" placeholder='Enter Phone Number' type='number'/>
</FormItem>
<FormItem  name="password"   >
  <Input required type="password" className="input-form-cus" placeholder='Enter Password'/>
</FormItem>
<FormItem  name="cpassword"   >
  <Input required type="password" className="input-form-cus" placeholder='Confirm Password'/>
</FormItem>

     
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ my: 3 }}>
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack>

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        color="inherit"
      >
        Register
      </LoadingButton>
      </Form>
    }
       

    </>
  );

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: '/assets/background/overlay_4.jpg',
        }),
        height: 1,
        marginBottom:"80px"

      }}
    >
      <Logo
        sx={{
          position: 'fixed',
          top: { xs: 16, md: 24 },
          left: { xs: 16, md: 24 },
        }}
      />

      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
        <Card
          sx={{
            p: 5,
            width: 1,
            maxWidth: 420,
          }}
        >
          <Typography variant="h4">Admin Sign in</Typography>

       
          {/* <div id="signInDiv"></div> */}

          <Divider sx={{ my: 3 }}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              OR
            </Typography>
          </Divider>

          {renderForm}
        </Card>
      </Stack>
    </Box>
  );
}
