import { Helmet } from 'react-helmet-async';
import Cover from '../../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/menu-bg.jpg';

const Menu = () => {
    return (
        <>
        <Helmet>
            <title>Bisto Boss | Menu</title>
        </Helmet>
        <Cover img={menuImg}></Cover>
        </>
    );
};

export default Menu;