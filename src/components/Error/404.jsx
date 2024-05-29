import React from 'react'
import ALink from '../features/custom-link'
import { Helmet } from 'react-helmet'
import errorImg from './images/404.png'
function Error404() {
  return (
    <main className="main">
            <Helmet>
                <title>Page Not Found</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - 404</h1>

            <div className="page-content">
                <section
                    className="error-section d-flex flex-column justify-content-center align-items-center text-center pl-3 pr-3">
                    <h1 className="mb-2 ls-m">Error 404</h1>
                    <img src={errorImg} alt="error 404" width="609" height="131" />
                    <h4 className="mt-7 mb-0 ls-m text-uppercase">Ooopps! That page can’t be found.</h4>
                    <p className="text-grey font-primary ls-m">It looks like nothing was found at this location.</p>
                    <ALink href="/" className="btn btn-primary customAddBtnColor btn-rounded mb-4">Go home</ALink>
                </section>
            </div>
        </main >
  )
}

export default Error404
