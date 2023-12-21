import { useEffect } from "react";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { alpha } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import ListItemButton from "@mui/material/ListItemButton";

import { usePathname } from "../../routes/hooks";
import { RouterLink } from "../../routes/components";

import { useResponsive } from "../../hooks/use-responsive";

import { account } from "../../_mock/account";

import Logo from "../../components/logo";
import Scrollbar from "../../components/scrollbar";

import { NAV } from "./config-layout";
// import navConfig from './config-navigation';
import SvgColor from "../../components/svg-color";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/mutation/userSlice";

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor
    src={`/assets/icons/navbar/${name}.svg`}
    sx={{ width: 1, height: 1 }}
  />
);
// ----------------------------------------------------------------------
const navConfig = [
  // {
  //   title: "user",
  //   path: "/user",
  //   icon: icon("ic_user"),
  // },
  {
    title: "hostels",
    path: "/hostels",
    icon: icon("ic_cart"),
  },
  {
    title: "blog",
    path: "/blog",
    icon: icon("ic_blog"),
  },

  {
    title: "Not found",
    path: "/404",
    icon: icon("ic_disabled"),
  },
];
const navConfigloggedOUT = [
  // {
  //   title: "user",
  //   path: "/user",
  //   icon: icon("ic_user"),
  // },
  {
    title: "hostel",
    path: "/hostels",
    icon: icon("ic_cart"),
  },
  
  {
    title: "blog",
    path: "/blog",
    icon: icon("ic_blog"),
  },
  {
    title: "login",
    path: "/login",
    icon: icon("ic_lock"),
  },
  {
    title: "Not found",
    path: "/404",
    icon: icon("ic_disabled"),
  },
];


export default function Nav({ openNav, onCloseNav }) {

  const { user, adminToken, userToken, loading, admin, admin_user } =
  useSelector((state) => state.user);
  const navConfigAdmin = [
    {
      title: "dashboard",
      path: "/",
      icon: icon("ic_analytics"),
    },
    {
      title: "My Hostel",
      path: `/createHostel/${admin_user?._id}`,
      icon: icon("ic_analytics"),
    },
    // {
    //   title: "staff",
    //   path: "/staff",
    //   icon: icon("ic_user"),
    // },
    // {
    //   title: "Hostel List",
    //   path: "/admin_hostel",
    //   icon: icon("ic_user"),
    // },
    // {
    //   title: "user",
    //   path: "/user",
    //   icon: icon("ic_user"),
    // },
  
    // {
    //   title: "blog",
    //   path: "/blog",
    //   icon: icon("ic_blog"),
    // },
  ];
  const navConfigAdminSuper = [
    {
      title: "dashboard",
      path: "/",
      icon: icon("ic_analytics"),
    },
    // {
    //   title: "My Hostel",
    //   path: `/createHostel/${admin_user?._id}`,
    //   icon: icon("ic_analytics"),
    // },
    {
      title: "staff",
      path: "/staff",
      icon: icon("ic_user"),
    },
    {
      title: "Hostel List",
      path: "/admin_hostel",
      icon: icon("ic_user"),
    },
    // {
    //   title: "user",
    //   path: "/user",
    //   icon: icon("ic_user"),
    // },
  
    // {
    //   title: "blog",
    //   path: "/blog",
    //   icon: icon("ic_blog"),
    // },
  ];
  const pathname = usePathname();
const dispatch=useDispatch()
  const upLg = useResponsive("up", "lg");

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);
 
  const renderAccount = (
    <>
      {user && userToken ? (
        <Box
          sx={{
            my: 3,
            mx: 2.5,
            py: 2,
            px: 2.5,
            display: "flex",
            borderRadius: 1.5,
            alignItems: "center",
            bgcolor: (theme) => alpha(theme.palette.grey[500], 0.12),
          }}
        >
          <Avatar src={account.photoURL} alt="photoURL" />

          <Box sx={{ ml: 2 }}>
            <Typography variant="subtitle2">{user?.name}</Typography>

            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {account.role}
            </Typography>
          </Box>
        </Box>
      ) : null}
    </>
  );

  const renderMenu = (
    <Stack component="nav" spacing={0.5} sx={{ px: 2 }}>
      {userToken && user ? (
        <>
          {navConfig.map((item) => (
            <NavItem key={item.title} item={item} />
          ))}
        </>
      ) : null}
      {!userToken && !user && !adminToken && !admin_user ? (
        <>
          {navConfigloggedOUT.map((item) => (
            <NavItem key={item.title} item={item} />
          ))}
        </>
      ) : null}
      {adminToken && admin_user&&admin_user.role==="staff" ? (
        <>
          {navConfigAdmin.map((item) => (
            <NavItem key={item.title} item={item} />
          ))}
          <div onClick={()=>dispatch(logout())}>

          <NavItem
          
          key={"Logout"}
          item={{
            title: "Logout",
            path: "/hostels",
            icon: icon("ic_disabled"),
          }}
          />
          </div>
        </>
      ) : null}
      {adminToken && admin_user&&admin_user.role==="admin" ? (
        <>
          {navConfigAdminSuper.map((item) => (
            <NavItem key={item.title} item={item} />
          ))}
          <div onClick={()=>dispatch(logout())}>

          <NavItem
          
          key={"Logout"}
          item={{
            title: "Logout",
            path: "/hostels",
            icon: icon("ic_disabled"),
          }}
          />
          </div>
        </>
      ) : null}
    </Stack>
  );

  const renderUpgrade = (
    <Box sx={{ px: 2.5, pb: 3, mt: 10 }}>
      {/* <Stack alignItems="center" spacing={3} sx={{ pt: 5, borderRadius: 2, position: 'relative' }}>
        <Box
          component="img"
          src="/assets/illustrations/illustration_avatar.png"
          sx={{ width: 100, position: 'absolute', top: -50 }}
        />

        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h6">Get more?</Typography>

          <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
            From only $69
          </Typography>
        </Box>

        <Button
          href="https://material-ui.com/store/items/minimal-dashboard/"
          target="_blank"
          variant="contained"
          color="inherit"
        >
          Upgrade to Pro
        </Button>
      </Stack> */}
    </Box>
  );

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        "& .simplebar-content": {
          height: 1,
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      {/* <Logo sx={{ mt: 3, ml: 4 }} /> */}
      <Box sx={{ mt: 3, ml: 4 }}>
        <h2 style={{ position: "relative", width: "100px" }}>
          CAMPUS <span style={{ color: "teal" }}>COMFORTS</span>
        </h2>
      </Box>
      {renderAccount}

      {renderMenu}

      <Box sx={{ flexGrow: 1 }} />

      {renderUpgrade}
    </Scrollbar>
  );

  return (
    <Box
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.WIDTH },
      }}
    >
      {upLg ? (
        <Box
          sx={{
            height: 1,
            position: "fixed",
            width: NAV.WIDTH,
            borderRight: (theme) => `dashed 1px ${theme.palette.divider}`,
          }}
        >
          {renderContent}
        </Box>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          PaperProps={{
            sx: {
              width: NAV.WIDTH,
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}

Nav.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func,
};

// ----------------------------------------------------------------------

function NavItem({ item }) {
  const pathname = usePathname();

  const active = item.path === pathname;

  return (
    <ListItemButton
      component={RouterLink}
      href={item.path}
      sx={{
        minHeight: 44,
        borderRadius: 0.75,
        typography: "body2",
        color: "text.secondary",
        textTransform: "capitalize",
        fontWeight: "fontWeightMedium",
        ...(active && {
          color: "primary.main",
          fontWeight: "fontWeightSemiBold",
          bgcolor: (theme) => alpha(theme.palette.primary.main, 0.08),
          "&:hover": {
            bgcolor: (theme) => alpha(theme.palette.primary.main, 0.16),
          },
        }),
      }}
    >
      <Box component="span" sx={{ width: 24, height: 24, mr: 2 }}>
        {item.icon}
      </Box>

      <Box component="span">{item.title} </Box>
    </ListItemButton>
  );
}

NavItem.propTypes = {
  item: PropTypes.object,
};
