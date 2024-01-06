import Banner from "../Banner/Banner";
import Popular from "../Popular/Popular";
import Recomanded from "../Recomanded/Recomanded";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="sm:w-full md:w-full lg:w-3/4 mx-auto">
                <Popular></Popular>
                <Recomanded></Recomanded>
            </div>
        </div>
    );
};

export default Home;