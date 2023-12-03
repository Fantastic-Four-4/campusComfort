import { useParams } from "react-router-dom";
import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel'
// import img1 from ""
// import img2 from "/assets/images/products/product_3.jpg"
// import img3 from "/assets/images/products/product_3.jpg"
import { Container, Grid, Paper, Box, Typography, Chip, StepLabel } from '@mui/material'
import { Button } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import { MapComponent } from "./MapComponent";
// import { MapComponent } from "src/components/map/MapComponent";
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
  ]
const SingleHostel = () => {
    const [clicked, setClicked] = useState(0)
    const { hostelId } = useParams();

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

    function getHostelDetails(hostels, hostelId) {
        return hostels.find((h) => h.id == hostelId);
    }

    const thisHostel = getHostelDetails(hostel, hostelId);
    const { name, address, gender, price, distance, eqp, beds } = thisHostel || {};
    const Slider = [
        {
            "id": 1,
            "image": "https://th.bing.com/th/id/OIP.SNRWR7GfIRZZi7VnK5oLLgHaEK?rs=1&pid=ImgDetMain"
        },
        {
            "id": 2,
            "image": "https://th.bing.com/th/id/OIP.SNRWR7GfIRZZi7VnK5oLLgHaEK?rs=1&pid=ImgDetMain"
        },
        {
            "id": 3,
            "image": "https://th.bing.com/th/id/OIP.SNRWR7GfIRZZi7VnK5oLLgHaEK?rs=1&pid=ImgDetMain"
        }
    ]

    function Item(props) {
        const { item } = props;
        console.log('Image Path:', item.image);

        return (
            <Paper >
                <img src={item.image} alt="slide1" className='craw' />
            </Paper>
        )
    }


    function SheduleVisitContent() {
        console.log(hostelId);
        console.log(hostel);
        console.log(thisHostel);
        return (
            <div className="row">
                <div className="col-md-12">
                    <form onSubmit={() => alert("Details Submitted")}>
                        <fieldset>

                            <legend><span className="number">1</span> Your Info</legend>

                            <label for="name">Name:</label>
                            <input type="text" id="name" name="user_name" />

                            <label for="email">Phone Number:</label>
                            <input type="text" id="mail" name="user_email" />

                            <button type="submit" className="call-btn">Schedule Call</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        );
    }

    function ReserveNow() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <form onSubmit={() => alert("Details Submitted")}>
                        <fieldset>

                            <legend><span className="number">1</span> Your Info</legend>

                            <label for="name">Name:</label>
                            <input type="text" id="name" name="user_name" />

                            <label for="email">Phone Number:</label>
                            <input type="text" id="mail" name="user_email" />

                            <label for="code">Enter Referral Code(Optional):</label>
                            <input type="text" id="code" name="user_code" />

                        </fieldset>


                        <button type="submit" className="reserve-btn">Reserve Now</button>

                    </form>
                </div>
            </div>
        )
    }

    const list = (anchor) => (
        <Box
            sx={{ width: 500 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <div>
        <MapComponent address={address} />
      </div>
        </Box>
    );

    return (

        <div>
            <Grid container spacing={10}>
                <Grid item xs={12} sm={6} md={6}>
                    <Box>
                        <Typography variant="h3">{name}</Typography>
                        <Typography>{address}</Typography>
                    </Box>
                    <Carousel>
                        {Slider.map(item => {
                            return <Item key={item.id} item={item} />;
                        })}
                    </Carousel>
                </Grid>

                <Grid item xs={12} sm={5} md={5}>
                    <div>
                        {['right'].map((anchor) => (
                            <React.Fragment key={anchor}>
                                <Button onClick={toggleDrawer(anchor, true)}
                                style={{
                                    marginLeft: "19rem",
                                    marginTop: "3rem"
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
                    </div>
                    <Box display="flex" gap={2}
                        style={{ marginTop: "1rem" }}
                    >
                        <Box flex={1}>
                            <button className='card-btn1' type='button'
                                onClick={() => setClicked(0)}
                            >SCHEDULE A VISIT</button>
                        </Box>
                        <Box flex={1}>
                            <button className='card-btn2' type='button'
                                onClick={() => setClicked(1)}
                            >REQUEST A CALLBACK</button>
                        </Box>
                    </Box>
                    {clicked === 0 ? <SheduleVisitContent /> : <ReserveNow />}
                </Grid>
            </Grid>
            <div>
                <Grid container spacing={10}>
                    <Grid item sm={6} md={6}>
                        <Typography variant="h4">Starts from Rs.
                            <strong style={{ fontSize: "2.5rem" }}>{price}/</strong>
                            mo
                        </Typography>
                    </Grid>
                    <Grid item sm={5} md={5}>
                        <Typography variant="h3">Features</Typography>
                        <Box display="flex" flexDirection={"column"}>
                            <Box flex={1}>
                                <Typography variant="h4">Amenities</Typography>
                                {eqp?.map((e) => (<Chip label={e} style={{ fontSize: "1rem" }} />))}
                            </Box>
                            <Box flex={1}>
                                <Typography variant="h4">Beds</Typography>
                                <Chip label={beds} style={{ fontSize: "1rem" }} />
                            </Box>
                            <Box flex={1}>
                                <Typography variant="h4">Suitable For</Typography>
                                <Chip label={gender} style={{ fontSize: "1rem" }} />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}


export { SingleHostel };