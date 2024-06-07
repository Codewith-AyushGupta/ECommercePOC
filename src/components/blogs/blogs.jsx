import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import OwlCarousel from '../../product/owl-carousel';
import Breadcrumb from '../partial/Breadcrumb';
import PostFour from './post/post-four';
import PostFive from './post/PostFive';
import ElementsList  from './ElementList/ElementList';
import { mainSlider5 , mainSlider13, mainSlider14} from '../../basePathLocation/data/carousel';
import BlogData from './data/blogData.json'

function BlogPosts () {
    // debugger;
    const posts = BlogData && BlogData.posts.data;
    const loading = false;
    return (
        <main className="main skeleton-body">
            <Helmet>
                <title>Riode React eCommerce Template | Blog</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - Blog</h1>

            <Breadcrumb subTitle="OUR BLOG" title="LIST" parentUrl="/Tag - list" />

            <div className="page-content">
                <section className="mt-10 pt-4 pb-10">
                    <div className="container">
                        <h2 className="title title-center">Default</h2>

                        <OwlCarousel adClass="owl-theme" options={ mainSlider13 }>
                            {
                                loading ?
                                    new Array( parseInt( 3 ) ).fill( 1 ).map( ( item, index ) => (
                                        <div key={ "Skeleton:" + index }>
                                            <div className="skel-post"></div>
                                        </div>
                                    ) ) :
                                    posts ?
                                        posts.length ?
                                            posts.slice( 12, 15 ).map( ( post, index ) => (
                                                <React.Fragment key={ "post-four" + index }>
                                                    <PostFour post={ post } isOriginal={ true } adClass="text-center" />
                                                </React.Fragment>
                                            ) ) :
                                            <div className="info-box with-icon"><p>No blogs were found matching your selection.</p></div>
                                        : ''
                            }
                        </OwlCarousel>
                    </div>
                </section>

                <section className="grey-section pt-10 pb-10">
                    <div className="container mt-4">
                        <h2 className="title title-center">List</h2>

                        <OwlCarousel adClass="owl-theme" options={ mainSlider14 }>
                            {
                                loading ?
                                    new Array( parseInt( 2 ) ).fill( 1 ).map( ( item, index ) => (
                                        <div key={ "Skeleton:" + index }>
                                            <div className="skel-post"></div>
                                        </div>
                                    ) ) :
                                    posts ?
                                        posts.length ?
                                            posts.slice( 13, 15 ).map( ( post, index ) => (
                                                <React.Fragment key={ "post-five" + index }>
                                                    <PostFive post={ post } />
                                                </React.Fragment>
                                            ) ) :
                                            <div className="info-box with-icon"><p>No blogs were found matching your selection.</p></div>
                                        : ''
                            }
                        </OwlCarousel>
                    </div>
                </section>
                <section className="grey-section pt-10 pb-10">
                    <div className="container mt-4">
                        <h2 className="title title-center">4 Columns</h2>

                        <OwlCarousel adClass="owl-theme" options={ mainSlider5 }>
                            {
                                loading ?
                                    new Array( parseInt( 3 ) ).fill( 1 ).map( ( item, index ) => (
                                        <div key={ "Skeleton:" + index }>
                                            <div className="skel-post"></div>
                                        </div>
                                    ) ) :
                                    posts ?
                                        posts.length ?
                                            posts.slice( 4, 8 ).map( ( post, index ) => (
                                                <React.Fragment key={ "post-four" + index }>
                                                    <PostFour post={ post } />
                                                </React.Fragment>
                                            ) ) :
                                            <div className="info-box with-icon"><p>No blogs were found matching your selection.</p></div>
                                        : ''
                            }
                        </OwlCarousel>
                    </div>
                </section>


                <ElementsList adClass="bg-white" />
            </div >
        </main >
    )
}

export default BlogPosts;