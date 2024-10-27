import { Link } from "react-router-dom";
import Cover from "../../../Shared/Cover/Cover";
import MenuItem from "../../../Shared/MenuItem/MenuItem";


// eslint-disable-next-line react/prop-types
const MenuCategory = ({ items, title, img }) => {
    return (
        <div className="pt-8">
            {title && <Cover img={img} title={title}></Cover>}
            <div className='grid md:grid-cols-2 gap-10 my-16'>
                {
                    // eslint-disable-next-line react/prop-types
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}>
                <button className="btn grid mt-2 btn-outline mx-auto border-0 border-b-4">Order Your Favorite Food</button>
            </Link>
        </div>
    );
};

export default MenuCategory;