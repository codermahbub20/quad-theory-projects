

const Banner = () => {
    return (
        <div>
            <div className="hero p-4 min-h-screen">
                <div className="hero-content min-h-[50vh] bg-orange-400 rounded-3xl flex-col-reverse lg:flex-row-reverse">
                    <img src="https://i.ibb.co/F0c0M4B/Image1.png" className="max-w-xl rounded-lg " />
                    <div className="p-5 text-white">
                        <h1 className="text-5xl font-medium">Deliver Food To Your <br /> Door Step l</h1>
                        <p className="py-2 mt-3 text-xl">Authentic Food ! Quick Service Fast Delivery</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;