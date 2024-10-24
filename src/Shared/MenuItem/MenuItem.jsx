

// eslint-disable-next-line react/prop-types
const MenuItem = ({ item }) => {

    const { name, image, recipe } = item;


    return (
        <div className='flex space-x-4'>
            <img style={{ borderRadius: "0 200px 200px 200px" }} className='w-[85px]' src={image} alt="image error" />
            <div>
                <h3 className='uppercase'>{name}---------</h3>
                <p className='text-yellow-500'>{recipe}</p>
            </div>
        </div>
    );
};

export default MenuItem;