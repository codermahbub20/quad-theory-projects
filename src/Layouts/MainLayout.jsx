import Footer from "../Components/Shared/Footer/Footer";
import Navbar from "../Components/Shared/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div>
            <div className="w-10/12 mx-auto">
                <Navbar></Navbar>

                
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;