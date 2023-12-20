import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { jwtDecode } from 'jwt-decode';


import { useResponsive } from '../../hooks/use-responsive';

import { bgBlur } from '../../theme/css';

import Iconify from '../../components/iconify';

import Searchbar from './common/searchbar';
import { NAV, HEADER } from './config-layout';
import AccountPopover from './common/account-popover';
import LanguagePopover from './common/language-popover';
import NotificationsPopover from './common/notifications-popover';
import { Close, Login } from '@mui/icons-material';
import { useState } from 'react';
import { useEffect } from 'react';
import FormItem from 'antd/es/form/FormItem';
import { Form } from 'react-router-dom';
import { Button, Input, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Hr from '../../molicule/buttonAutom/Hr';
import { useCreateUserMutation } from '../../store/store';
import { Product_name, logout, userLogin, userLogin_Google } from "../../store/mutation/userSlice";
import { Login_show } from '../../store/mutation/remainingSlice';


// ----------------------------------------------------------------------
const LoginUser=(data,dispatch,userLogin)=>{
  console.log(data)
  dispatch(userLogin(data))
  }
  const RegisterUser=(data,createUser)=>{
  console.log(data)
  const {password,cpassword,...data1}=data
  if(password!==cpassword){
    message.error("Password Dont Match")
  }else{
    createUser(data)
  }
  }
export default function Header({ onOpenNav }) {
const [show_login_box, setShow_login_box] = useState(false);
const dispatch=useDispatch()
const {  login_show} = useSelector(
  (state) => state.remaning
);
const {  userToken, user,loading, checkAuthLoading ,isAuthenticated,admin,adminToken} = useSelector(
  (state) => state.user
);

  const theme = useTheme();

  const lgUp = useResponsive('up', 'lg');

  const renderContent = (
    <>
      {!lgUp && (
        <IconButton onClick={onOpenNav} sx={{ mr: 1 }}>
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>
      )}

      <Searchbar />
  
      <Box sx={{ flexGrow: 1 }} />

      <Stack direction="row" alignItems="center" spacing={1}>
        {/* <LanguagePopover /> */}
 
        {/* <NotificationsPopover /> */}
        {userToken&&user?
        <AccountPopover />
        :null }
      </Stack>
{/* {login_show?<LoginBox/>:null} */}
    </>
  );

  return (
    <AppBar
      sx={{
        boxShadow: 'none',
        height: HEADER.H_MOBILE,
        zIndex: theme.zIndex.appBar + 1,
        ...bgBlur({
          color: theme.palette.background.default,
        }),
        transition: theme.transitions.create(['height'], {
          duration: theme.transitions.duration.shorter,
        }),
        ...(lgUp && {
          width: `calc(100% - ${NAV.WIDTH + 1}px)`,
          height: HEADER.H_DESKTOP,
        }),
      }}
    >
      <Toolbar
        sx={{
          height: 1,
          px: { lg: 5 },
        }}
      >
        {renderContent}
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  onOpenNav: PropTypes.func,
};
