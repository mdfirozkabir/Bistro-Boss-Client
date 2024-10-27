import FoodCard from "../../../Shared/FoodCard/FoodCard";


const OrderTab = ({items}) => {
    return (
        <div className="grid md:grid-cols-3 mx-auto ga10">
                        {
                            items.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                        }
                    </div>
    );
};

export default OrderTab;