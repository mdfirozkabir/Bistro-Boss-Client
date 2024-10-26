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
            <button className="btn grid mt-2 btn-outline mx-auto border-0 border-b-4">Order Your Favorite Food</button>
            {/* desserts menu items */}
            <MenuCategory items={dessert} title="Desserts" img={dessertImg}></MenuCategory>
            <button className="btn grid mt-2 btn-outline mx-auto border-0 border-b-4">Order Your Favorite Food</button>
            <MenuCategory items={pizza} title="Pizza" img={pizzaImg}></MenuCategory>
            <button className="btn grid mt-2 btn-outline mx-auto border-0 border-b-4">Order Your Favorite Food</button>
            <MenuCategory items={salad} title="Salad" img={saladImg}></MenuCategory>
            <button className="btn grid mt-2 btn-outline mx-auto border-0 border-b-4">Order Your Favorite Food</button>
            <MenuCategory items={soup} title="Soup" img={soupImg}></MenuCategory>
            <div className="mb-8">
                <button className="btn grid mt-2 btn-outline mx-auto border-0 border-b-4">Order Your Favorite Food</button>
            </div>
        </>
    );
};

export default Menu;