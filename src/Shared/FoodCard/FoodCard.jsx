

const FoodCard = ({ item }) => {
    const { name, image, recipe } = item;

    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt="Image error" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-center justify-center">{name}</h2>
                <p className="text-center">{recipe}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;