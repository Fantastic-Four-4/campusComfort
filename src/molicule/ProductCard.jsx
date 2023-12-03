import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import "./hostelcard.css"
import "./card.css"
// ----------------------------------------------------------------------

export default function ShopProductCard({ hostel }) {
  const renderImg = (
    <Box className='zoom-img'
      component="img"
      alt={hostel?.hostel_name}
      src={"https://th.bing.com/th/id/OIP.SNRWR7GfIRZZi7VnK5oLLgHaEK?rs=1&pid=ImgDetMain"}
      sx={{
        top: 0,
        width: 1,
        height: 1,
        objectFit: 'cover',
        position: 'absolute',
      }}
    />
  );

  return (
    <Link to={`/singleHostel/${hostel._id}`}
    style={{
      textDecoration: "none"
    }}
    >
    <Card sx={{ width: '100%', maxWidth: '350px' }}>
      <Box sx={{ position: 'relative', height: "300px" }}>

        {renderImg}
      </Box>
      <Stack spacing={2} sx={{ p: 3 }}>
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <Box display="flex" flexDirection="column">
            <Typography variant='h4'>{hostel?.hostel_name}</Typography>
            <Typography>{hostel?.hostel_address}</Typography>
          </Box>
          <Box display="flex" flexDirection="column">
            <p style={{ color: 'grey', fontWeight: 500, margin: 0 }}>Starts from</p>
            <p className='rate'>₹{hostel?.hostel_monthly_price}<span className='pmonth'>/mo*</span></p>
          </Box>
        </Box>

        <div className='align-cont'>
          <div className='distance'>
            {/* <LocationOnOutlinedIcon/> */}
            <p>{hostel?.distance_from_college} m</p>
          </div>
          <div className='direction'>
            {/* <OutboundOutlinedIcon /> */}
            <p >View Directions</p>
          </div>
        </div>
        <div className="facilites">
          <p><span className='facilitiy-heading'>Equipped</span> with</p>
          <div>

          {hostel?.hostel_features?.single_bed?<p  style={{ padding: '5px',margin:"5px",borderRadius:"7px",background:"var(--light-green)" ,color:"white"}}>Single Bed</p>:null}
          {hostel?.hostel_features?.single_bed?<p  style={{ padding: '5px',margin:"5px",borderRadius:"7px",background:"var(--light-green)" ,color:"white"}}>Single Bed</p>:null}
          {hostel?.hostel_features?.single_bed?<p  style={{ padding: '5px',margin:"5px",borderRadius:"7px",background:"var(--light-green)" ,color:"white"}}>Single Bed</p>:null}
          {hostel?.hostel_features?.single_bed?<p  style={{ padding: '5px',margin:"5px",borderRadius:"7px",background:"var(--light-green)" ,color:"white"}}>Single Bed</p>:null}
          </div>
        </div>
        <div className="details">
          <img src="https://th.bing.com/th/id/OIP.SNRWR7GfIRZZi7VnK5oLLgHaEK?rs=1&pid=ImgDetMain" className='gender-icon' alt="" srcSet="" />
          <p>{hostel?.allowed_for}</p>
          <div className='separator' />
          <img src="https://th.bing.com/th/id/OIP.SNRWR7GfIRZZi7VnK5oLLgHaEK?rs=1&pid=ImgDetMain" className='occupancy-icon' alt="" />
          <p>{hostel?.beds}</p>
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
