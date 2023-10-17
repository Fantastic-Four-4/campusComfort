import { useParams } from "react-router-dom";
import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel'
//import Item from './Item';
// import img1 from '../assets/Web_Banner_1_Desktop.webp';
// import img2 from '../assets/Web_Banner_2_Desktop.webp';
// import img3 from '../assets/Web_Banner_3_Desktop.webp';
import img1 from "/assets/images/products/product_1.jpg"
import img2 from "/assets/images/products/product_2.jpg"
import img3 from "/assets/images/products/product_3.jpg"
import { Container, Grid, Paper, Box } from '@mui/material'

// import TextField from '@mui/material';
// import Button from '@mui/material';
// import { makeStyles } from '@mui/material';

const SingleHostel = () => {
    const [clicked, setClicked] = useState(0)
    const { hostelId } = useParams();
    const Slider = [
        {
            "id": 1,
            "image": img1
        },
        {
            "id": 2,
            "image": img2
        },
        {
            "id": 3,
            "image": img3
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

    // const useStyles = makeStyles((theme) => ({
    //     formContainer: {
    //       border: '1px solid #ccc',
    //       borderRadius: '4px',
    //       padding: '20px',
    //       width: '300px', // or your desired width
    //       margin: 'auto', // center the form horizontally
    //     },
    //     formElement: {
    //       marginBottom: theme.spacing(2), // space out the form elements
    //     },
    //   }));
      

    // function SheduleVisitContent() {
    //     const classes = useStyles();
    //     return (
    //         <div className={classes.formContainer}>
    //   <form noValidate autoComplete="off">
    //     <TextField
    //       className={classes.formElement}
    //       label="Name"
    //       variant="outlined"
    //       fullWidth
    //     />
    //     <TextField
    //       className={classes.formElement}
    //       label="Mobile Number"
    //       variant="outlined"
    //       fullWidth
    //     />
    //     <Button
    //       className={classes.formElement}
    //       variant="contained"
    //       color="primary"
    //       type="submit"
    //     >
    //       Schedule a Visit
    //     </Button>
    //   </form>
    //   </div>
    //     )
    // }

    return (

        <Grid container spacing={10}>
            <Grid item xs={12} sm={6} md={6}>
                <Carousel>
                    {Slider.map(item => {
                        console.log(item.image);
                        console.log(item.id);
                        return <Item key={item.id} item={item} />;
                    })}
                </Carousel>
            </Grid>

            <Grid item xs={12} sm={5} md={5}>
                <Box display="flex" gap={2}>
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
                {/* {clicked === 0? <SheduleVisitContent/>: <h1>Shut up</h1>} */}
            </Grid>
        </Grid>
    );
}





//export default Example;
// const SingleHostel = () => {
//     const {hostelId} = useParams();
//     return (
//         <div>{hostelId}</div>
//     )
// }

export { SingleHostel };