import { FaArrowRightLong } from "react-icons/fa6";

const Footer = () => {
    return (
        <div>
            <footer className="footer   p-10 bg-orange-500 text-neutral-content">
                <div className="lg:flex  items-center sm:justify-center md:justify-center lg:justify-end w-full lg:w-11/12 mx-auto">
                    <div className="flex-1 gap-5 ">
                        <aside>
                            <form>
                        
                                <div className="relative w-full lg:w-3/4">

                                    <input
                                        type="search"
                                        id="default-search"
                                        className="block w-full p-4 ps-10 ml-5 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Enter your email"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="text-white flex items-center gap-3 absolute end-2.5 bottom-2.5 bg-orange-700 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 dark:bg-orange-700 dark:hover:bg-blue-700 dark:focus:ring-orange-700"
                                    >
                                        Subscribe <FaArrowRightLong></FaArrowRightLong>
                                    </button>
                                </div>
                            </form>
                            <div className="lg:w-3/4 mt-20 text-black">
                                <h1 className="text-2xl font-bold ml-5">pti</h1>
                                <footer className="footer items-center p-4 text-orange-400">
                                    <aside className="items-center grid-flow-col">
                                        
                                        <p className="text-black font-bold">Copyright © 2024 - All right reserved</p>
                                    </aside>
                                    <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                                        <a className="bg-white p-2 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                                        </a>
                                        <a className="bg-white p-2 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                                        <a className="bg-white p-2 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                                    </nav>
                                </footer>
                            </div>
                        </aside>
                    </div>
                    <div className="">
                        <img className="w-1/2 hidden md:block" src="https://i.ibb.co/gt3xcnq/Image2.png" alt="" />
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;