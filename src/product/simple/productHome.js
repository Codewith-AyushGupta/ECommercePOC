import React from 'react'
import product from './productDesc.json'
import { Helmet } from 'react-helmet'
import MediaOne from '../Media/Media-One'
import DetailOne from '..//detail/detail-one'
import Data from './ProductData.json'
import DescOne from '..//desc/decs-one';
function ProductHome() {
    // const data = ReactDOM.createRoot(document.getElementById('innserRoot'))
  return (
    <>
      <Helmet>
        <title>Product Detail Page</title>
      </Helmet>
      <div className='page-content mb-10 pb-6' >
                        <div className="container vertical">
                            <div className="product product-single row mb-2">
                                <div className="col-md-6 sticky-sidebar-wrapper">
                                    <MediaOne product={ product[0] } />
                                </div>

                                <div className="col-md-6">
                                    <DetailOne data={ Data } />
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
