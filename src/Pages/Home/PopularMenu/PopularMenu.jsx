
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";


const PopularMenu = () => {

    const [menu] = useMenu ();
    const popular = menu.filter(item => item.category === "popular");

    return (
        <section className='mb-4'>
            <SectionTitle
                heading="from our menu"
                subHeading="Popular Menu Items"
            ></SectionTitle>
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <button className="btn grid mt-2 btn-outline mx-auto border-0 border-b-4">View Full Menu</button>
        </section>
    );
};

export default PopularMenu;