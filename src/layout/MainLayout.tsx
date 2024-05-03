import Home from "../components/Home/Home";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div className="w-full mx-auto">
            <Navbar/>
            <Home/>
        </div>
    );
};

export default MainLayout;