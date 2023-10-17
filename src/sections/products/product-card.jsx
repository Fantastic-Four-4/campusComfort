import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
// import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
//import { hostel } from 'src/_mock/products';
// import { fCurrency } from 'src/utils/format-number';

// import Label from 'src/components/label';
// import { ColorPreview } from 'src/components/color-utils';

// ----------------------------------------------------------------------

export default function ShopProductCard({ hostel }) {
  // const renderStatus = (
  //   <Label
  //     variant="filled"
  //     color={(product.status === 'sale' && 'error') || 'info'}
  //     sx={{
  //       zIndex: 9,
  //       top: 16,
  //       right: 16,
  //       position: 'absolute',
  //       textTransform: 'uppercase',
  //     }}
  //   >
  //     {product.status}
  //   </Label>
  // );

  const renderImg = (
    <Box
      component="img"
      alt={hostel.name}
      src={hostel.image}
      sx={{
        top: 0,
        width: 1,
        height: 1,
        objectFit: 'cover',
        position: 'absolute',
      }}
    />
  );

  // const renderPrice = (
  //   <Typography variant="subtitle1">
  //     <Typography
  //       component="span"
  //       variant="body1"
  //       sx={{
  //         color: 'text.disabled',
  //         textDecoration: 'line-through',
  //       }}
  //     >
  //       {product.priceSale && fCurrency(product.priceSale)}
  //     </Typography>
  //     &nbsp;
  //     {fCurrency(product.price)}
  //   </Typography>
  // );

  return (
    <Link to={`/singleHostel/${hostel.id}`}>
    <Card sx={{ width: '100%', maxWidth: '350px' }}>
      <Box sx={{ position: 'relative', height: "300px" }}>

        {renderImg}
      </Box>
    <p>{hostel.id}</p>
      <Stack spacing={2} sx={{ p: 3 }}>
        {/* <Link color="inherit" underline="hover" variant="subtitle2" noWrap>
          {product.name}
        </Link> */}
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <Box display="flex" flexDirection="column">
            <Typography variant='h4'>{hostel.name}</Typography>
            <Typography>{hostel.address}</Typography>
          </Box>
          <Box display="flex" flexDirection="column">
            <p style={{ color: 'grey', fontWeight: 500, margin: 0 }}>Starts from</p>
            <p className='rate'>₹{hostel.price}<span className='pmonth'>/mo*</span></p>
          </Box>
        </Box>

        {/* <Stack direction="row" alignItems="center" justifyContent="space-between">
          <ColorPreview colors={product.colors} />
          {renderPrice}
        </Stack> */}

        <div className='align-cont'>
          <div className='distance'>
            {/* <LocationOnOutlinedIcon/> */}
            <p>{hostel.distance}km</p>
          </div>
          <div className='direction'>
            {/* <OutboundOutlinedIcon /> */}
            <p >View Directions</p>
          </div>
        </div>
        <div className="facilites">
          <p><span className='facilitiy-heading'>Equipped</span> with</p>
          {hostel.eqp.map((item) => <p style={{ paddingLeft: '5px' }}>{item}</p>)}
          {/* <ShowerOutlinedIcon className='icon-circle'/> */}
          {/* <p style={{ paddingLeft: '5px' }}>Attached Washroom</p> */}
          {/* <ChairAltIcon className='icon-circle'/> */}
          {/* <p style={{ paddingLeft: '5px' }}>Study Table</p> */}
        </div>
        <div className="details">
          <img src="../../public/assets/images/products/product_1.jpg" className='gender-icon' alt="" srcSet="" />
          <p>{hostel.gender}</p>
          <div className='separator' />
          <img src="../../public/assets/images/products/product_1.jpg" className='occupancy-icon' alt="" />
          <p>{hostel.beds}</p>
        </div>
        <div className="align-cont">
          <button className='card-btn1' type='button'>SCHEDULE A VISIT</button>
          <button className='card-btn2' type='button'>REQUEST A CALLBACK</button>
        </div>
      </Stack>
    </Card>
    </Link>
  );
}

ShopProductCard.propTypes = {
  product: PropTypes.object,
};
