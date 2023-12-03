import { Helmet } from 'react-helmet-async';

import { ProductsView } from 'src/sections/products/view';

import Card from './Cards';
// ----------------------------------------------------------------------

export default function ProductsPage() {
  return (
    <>
      <Helmet>
        <title> Products | CampusComforts </title>
      </Helmet>

      <ProductsView />
      {/* <Card address="Yeola" distance="20km" rate="2000" hostelImg="../../public/assets/images/products/product_1.jpg" gender="female" genderImg="../../public/assets/images/products/product_1.jpg" heading="New Hostel"/> */}
    </>
  );
}
