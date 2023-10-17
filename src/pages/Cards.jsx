import React from 'react';
// import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
// import OutboundOutlinedIcon from '@mui/icons-material/OutboundOutlined';
// import ShowerOutlinedIcon from '@mui/icons-material/ShowerOutlined';
// import ChairAltIcon from '@mui/icons-material/ChairAlt';
import PropTypes from 'prop-types';

import "../cards.css";
// import occupancy from '../assets/occupancy.png'
// import "../../public/assets/images/products/product_1.jpg"
export default function Card(props) {
  const {hostelImg, heading, address, rate, distance, genderImg, gender} = props;
  return (
    <div>
      <div className="card-container">
        <div className='img-container'>
          <img className="zoom-image" src={hostelImg} alt="" />
        </div>
        <div className='align-cont'>
          <div className='title'>
            <h2>{heading}</h2>
            <p className='add'>{address}</p>
          </div>
          <div className='price'>
            <p style={{ color: 'grey', fontWeight: 500, margin: 0 }}>Starts from</p>
            <p className='rate'>₹ {rate}<span className='pmonth'>/mo*</span></p>
          </div>
        </div>
        <div className='align-cont'>
          <div className='distance'>
            {/* <LocationOnOutlinedIcon/> */}
            <p>{distance}</p>
          </div>
          <div className='direction'>
            {/* <OutboundOutlinedIcon /> */}
            <p >View Directions</p>
          </div>
        </div>
        <div className="facilites">
          <p><span className='facilitiy-heading'>Equipped</span> with</p>

          {/* <ShowerOutlinedIcon className='icon-circle'/> */}
          <p style={{ paddingLeft: '5px' }}>Attached Washroom</p>
          {/* <ChairAltIcon className='icon-circle'/> */}
          <p style={{ paddingLeft: '5px' }}>Study Table</p>
        </div>
        <div className="details">
          <img src={genderImg} className='gender-icon' alt="" srcSet="" />
          <p>{gender}</p>
          <div className='separator' />
          <img src="../../public/assets/images/products/product_1.jpg" className='occupancy-icon' alt="" />
          <p>Single, Double, Triple</p>
        </div>
        <div className="align-cont">
          <button className='card-btn1' type='button'>SCHEDULE A VISIT</button>
          <button className='card-btn2' type='button'>REQUEST A CALLBACK</button>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  hostelImg: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  rate: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  distance: PropTypes.string.isRequired,
  genderImg: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired
};