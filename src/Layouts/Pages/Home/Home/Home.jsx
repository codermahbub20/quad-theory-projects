import Banner from "../Banner/Banner";
import Popular from "../Popular/Popular";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="sm:w-full md:w-full lg:w-3/4 mx-auto">
                <Popular></Popular>
            </div>
        </div>
    );
};

export default Home;