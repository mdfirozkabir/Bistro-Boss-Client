import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css"



const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20 bg-slate-500 bg-opacity-40">
            <SectionTitle
                heading="Featured Item"
                subHeading="Check it out"
            ></SectionTitle>
            <div className="md:flex md:gap-4 bg-slate-600 bg-opacity-60 pb-20 pt-12 px-36 justify-center items-center">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div>
                    <p>March 20, 2024</p>
                    <p className="uppercase"> Where can i get some ?</p>
                    <p >
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente,
                        nobis quisquam inventore commodi dignissimos earum, aliquid ipsum
                        praesentium quas, totam laborum exercitationem! Voluptate, dolor
                        laudantium.
                    </p>
                    <button className="btn btn-outline border-0 border-b-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;