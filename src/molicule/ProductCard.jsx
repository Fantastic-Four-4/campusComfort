import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import "./hostelcard.css"
import "./card.css"
import { capitalizeFirstLetter } from '../atoms/State';
import { Chip } from '@mui/material';
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
  const renderImg2 = (
    <Box className='zoom-img'
      component="img"
      alt={hostel?.hostel_name}
      src={hostel?.hostel_img}
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
      <Box sx={{ position: 'relative', height: "400px" }}>
      {hostel?.hostel_img?<>
      {renderImg2}
      </>:
<>
        {renderImg}
</>
}
      </Box>
      <Stack spacing={2} sx={{ p: 3 }}>
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <Box display="flex" flexDirection="column">
            <Typography variant='h4'>{capitalizeFirstLetter(hostel?.hostel_name)}</Typography>
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

          <div style={{display:"flex",flexWrap:"wrap"}}>

          {hostel?.hostel_features &&
                  Object.entries(hostel.hostel_features).map(
                    ([feature, value]) => {
                      if (value) {
                        return (
                          <Chip
                            key={feature}
                            label={feature}
                            style={{
                              margin: "5px",
                              fontSize: "1.1rem",
                              color: "rgb(0, 151, 118)",
                              backgroundColor: "#fff",
                              border: "solid 2px rgb(96, 195, 173)",
                            }}
                          ></Chip>
                        );
                      }
                      return null;
                    }
                  )}
          </div>

        </div>
        <div className="details">
        {hostel?.allowed_for.toLowerCase()==="boys"?

          <img src="./assets/boy.jpg" className='gender-icon' alt="" srcSet="" />
          :<img src="./assets/girl.jpg" className='gender-icon' alt="" srcSet="" />
        }
          <p>{hostel?.allowed_for}</p>
          <div className='separator' />
          {/* <img src="https://th.bing.com/th/id/OIP.SNRWR7GfIRZZi7VnK5oLLgHaEK?rs=1&pid=ImgDetMain" className='occupancy-icon' alt="" />
          <p>{hostel?.beds}</p> */}
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
