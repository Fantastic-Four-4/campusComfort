import { useParams } from "react-router-dom";
import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";

import {
  Container,
  Grid,
  Paper,
  Box,
  Typography,
  Chip,
  StepLabel,
} from "@mui/material";
import { Button } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import { MapComponent } from "./MapComponent";
import "../card.css";
import axios from "axios";
import Modal from "react-modal";
import { useGetMyHostelQuery } from "../../store/store";
import { message } from "antd";
// import { MapComponent } from "src/components/map/MapComponent";

// const hostelData = {
//   created_by: "user123",
//   owner_name: "John Doe",
//   hostel_name: "Serene Residency",
//   hostel_description: "A peaceful and well-furnished hostel for students.",
//   hostel_phone: 1234567890,
//   hostel_rating: 4.5,
//   hostel_email: "serene@example.com",
//   hostel_address: "123 Main Street",
//   hostel_state: "California",
//   hostel_city: "San Francisco",
//   hostel_zip_code: "12345",
//   hostel_coordinates: {
//     lat: 37.7749,
//     long: -122.4194,
//   },
//   hostel_features: {
//     single_bed: true,
//     double_bed: false,
//     attach_washroom: true,
//     study_table: true,
//     hot_water: false,
//     drinking_water: true,
//   },
//   multi_img: [
//     "https://siddhisaree.s3.amazonaws.com/suravanshi.jpg",
//     "https://th.bing.com/th/id/OIP.SNRWR7GfIRZZi7VnK5oLLgHaEK?rs=1&pid=ImgDetMain",
//   ],
//   hostel_other_feature: "24/7 Security",
//   allowed_for: "MIXED",
//   hostel_monthly_price: "500",
//   hostel_img: "https://siddhisaree.s3.amazonaws.com/suravanshi.jpg",
//   distance_from_college: 300,
// };

const SingleHostel = () => {
  const { id } = useParams();
  const {
    data: hostelData,
    isLoading: hostel_loading,
    isFetching: fetch,
    error: error,
  } = useGetMyHostelQuery({ id });
  const [modelImg, setModelImg] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = (data) => {
    setModelImg(data);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModelImg();

    setModalIsOpen(false);
  };
  const [clicked, setClicked] = useState(0);

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const YourRatingComponent = ({ rating }) => {
    return (
      <div
        style={{
          fontSize: "1.2rem",
          padding: "0.3rem",
          backgroundColor: "lightyellow",
          borderRadius: "1rem",
          width: "4rem",
          border: "solid 2px yellow",
        }}
      >
        <div className="star-rating"></div>
        <span style={{ color: "#ffd700" }}> {rating}</span>
      </div>
    );
  };

  const checkoutHandler = async (amount) => {
    try {
      const {
        data: { key },
      } = await axios.get("http://www.localhost:4000/api/getkey");

      const {
        data: { order },
      } = await axios.post("http://localhost:4000/api/checkout", {
        amount,
      });

      const options = {
        key,
        amount: order.amount,
        currency: "INR",
        name: "CampusComforts",
        description: "Tutorial of RazorPay",
        image: "https://avatars.githubusercontent.com/u/25058652?v=4",
        order_id: order.id,
        callback_url: "http://localhost:4000/api/paymentverification",
        prefill: {
          name: "Harshalini Pandhare",
          email: "harshalini@gmail.com",
          contact: "9999999999",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#121212",
        },
      };
      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.log("lion", error);
    }
  };
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  // function getHostelDetails(hostels, _id) {
  //     return hostels.find((h) => h.id == _id);
  // }

  // const thisHostel = getHostelDetails(hostel, _id);
  //const { name, address, gender, price, distance, eqp, beds } = thisHostel || {};
  const Slider = [
    {
      id: 1,
      image:
        "https://th.bing.com/th/id/OIP.SNRWR7GfIRZZi7VnK5oLLgHaEK?rs=1&pid=ImgDetMain",
    },
    {
      id: 2,
      image:
        "https://th.bing.com/th/id/OIP.SNRWR7GfIRZZi7VnK5oLLgHaEK?rs=1&pid=ImgDetMain",
    },
    {
      id: 3,
      image:
        "https://th.bing.com/th/id/OIP.SNRWR7GfIRZZi7VnK5oLLgHaEK?rs=1&pid=ImgDetMain",
    },
  ];
  function Item(props) {
    const { item } = props;
    console.log("Image Path:", item.image);

    return (
      <Paper>
        <img src={item.image} alt="slide1" className="craw" />
      </Paper>
    );
  }

  function SheduleVisitContent() {
    return (
      <div className="row">
        <div className="col-md-12">
          <form onSubmit={(e) => {
            e.preventDefault()
            message.success(`Phone No ${hostelData?.hostel_phone}`)}}>
            <fieldset>
              <legend>
                <span className="number">1</span> Your Info
              </legend>

              <label for="name">Name:</label>
              <input style={{width:"100%",height:"30px"}} required type="text" id="name" name="user_name" />

              <label for="email">Phone Number:</label>
              <input style={{width:"100%",height:"30px",marginBottom:"30px"}}  required type="text" id="mail" name="user_email" />

              <button type="submit" className="call-btn">
                Get Phone No
              </button>
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
              <legend>
                <span className="number">1</span> Your Info
              </legend>

              <label for="name">Name:</label>
              <input type="text" id="name" name="user_name" />

              <label for="email">Phone Number:</label>
              <input type="text" id="mail" name="user_email" />

              <label for="code">Enter Referral Code(Optional):</label>
              <input type="text" id="code" name="user_code" />
            </fieldset>
            <button type="submit" className="reserve-btn">
              Reserve Now
            </button>
          </form>
        </div>
      </div>
    );
  }

  const list = (anchor) => (
    <Box
      sx={{ width: 500 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div>
        <MapComponent address={"Sanjivani College Kopargaon"} />
      </div>
    </Box>
  );

  return (
    <div>
      <Grid container spacing={10}>
        <Grid item xs={12} sm={6} md={6}>
          <Box>
            <Typography variant="h3">
              {hostelData?.hostel_name}
              <Chip
                style={{
                  marginLeft: "1.5rem",
                  fontSize: "1.1rem",
                  padding: "0.3rem",
                  color: "rgb(96, 195, 173)",
                  backgroundColor: "#fff",
                  border: "solid 2px rgb(96, 195, 173)",
                }}
                label={hostelData?.allowed_for}
              ></Chip>
            </Typography>
            <Typography>
              {hostelData?.hostel_address}, {hostelData?.hostel_city},{" "}
              {hostelData?.hostel_state} - {hostelData?.hostel_zip_code}
            </Typography>
            <YourRatingComponent rating={hostelData?.hostel_rating} />
            <Typography>By {hostelData?.owner_name} </Typography>
          </Box>
          {/* <Carousel style={{
                        height: "800px",
                        width: "1000px"
                    }}> */}
          {/* {Slider.map(item => {
                            return <Item key={item.id} item={item} />;
                        })} */}
          {/* <Paper > */}
          <img style={{width:"400px"}} src={hostelData?.hostel_img} alt="slide1" className="craw" />
          {/* </Paper> */}
          {/* </Carousel> */}
          <Box>
            <Typography>{hostelData?.hostel_description}</Typography>
            <Button onClick={() => checkoutHandler(2000)}>Pay 1000 Rs</Button>
            <Typography variant="h4">
              Starts from Rs.
              <strong style={{ fontSize: "2.5rem" }}>
                {hostelData?.hostel_monthly_price}/
              </strong>
              mo
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={5} md={5}>
          <div>
            <Chip
              label={`Distance from college: ${hostelData?.distance_from_college}m`}
              style={{
                marginLeft: "1.5rem",
                fontSize: "1.1rem",
                padding: "0.3rem",
                color: "rgb(0, 151, 118)",
                backgroundColor: "#fff",
                border: "solid 2px rgb(96, 195, 173)",
              }}
            />
            {["right"].map((anchor) => (
              <React.Fragment key={anchor}>
                <Box>

                <Button
                  onClick={toggleDrawer(anchor, true)}
                  style={{
                      // marginLeft: "19rem",
                      marginTop: "2rem",
                      marginBottom: "2rem",
                    }}
                    >
                  Show Map
                </Button>
                    </Box>
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
          <Box display="flex" gap={2} style={{ position: "sticky" }}>
            <Box flex={1}>
              <button
                className="card-btn1"
                type="button"
                onClick={() => setClicked(0)}
              >
                SCHEDULE A GET PHONE NO.
              </button>
            </Box>
            <Box flex={1}>
              <button
                className="card-btn2"
                type="button"
                onClick={() => setClicked(1)}
              >
                REQUEST A CALLBACK
              </button>
            </Box>
          </Box>
          {clicked === 0 ? <SheduleVisitContent /> : <ReserveNow />}
        </Grid>
      </Grid>
      <div>
        <Grid>
          <Grid item sm={5} md={5}>
            <Typography variant="h3">Features</Typography>
            <Box display="flex" flexDirection={"column"}>
              <Box flex={1}>
                {/* <Typography variant="h4">Amenities</Typography> */}
                {hostelData?.hostel_features &&
                  Object.entries(hostelData.hostel_features).map(
                    ([feature, value]) => {
                      if (value) {
                        return (
                          <Chip
                            key={feature}
                            label={feature}
                            style={{
                              marginLeft: "1.5rem",
                              fontSize: "1.1rem",
                              padding: "0.3rem",
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
              </Box>
            </Box>
          </Grid>
          <Grid item sm={5} md={5}>
            <Box display="flex" flexDirection={"column"}>
              <Box flex={1}>
                <Typography variant="h4">Other Features</Typography>

                <Chip
                  label={hostelData?.hostel_other_feature}
                  style={{
                    marginLeft: "1.5rem",
                    fontSize: "1.1rem",
                    padding: "0.3rem",
                    color: "rgb(0, 151, 118)",
                    backgroundColor: "#fff",
                    border: "solid 2px rgb(96, 195, 173)",
                  }}
                ></Chip>
              </Box>
            </Box>
          </Grid>
          <Box sx={{margin:"20px 0px",display:"flex",flexWrap:"wrap"}}>
          {hostelData?.multi_img?.map((item) => (
              <img
                onClick={() => openModal(item)}
                src={item}
                style={{ width: "200px",margin:"10px" }}
                alt="slide1"
                className="craw"
              />
              ))}
              </Box>

          <Modal
            className="model-custom-img"
            style={{
              overlay: {
                backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the overlay background color and transparency
                zIndex: 9999, // Set the z-index
              },
              content: {
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                maxWidth: "80%", // Adjust the maximum width of the modal
                maxHeight: "80vh", // Adjust the maximum height of the modal
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Add box shadow for a visual effect
                borderRadius: "8px", // Add border-radius for rounded corners
              },
            }}
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Enlarged Image"
          >
            <img
              src={modelImg}
              alt="slide1"
              className="craw enlarged"
              onClick={closeModal}
            />
          </Modal>
        </Grid>
      </div>
    </div>
  );
};

export { SingleHostel };
