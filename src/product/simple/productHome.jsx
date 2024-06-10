import React, { useEffect, useState } from 'react'
import product from './productDesc.json'
import product2 from './productDesc2.json'
import { Helmet } from 'react-helmet'
import MediaOne from '../Media/Media-One'
import DetailOne from '../detail/detail-one'
// import Data from './ProductData.json'
// import DescOne from '../desc/decs-one';
function ProductHome(Data) {
  // debugger;
  // const Data = {props};
  // const data = ReactDOM.createRoot(document.getElementById('innserRoot'))
  const [flag, setFlag] = useState(false)
  useEffect(() => {
    var location = (window.location.pathname).split('/')
      if (location.includes('sample')) {
        setFlag(true)
      }
  },[])
  return (
    <>
      <Helmet>
        <title>Product Detail Page</title>
      </Helmet>
      <div className='page-content mb-10 pb-6' >
        <div className="container vertical">
          <div className="product product-single row mb-2">
            <div className="col-md-6 sticky-sidebar-wrapper">
              {flag ? <MediaOne product={product[0]} /> : <MediaOne product={product2[0]} />}
            </div>

            <div className="col-md-6">
              <DetailOne data={Data} />
            </div>
          </div>

          {/* <DescOne product={ Data} /> */}

          {/* <RelatedProducts products={ related } /> */}
        </div>
      </div>
    </>
  )
}

export default ProductHome
