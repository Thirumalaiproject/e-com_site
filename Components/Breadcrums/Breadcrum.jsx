import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'
 
const    Breadcrum = (props) => {
const {product} = props;

if (!product) {
  return null; // Handle the case where product is undefined
}

  return (
    <div className='breadcrum'>
     {/* Home <img  src={arrow_icon} alt=""/> SHOP  <img src={arrow_icon} alt=""/> {product.category  } <img src={arrow_icon} alt="" /> {product.name}    */}
     Home <img src={arrow_icon} alt=""/> SHOP <img src={arrow_icon} alt=""/> {product.category} <img src={arrow_icon} alt=""/> {product.name}
    </div>
  )
}
export default Breadcrum

   

// import React from 'react';
// import PropTypes from 'prop-types';
// import './Breadcrums.css';
// import arrow_icon from '../Assets/breadcrum_arrow.png';

// const Breadcrums = ({ product }) => {
//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className='breadcrum'>
//       Home <img src={arrow_icon} alt="arrow" /> SHOP <img src={arrow_icon} alt="arrow" /> {product.category} <img src={arrow_icon} alt="arrow" /> {product.name}
//     </div>
//   );
// };

// Breadcrums.propTypes = {
//   product: PropTypes.shape({
//     category: PropTypes.string,
//     name: PropTypes.string,
//   }),
// };

// Breadcrums.defaultProps = {
//   product: null,
// };

// export default Breadcrums;
