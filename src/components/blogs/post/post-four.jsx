import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ALink from '../../features/custom-link';
import OwlCarousel from '../../../product/owl-carousel';
import { videoHandler } from '../../../utils';
import { mainSlider20 } from '../../../basePathLocation/data/carousel';

function PostFour ( props ) {
    console.log(JSON.stringify(props))
    const { post, adClass = '', isLazy = false, isOriginal = false, btnText = "Read more", btnAdClass = 'btn-dark' } = props;
    const months = [ "JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC" ];

    return (
        <div className={ `post ${ post.type === 'gallery' ? '' : 'overlay-zoom' } overlay-dark ${ post.type === 'video' ? 'post-video' : '' } ${ adClass }` }>
            {
                post.type === 'image' || post.type === 'video' ?
                    <figure className="post-media">
                        {
                            isLazy ?
                                <ALink href={ `/blog/single/${ post.slug }` }>
                                    {
                                        isOriginal ?
                                            <LazyLoadImage
                                                src={  post.large_picture[ 0 ].url }
                                                alt="post image"
                                                width={ 380 }
                                                height={ 230 }
                                                effect="opacity; transform"
                                                style={ { backgroundColor: "#DEE6E8" } }
                                            />
                                            :
                                            <LazyLoadImage
                                                src={  post.picture.url }
                                                alt="post image"
                                                width={ post.picture.width }
                                                height={ post.picture.height }
                                                effect="opacity; transform"
                                                style={ { backgroundColor: "#DEE6E8" } }
                                            />
                                    }
                                </ALink>
                                :
                                <ALink href={ `/blog/single/${ post.slug }` }>
                                    {
                                        isOriginal ? <img
                                            src={ post.large_picture[ 0 ].url }
                                            alt="post image"
                                            width={ 380 }
                                            height={ 230 }
                                        /> :
                                            <img
                                                src={  post.picture.url }
                                                alt="post image"
                                                width={ post.picture.width }
                                                height={ post.picture.height }
                                            />
                                    }
                                </ALink>
                        }
                        {
                            post.type === 'video' ?
                                <>
                                    <span className="video-play" onClick={ videoHandler }></span>
                                    <video width="380">
                                        <source src={  post.video.url } type="video/mp4" />
                                    </video>
                                </>
                                : ''
                        }
                        <div className="post-calendar">
                            <span className="post-day">{ new Date( post.date ).getDay() + 1 }</span>
                            <span className="post-month">{ months[ new Date( post.date ).getMonth() ] }</span>
                        </div>
                    </figure> :
                    <figure className="post-media">
                        {
                            isLazy ?
                                <OwlCarousel adClass="owl-theme owl-dot-inner owl-dot-white gutter-no" options={ mainSlider20 }>
                                    {
                                        
                                            <LazyLoadImage
                                                src={  post.picture.url }
                                                alt="post gallery"
                                                key={ post.picture.title + '-'  }
                                                width={ post.picture.width }
                                                height={ post.picture.height }
                                                effect="opacity; transform"
                                                style={ { backgroundColor: "#DEE6E8" } }
                                            />
                                         }
                                </OwlCarousel>
                                :
                                <OwlCarousel adClass="owl-theme owl-dot-inner owl-dot-white gutter-no" options={ mainSlider20 }>
                                    {
                                        
                                            <img
                                                src={  post.picture.url }
                                                alt="post gallery"
                                                key={ post.picture.title + '-' + 'index' }
                                                width={ post.picture.width }
                                                height={ post.picture.height }
                                            />
                                        }
                                </OwlCarousel>
                        }
                        <div className="post-calendar">
                            <span className="post-day">{ new Date( post.date ).getDay() + 1 }</span>
                            <span className="post-month">{ months[ new Date( post.date ).getMonth() ] }</span>
                        </div>
                    </figure>
            }

            <div className="post-details">
                <h4 className="post-title">
                    <ALink href={ `/blog/single/${ post.slug }` }>{ post.title }</ALink>
                </h4>
                <p className="post-content">{ post.content }</p>
                <ALink href={ `/blog/single/${ post.slug }` } className={ `btn btn-link btn-underline ${ btnAdClass }` }>{ btnText }<i className="d-icon-arrow-right"></i></ALink>
            </div>
        </div >
    )
}

export default PostFour;