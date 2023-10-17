import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Item from './Item';
import img1 from '../../assets/Web_Banner_1_Desktop.webp';
import img2 from '../../assets/Web_Banner_2_Desktop.webp';
import img3 from '../../assets/Web_Banner_3_Desktop.webp';
function Example()
{
    const Slider = [
        {
            "id":1,
            "image": img1
        },
        {
            "id":2,
            "image": img2
        },
        {
            "id":3,
            "image": img3
        }
    ]

    return (
        <Carousel>
            {
                Slider.map( item => {
                    console.log(item.image)
                    console.log(item.id)
                return<Item key={item.id} item={item} /> })
            }
        </Carousel>
    )
}

export default Example;