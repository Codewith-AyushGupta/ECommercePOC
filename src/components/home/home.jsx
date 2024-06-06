import React from 'react';
import { Helmet } from 'react-helmet';
// import Home Components
// import NewsletterModal from '~/components/features/modals/newsletter-modal';
import IntroSection from './partials/intro-section';
import data from './data/featuredData.json'
import BestCollection from './partials/BestCollection';
import CategorySection from './category-section';
import PromoSection from './partials/PromoSection';
import FeaturedCollection from './partials/FeaturedCollection';
// import InstagramSection from '~/components/partials/home/instagram-section';
// import ServiceBox from '~/components/partials/home/service-section';

function HomePage() {
    // const { data, loading, error } = useQuery( GET_HOME_DATA, { variables: { productsCount: 8 } } );
    const featured = data && data.data.specialProducts.featured.slice(0,4);
    const bestSelling = data && data.data.specialProducts.bestSelling;
    const firstFourBestSelling = bestSelling ? bestSelling.slice(0, 4) : [];

    const loading = false;
    return (
        <div className="main home demo2-cls">
            <Helmet>
                <title>Riode React eCommerce Template - Home</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - Home</h1>

            <div className="page-content">
                <div className="container">
                    <IntroSection />

                    <BestCollection products={firstFourBestSelling} loading={loading} />

                    <CategorySection />

                    <PromoSection />

                    {/* <FeaturedCollection products={ featured } loading={ loading } /> */}

                    {/* <ServiceBox /> */}

                    {/* <InstagramSection /> */}
                </div>
            </div>

            {/* <NewsletterModal /> */}
        </div>
    )
}

export default HomePage;