import Cover from "../../../Shared/Cover/Cover";
import MenuItem from "../../../Shared/MenuItem/MenuItem";


const MenuCategory = ({ items, title, coverImg }) => {
    return (
        <div>

            {title && <Cover img={coverImg} title="Our Menu"></Cover>}
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    // eslint-disable-next-line react/prop-types
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;