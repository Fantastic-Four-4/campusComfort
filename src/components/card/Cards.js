import React from 'react';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import OutboundOutlinedIcon from '@mui/icons-material/OutboundOutlined';
import ShowerOutlinedIcon from '@mui/icons-material/ShowerOutlined';
import ChairAltIcon from '@mui/icons-material/ChairAlt';
import occupancy from '../../assets/occupancy.png'
import '../style.css'
export default function card(props) {
  return (
    <div>
        <div className="card-container">
          <div className='img-container'>
            <img className="zoom-image" src={props.hostelImg} alt="" />
            </div>
            <div className='align-cont'>
              <div className='title'>
                <h2>{props.heading}</h2>
                <p className='add'>{props.address}</p>
                </div>
                <div className='price'>
                  <p style={{color:'grey', fontWeight:500, margin:0}}>Starts from</p>
                  <p className='rate'>₹ {props.rate}<span className='pmonth'>/mo*</span></p>
                </div>
            </div>
            <div className='align-cont'>
              <div className='distance'>
                <LocationOnOutlinedIcon/>
                <p>{props.distance}</p>
                </div>
                <div className='direction'>
                <OutboundOutlinedIcon />
                <p >View Directions</p>
                </div>
            </div>
            <div className="facilites">
              <p><span className='facilitiy-heading'>Equipped</span> with</p>
              
              <ShowerOutlinedIcon className='icon-circle'/>
              <p style={{paddingLeft:'5px'}}>Attached Washroom</p>
              <ChairAltIcon className='icon-circle'/>
              <p style={{paddingLeft:'5px'}}>Study Table</p>
            </div>
            <div className="details">
              <img src={props.genderImg} className='gender-icon' alt="" srcset="" />
              <p>{props.gender}</p>
              <div className='separator '></div>
              <img src={occupancy} className='occupancy-icon' alt="" />
              <p>Single, Double, Triple</p>
            </div>
            <div className="align-cont">
              <button className='card-btn1'>SCHEDULE A VISIT</button>
              <button className='card-btn2'>REQUEST A CALLBACK</button>
            </div>
        </div>
    </div>
  )
}
