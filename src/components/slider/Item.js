import { Paper } from '@mui/material'

function Item(props)
{
    const {item} = props;
    console.log('Image Path:', item.image);

    return (
        <Paper >
           <img src={item.image} alt="slide1"  className='craw' />
        </Paper>
    )
}

export default Item;