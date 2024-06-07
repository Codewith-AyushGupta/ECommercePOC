import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import PostThree from './post/post-three';
import Pagination from '../features/pagination';
import BlogSidebar from './ElementList/blog-sidebar'
import ALink from '../features/custom-link';
import data from './data/blogData.json'
import Breadcrumb from '../partial/Breadcrumb';
function Listing () {
    // debugger;
    const showingCount = 1;
   
    const perPage = showingCount;
    const posts = data && data.posts.data;
    const totalPage = data ? parseInt( data.posts.total / perPage ) + ( data.posts.total % perPage ? 1 : 0 ) : 1;
    const loading = false;
    // alert('total Page',data.posts.total);

    return (
        <main className="main skeleton-body">
            <Helmet>
                <title>Riode React eCommerce Template | Blog Listing</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - Blog Listing</h1>

            {/* <nav className="breadcrumb-nav">
                <div className="container">
                    <ul className="breadcrumb">
                        <li><ALink href="/"><i className="d-icon-home"></i></ALink></li>
                        <li><ALink href="#" className="active">Blog</ALink></li>
                        <li>Listing</li>
                    </ul>
                </div>
            </nav> */}
            <Breadcrumb  subTitle="OUR BLOG" title="List" parentUrl="/" />

            <div className="page-content with-sidebar">
                <div className="container">
                    <div className="row gutter-lg">
                        <div className="col-lg-9">
                            <div className="posts">
                                {
                                    loading ?
                                        new Array( parseInt( perPage ) ).fill( 1 ).map( ( item, index ) => (
                                            <div key={ "Skeleton:" + index }>
                                                <div className="skel-post-list mb-4"></div>
                                            </div>
                                        ) ) :
                                        posts ?
                                            posts.length ?
                                                posts.slice( 0, posts.length ).map( ( post, index ) => (
                                                    <React.Fragment key={ "post-one" + index }>
                                                        <PostThree post={ post } />
                                                    </React.Fragment>
                                                ) ) :
                                                <div className="info-box with-icon"><p className="mt-4">No blogs were found matching your selection.</p></div>
                                            : ''
                                }
                            </div>

                            <Pagination totalPage={ totalPage } />
                        </div>

                        <BlogSidebar />
                    </div>
                </div>
            </div >
        </main >
    )
}

export default Listing;