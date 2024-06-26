import React , {useEffect} from 'react'
import ALink from '../features/custom-link';
import FooterSearchBox from '..//partial/Footer-search-box'
function StickyFooter() {
    // let tmp = 0;
    // useEffect(() => {
    //     window.addEventListener('scroll', stickyFooterHandler);

    //     return () => {
    //         window.removeEventListener('scroll', stickyFooterHandler);
    //     };
    // }, []);

    // const stickyFooterHandler = (e) => {
    //     let top = document.querySelector('.page-content') ? document.querySelector('.page-content').offsetTop + document.querySelector('header').offsetHeight + 100 : 600;
    //     let stickyFooter = document.querySelector('.sticky-footer.sticky-content');
    //     let height = 0;

    //     if (stickyFooter) {
    //         height = stickyFooter.offsetHeight;
    //     }

    //     if (window.pageYOffset >= top && window.innerWidth < 768 && e.currentTarget.scrollY >= tmp) {
    //         if (stickyFooter) {
    //             stickyFooter.classList.add('fixed');
    //             stickyFooter.style.marginBottom = "0";
    //             if (!document.querySelector('.sticky-content-wrapper')) {
    //                 let newNode = document.createElement("div");
    //                 newNode.className = "sticky-content-wrapper";
    //                 stickyFooter.parentNode.insertBefore(newNode, stickyFooter);
    //                 document.querySelector('.sticky-content-wrapper').appendChild(stickyFooter);
    //                 document.querySelector('.sticky-content-wrapper').style.height = height + "px";
    //             }

    //             if (!document.querySelector('.sticky-content-wrapper').style.height) {
    //                 document.querySelector('.sticky-content-wrapper').style.height = height + "px";
    //             }
    //         }
    //     } else {
    //         if (stickyFooter) {
    //             stickyFooter.classList.remove('fixed');
    //             stickyFooter.style.marginBottom = `-${height}px`;
    //         }

    //         if (document.querySelector('.sticky-content-wrapper')) {
    //             document.querySelector('.sticky-content-wrapper').removeAttribute("style");
    //         }
    //     }

    //     if (window.innerWidth > 767 && document.querySelector('.sticky-content-wrapper')) {
    //         document.querySelector('.sticky-content-wrapper').style.height = 'auto';
    //     }

    //     tmp = e.currentTarget.scrollY;
    // };

    return (
        <div className="sticky-footer sticky-content fix-bottom">
            <ALink href="/" className="sticky-link active">
                <i className="d-icon-home"></i>
                <span>Home</span>
            </ALink>
            <ALink href="/shop" className="sticky-link">
                <i className="d-icon-volume"></i>
                <span>Categories</span>
            </ALink>
            <ALink href="/pages/blogs" className="sticky-link">
                <i className="d-icon-layer"></i>
                <span>Blogs</span>
            </ALink>
            {/* <ALink href="/pages/account" className="sticky-link">
                <i className="d-icon-user"></i>
                <span>Account</span>
            </ALink> */}
            <ALink href="/pages/cart" className="sticky-link">
                <i className="d-icon-bag"></i>
                <span>Cart</span>
            </ALink>
             {/* <a href="#" className="cart-toggle label-block link" onClick={showCartMenu}>
                <div className="cart-label d-lg-show">
                    <span className="cart-name">Shopping Cart:</span>
                    <span className="cart-price">&euro;{toDecimal(getTotalPrice(cartList))}</span>
                </div>
                <i className="d-icon-bag"><span className="cart-count">{getCartCount(cartList)}</span></i>
            </a> */}
            <FooterSearchBox />
        </div>
    );
}

export default StickyFooter