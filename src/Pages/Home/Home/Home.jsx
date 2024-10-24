import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import ChefService from '../ChefService/ChefService';
import PopularMenu from '../PopularMenu/PopularMenu';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Category/>
            <ChefService/>
            <PopularMenu/>
        </div>
    );
};

export default Home;