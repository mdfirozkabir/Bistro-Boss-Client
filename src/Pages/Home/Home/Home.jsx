import { Helmet } from 'react-helmet-async';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import ChefService from '../ChefService/ChefService';
import Featured from '../Featured/Featured';
import PopularMenu from '../PopularMenu/PopularMenu';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Helmet>
            <title>Bisto Boss | Home</title>
        </Helmet>
            <Banner/>
            <Category/>
            <ChefService/>
            <PopularMenu/>
            <Featured/>
            <Testimonial/>
        </div>
    );
};

export default Home;