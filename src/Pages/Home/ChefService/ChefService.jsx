
import img1 from "../../../assets/home/chef-service.jpg"

const ChefService = () => {
    return (
        <div>
            <div style={{ backgroundImage: `url(${img1})` }} className='mt-5 text-center mb-5 w-[1280px] h-[425px] pt-24'>
                <div className='bg-white w-[900px] h-[250px] mx-auto'>
                    <h1 className='text-4xl pt-5 pb-3 font-semibold'>Bistro Boss</h1>
                    <p className='px-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil doloribus natus beatae impedit dignissimos autem corrupti ratione exercitationem! In quisquam earum vel omnis, commodi laboriosam magni quae necessitatibus facilis eum beatae sequi illum? Atque cupiditate illo.</p>
                </div>
            </div>
        </div>
    );
};

export default ChefService;