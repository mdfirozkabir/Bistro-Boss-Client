import { Helmet } from 'react-helmet-async';
import Cover from '../../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/menu-bg.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {

    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === "offered");
    const dessert = menu.filter(item => item.category === "dessert");
    const pizza = menu.filter(item => item.category === "pizza");
    const salad = menu.filter(item => item.category === "salad");
    const soup = menu.filter(item => item.category === "soup");

    return (
        <>
            <Helmet>
                <title>Bisto Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="Our Menu"></Cover>
            {/* main cover */}
            <SectionTitle subHeading="Don't miss" heading="Today's Offer"></SectionTitle>
            {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* desserts menu items */}
            <MenuCategory items={dessert} title="desserts" img={dessertImg}></MenuCategory>
            
            <MenuCategory items={pizza} title="pizza" img={pizzaImg}></MenuCategory>
            
            <MenuCategory items={salad} title="salad" img={saladImg}></MenuCategory>
            
            <MenuCategory items={soup} title="soup" img={soupImg}></MenuCategory>
        </>
    );
};

export default Menu;