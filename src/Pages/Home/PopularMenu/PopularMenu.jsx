import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../../Shared/MenuItem/MenuItem";


const PopularMenu = () => {

    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch("menu.json")
            .then(res => res.json())
            .then(data => {
                const PopularItems = data.filter(item => item.category === "popular")
                setMenu(PopularItems)
            })
    }, [])

    return (
        <section className='mb-4'>
            <SectionTitle
                heading="from our menu"
                subHeading="Popular Menu Items"
            ></SectionTitle>
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    menu.map(item => <MenuItem
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