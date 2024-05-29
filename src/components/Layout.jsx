import React, { Children, useEffect,useLayoutEffect } from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import StickyFooter from './footer/sticky-footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import 'react-image-lightbox/style.css';
import 'react-input-range/lib/css/index.css';
import { useLocation } from 'react-router-dom';
import ALink from './features/custom-link';
import MobileMenu from './partial/mobile-menu';
import  { showScrollTopHandler, scrollTopHandler, stickyHeaderHandler, stickyFooterHandler, resizeHandler } from '..//utils/index'
import { modalActions } from '../product/store/modalReducer';
import { connect } from 'react-redux';
function Layout({ children, closeQuickview }) {
    const location = useLocation();

    useLayoutEffect(() => {
        document.querySelector('body').classList.remove('loaded');
    }, [location.pathname]);
    useEffect( () => {
        window.addEventListener( 'scroll', showScrollTopHandler, true );
        window.addEventListener( 'scroll', stickyHeaderHandler, true );
        window.addEventListener( 'scroll', stickyFooterHandler, true );
        window.addEventListener( 'resize', stickyHeaderHandler );
        window.addEventListener( 'resize', stickyFooterHandler );
        window.addEventListener( 'resize', resizeHandler );

        return () => {
            window.removeEventListener( 'scroll', showScrollTopHandler, true );
            window.removeEventListener( 'scroll', stickyHeaderHandler, true );
            window.removeEventListener( 'scroll', stickyFooterHandler, true );
            window.removeEventListener( 'resize', stickyHeaderHandler );
            window.removeEventListener( 'resize', stickyFooterHandler );
            window.removeEventListener( 'resize', resizeHandler );
        }
    }, [] )
    useEffect( () => {
        // closeQuickview();

        let bodyClasses = [ ...document.querySelector( "body" ).classList ];
        for ( let i = 0; i < bodyClasses.length; i++ ) {
            document.querySelector( 'body' ).classList.remove( bodyClasses[ i ] );
        }

        setTimeout( () => {
            document.querySelector( 'body' ).classList.add( 'loaded' );
        }, 50 );
    } )

    return (
        <>
        <div className="page-wrapper">
            <Header/>
            { children }
            <Footer />
            <StickyFooter />
        </div>
        <ALink id="scroll-top" href="#" title="Top" role="button" className="scroll-top" onClick={ () => scrollTopHandler( false ) }><i className="d-icon-arrow-up"></i></ALink>
        <MobileMenu />
        <ToastContainer
                autoClose={ 3000 }
                duration={ 300 }
                newestOnTo={ true }
                className="toast-container"
                position="bottom-left"
                closeButton={ false }
                hideProgressBar={ true }
                newestOnTop={ true }
            />
        </>
    )
}

export default connect( null, { closeQuickview: modalActions.closeQuickview } )( Layout );
