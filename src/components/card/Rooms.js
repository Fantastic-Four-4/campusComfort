import React from 'react';
import Cards from './Cards';
import dummyimage from '../../assets/dummy.jpg';
import dummy2 from '../../assets/dummy2.webp';
import femaleImg from '../../assets/female-listing.png';
import maleImg from '../../assets/male-listing.png';
export default function Rooms() {
  return (
    <div className='room-container'>
      <Cards hostelImg={dummyimage} heading="Coseza House" address="Annapurna Nagar" rate="2000" distance="0.5 km from Sanjivani College of Engineering" genderImg={femaleImg} gender="Female" />
      <Cards hostelImg={dummy2} heading="Coseza House" address="Annapurna Nagar" rate="2000" distance="0.5 km from Sanjivani College of Engineering" genderImg={maleImg} gender="Male" />
      <Cards hostelImg={dummy2} heading="Coseza House" address="Annapurna Nagar" rate="2000" distance="0.5 km from Sanjivani College of Engineering" genderImg={maleImg} gender="Male" />
      <Cards hostelImg={dummy2} heading="Coseza House" address="Annapurna Nagar" rate="2000" distance="0.5 km from Sanjivani College of Engineering" genderImg={maleImg} gender="Male" />
    </div>
  )
}
