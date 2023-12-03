import { useState } from 'react';

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
import { Pagination } from 'antd';
import { Hostel_page } from '../../../store/mutation/userSlice';

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
  const { user, adminToken, loading, admin,hostel_page } = useSelector(
    (state) => state.user
  );
  const filter=""
  const hostel_name=""
  const {
    data: data,
    isLoading: hostel_loading,
    isFetching: fetch,
    error: error,
  } = useFetchHostelQuery({  hostel_page,filter,hostel_name ,limit:itemsPerPage});
  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Products
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
