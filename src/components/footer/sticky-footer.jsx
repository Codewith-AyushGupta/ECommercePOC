import React, { useEffect } from 'react'
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
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="62px"
                    height="62px"
                    viewBox="0 0 100 100"
                    xmlSpace="preserve"
                    className="icon"
                    style={{ width: "39px", height: "29px" }}
                >
                    <path d="M84.286,82.529c-6.099,0-11.062-4.963-11.062-11.063c0-0.687,0.07-1.394,0.207-2.099c-0.136-2.246-1.932-3.961-4.088-3.961 c-1.933,0-3.626,1.375-4.027,3.266c0.219,1.082,0.324,1.963,0.324,2.794c0,6.101-4.961,11.063-11.061,11.063 c-6.098,0-11.06-4.963-11.06-11.063c0-6.097,4.962-11.059,11.06-11.059c3.6,0,6.988,1.771,9.064,4.741l0.152,0.217 c0.041,0.059,0.107,0.096,0.179,0.099c0.003,0,0.009,0.001,0.011,0.001c0.066,0,0.133-0.03,0.178-0.081l0.172-0.2 c1.267-1.461,3.093-2.297,5.008-2.297c1.974,0,3.833,0.874,5.102,2.395l0.177,0.213c0.043,0.053,0.108,0.084,0.179,0.084 c0.002,0,0.007-0.002,0.01-0.002c0.072-0.002,0.139-0.039,0.18-0.1l0.155-0.227c2.069-3.033,5.489-4.843,9.141-4.843 c6.098,0,11.06,4.962,11.06,11.059C95.346,77.566,90.384,82.529,84.286,82.529z M54.58,62.926c-4.71,0-8.541,3.831-8.541,8.54 c0,4.712,3.831,8.544,8.541,8.544c4.709,0,8.543-3.832,8.543-8.544c0-0.665-0.088-1.354-0.259-2.046l-0.04-0.158 c-0.014-0.061-0.051-0.107-0.098-0.138l0.003-0.069c0.001-0.01-0.005-0.124-0.007-0.135C61.574,65.313,58.305,62.926,54.58,62.926z M84.286,62.926c-4.71,0-8.542,3.831-8.542,8.54c0,4.712,3.83,8.544,8.541,8.544c4.709,0,8.541-3.832,8.541-8.544 C92.826,66.757,88.996,62.926,84.286,62.926z"></path>
                    <rect x="19.478" y="45.364" width="58.937" height="2.52"></rect>
                    <rect x="39.083" y="54.756" width="39.331" height="2.519"></rect>
                    <rect x="39.083" y="63.35" width="3.632" height="2.52"></rect>
                    <rect x="19.478" y="71.946" width="19.862" height="2.519"></rect>
                    <path d="M30.395,41.318l-6.58-8.65c-0.043-0.059-0.112-0.092-0.184-0.092c-0.025,0-0.05,0.005-0.075,0.013 c-0.094,0.032-0.158,0.12-0.158,0.22v8.51h-2.087V28.896h2.12l6.768,8.877c0.044,0.059,0.112,0.092,0.184,0.092 c0.026,0,0.051-0.004,0.076-0.012c0.094-0.031,0.157-0.121,0.157-0.221v-8.736h2.089v12.422H30.395z"></path>
                    <path d="M36.859,41.318V28.896h8.709v1.767h-6.391c-0.127,0-0.232,0.104-0.232,0.233v3.154c0,0.129,0.105,0.232,0.232,0.232h5.724 v1.651h-5.724c-0.127,0-0.232,0.104-0.232,0.232v3.174c0,0.128,0.105,0.231,0.232,0.231h6.602v1.746H36.859z"></path>
                    <path d="M60.144,41.318l-3.011-9.569c-0.031-0.097-0.122-0.163-0.221-0.163l0,0c-0.104,0-0.192,0.066-0.222,0.163l-2.995,9.569 h-1.573l-4.338-12.422h2.287l2.729,7.953c0.031,0.095,0.119,0.158,0.219,0.158c0,0,0.002,0,0.004,0 c0.101-0.002,0.189-0.069,0.219-0.164l2.453-7.947h2.453l2.432,7.946c0.028,0.096,0.117,0.162,0.217,0.165c0.002,0,0.004,0,0.005,0 c0.099,0,0.188-0.063,0.22-0.157l2.75-7.954h2.283l-4.334,12.422H60.144z"></path>
                    <path d="M72.896,41.472c-1.855,0-3.564-0.655-5.084-1.948l1.222-1.499c1.384,1.129,2.7,1.701,3.92,1.701 c0.642,0,1.162-0.149,1.549-0.441c0.42-0.317,0.643-0.769,0.643-1.304c0-0.539-0.236-0.992-0.683-1.309 c-0.377-0.27-1.066-0.525-2.107-0.781c-1.478-0.35-2.56-0.805-3.223-1.351c-0.607-0.499-0.917-1.319-0.917-2.439 c0-1.126,0.388-1.966,1.187-2.57c0.824-0.622,1.879-0.937,3.134-0.937c0.838,0,1.688,0.145,2.519,0.431 c0.697,0.239,1.324,0.565,1.871,0.968l-1.016,1.465c-1.115-0.754-2.281-1.137-3.471-1.137c-0.597,0-1.084,0.152-1.449,0.451 c-0.391,0.323-0.588,0.752-0.588,1.273c0,0.536,0.248,0.982,0.721,1.29c0.402,0.263,1.214,0.538,2.553,0.867 c1.186,0.293,2.113,0.73,2.754,1.302c0.598,0.533,0.9,1.338,0.9,2.393c0,1.063-0.387,1.9-1.183,2.564 C75.338,41.131,74.243,41.472,72.896,41.472z"></path>
                    <g>
                        <path d="M10.809,78.84c-1.695,0-3.052-1.46-3.052-3.157V23.555c0-1.696,1.356-3.154,3.052-3.154h72.629 c1.7,0,3.107,1.458,3.107,3.154v32.328h3.104V23.555c0-3.395-2.814-6.084-6.211-6.084H10.809c-3.393,0-6.154,2.689-6.154,6.084 v52.128c0,3.396,2.762,6.087,6.154,6.087h28.976v-2.93H10.809z"></path>
                    </g>
                </svg>
                <span>Blogs</span>
            </ALink>
            <ALink href="/pages/account" className="sticky-link">
                <i className="d-icon-user"></i>
                <span>Account</span>
            </ALink>
            <FooterSearchBox />
        </div>
    );
}

export default StickyFooter