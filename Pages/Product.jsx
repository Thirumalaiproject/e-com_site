import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';

import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import DescriptionBox from '../Components/DiscriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const  Product = () => {
  const {all_product}=useContext(ShopContext)
  const {productId}=useParams();
  const product =all_product.find((e)=>e.id === Number(productId));
  if (!product) {
    return <div>Product not found</div>; // Handle case where product is undefined
  }
  return (
    <div>
      <Breadcrum  product={product}/>
      <ProductDisplay product={product} />
      <DescriptionBox/>
      <RelatedProducts />
    
    </div>
  )
}
export default Product



// import React, { useContext } from 'react';
// import { ShopContext } from '../Context/ShopContext';
// import { useParams } from 'react-router-dom';
// import Breadcrums from '../Components/Breadcrums/Breadcrums';
// import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';

// const Product = () => {
//   const { all_product } = useContext(ShopContext);
//   const { productId } = useParams();
//   const product = all_product.find((e) => e.id === Number(productId));

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <Breadcrums product={product} />
//       <ProductDisplay product={product} />
//     </div>
//   );
// };

// export default Product;
