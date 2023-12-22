import { useState } from 'react';
import React from 'react'
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { products } from '../../../_mock/products';

import ProductSort from '../product-sort';
import ProductFilters from '../product-filters';
import ProductCartWidget from '../product-cart-widget';
import ShopProductCard from '../../../molicule/ProductCard';
import { useFetchHostelQuery } from '../../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Pagination } from 'antd';
import { Hostel_page } from '../../../store/mutation/userSlice';
import Map from '../../../molicule/allmaps';
import { Box, Drawer } from '@mui/material';

// ----------------------------------------------------------------------
const hostel = [
  {
    id: "12232",
    name: "Modern Hostel",
    image: `/assets/images/products/hostelimg.jpg`,
    address: "Annapurna Nagar, Kopargaon",
    gender: "Female",
    price: 2000,
    distance: 1,
    eqp: ["Attached washroom", "Study table"],
    beds: "single, double",
  },
  {
    id: "12232",

    name: "College Hostel",
    image: `/assets/images/products/hostelimg.jpg`,
    address: "Sanjivani College of Engineering, Kopargaon",
    gender: "Male",
    price: 2500,
    distance: 0.2,
    eqp: ["Attached washroom", "Study table"],
    beds: "single, double, triple"
  },
  {
    id: "12232",

    name: "Laxmi Girls Hostel",
    image: `/assets/images/products/hostelimg.jpg`,
    address: "Yeola Naka, Kopargaon",
    gender: "Female",
    price: 3000,
    distance: 1.5,
    eqp: ["Attached washroom", "Study table"],
    beds: 'double, triple',
  },
  {
    id: "12232",

    name: "Laxmi Girls Hostel",
    image: `/assets/images/products/hostelimg.jpg`,
    address: "Yeola Naka, Kopargaon",
    gender: "Female",
    price: 3000,
    distance: 1.5,
    eqp: ["Attached washroom", "Study table"],
    beds: 'double, triple',
  },
  {
    id: "12232",

    name: "Laxmi Girls Hostel",
    image: `/assets/images/products/hostelimg.jpg`,
    address: "Yeola Naka, Kopargaon",
    gender: "Female",
    price: 3000,
    distance: 1.5,
    eqp: ["Attached washroom", "Study table"],
    beds: 'double, triple',
  },
  {
    id: "12232",

    name: "Laxmi Girls Hostel",
    image: `/assets/images/products/hostelimg.jpg`,
    address: "Yeola Naka, Kopargaon",
    gender: "Female",
    price: 3000,
    distance: 1.5,
    eqp: ["Attached washroom", "Study table"],
    beds: 'double, triple',
  },
  {
    id: "12232",

    name: "Laxmi Girls Hostel",
    image: `/assets/images/products/hostelimg.jpg`,
    address: "Yeola Naka, Kopargaon",
    gender: "Female",
    price: 3000,
    distance: 1.5,
    eqp: ["Attached washroom", "Study table"],
    beds: 'double, triple',
  },
]

export default function ProductsView() {
  const itemsPerPage = 9;
  const dispatch=useDispatch()
const handlePageChange=(data)=>{
  dispatch(Hostel_page(data))
}
  const { distance,user, adminToken, loading, admin,hostel_page,hostel_name,filter_obj,allowed_for } = useSelector(
    (state) => state.user
  );
  const filter=""

  const {
    data: data,
    isLoading: hostel_loading,
    isFetching: fetch,
    error: error,
  } = useFetchHostelQuery({ distance:distance, hostel_page,filter,hostel_name ,limit:itemsPerPage,filter_obj:filter_obj,allowed_for});

  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };
  const locations = [
    { name: 'Kopargaon', latitude: 19.8804, longitude: 74.4747 },
    { name: 'Anapurne Nagar', latitude: 19.8985769, longitude: 74.4891958 },
    { name: 'Sanjivani', latitude: 19.90194, longitude: 74.49428 },
    { name: 'Garima Nagar', latitude: 19.880870, longitude: 74.474190 },
    { name: 'Ambika Nagar', latitude: 19.22656, longitude: 73.09031 },
    { name: 'Natraj', latitude: 18.45083, longitude: 73.87951 },
    // { name: '', latitude: 19.226560, longitude: 73.090310 },
    // { name: 'Nashik', latitude: 20.0059, longitude: 73.7917 },
    // { name: 'Aurangabad', latitude: 19.8762, longitude: 75.3433 },
    // { name: 'Nagpur', latitude: 21.1466, longitude: 79.0882 },
    // { name: 'Solapur', latitude: 17.6599, longitude: 75.9064 },
    // { name: 'Kolhapur', latitude: 16.7050, longitude: 74.2433 },
  ];
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <Box
      sx={{ width: "80vw", height: "100vh" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div>
        <Map locations={locations} />
      </div>
    </Box>
  );


  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Hostels
      </Typography>

      <Stack
        direction="row"
        alignItems="center"
        flexWrap="wrap-reverse"
        justifyContent="flex-end"
        sx={{ mb: 5 }}
      >
        <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
          <ProductFilters
            openFilter={openFilter}
            onOpenFilter={handleOpenFilter}
            onCloseFilter={handleCloseFilter}
          />

          <ProductSort />
        </Stack>
        <Stack>
          {['right'].map((anchor) => (
            <React.Fragment key={anchor}>
              <Button onClick={toggleDrawer(anchor, true)}
                style={{
                  marginLeft: "19rem",
                }}
              >Show Map</Button>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </Stack>

      </Stack>

      {/* <Grid container spacing={3}>
        {products.map((product) => (
          <Grid key={product.id} xs={12} sm={6} md={3}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid> */}

      <Grid container spacing={3}>
        {data?.data?.map((hostel) => (
          <Grid key={hostel.id} xs={12} sm={6} md={4}>
            <ShopProductCard hostel={hostel} />
          </Grid>
        ))}
      </Grid>
      <div style={{width:"100%"}}>

      <Pagination
      style={{margin:"auto",width:"200px",marginTop:"20px"}}
              current={hostel_page}
              pageSize={itemsPerPage}
              total={data?.totalItems}
              onChange={handlePageChange}
              />
              </div>

      {/* <ProductCartWidget /> */}
    </Container>
  );
}
