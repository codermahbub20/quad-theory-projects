import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import { useForm } from 'react-hook-form';



const Recomanded = () => {
    const [recommendedItem, setRecommendedItem] = useState([])

    const { register, handleSubmit } = useForm();

    const handleCreateAssignment = (data) => {
        // Handle form submission logic here
        console.log(data);

    };

    useEffect(() => {
        fetch('http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10')
            .then(res => res.json())
            .then(data => {
                setRecommendedItem(data.Items)
            })
    }, [])


    return (
        <div>

            <div className=' flex justify-between mb-5'>
                <div>
                    <h1 className='text-2xl font-medium'>Recommended</h1>
                </div>
                <div>


                    {/* The button to open modal */}
                    <label htmlFor="my_modal_6" className="btn btn-sm text-orange-500">AddMore</label>

                    {/* Put this part before </body> tag */}
                    <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                    <div className="modal" role="dialog">
                        <div className="modal-box">


                            <form onSubmit={handleSubmit(handleCreateAssignment)}>
                                <div className='md:px-24'>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text  text-xl">Name</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            className="input input-bordered"
                                            name='title'
                                            {...register('title')}
                                        />
                                    </div>
                                    <div className="form-control  w-full">
                                        <label className="label">
                                            <span className="label-text text-xl">Image Url</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Image Url"
                                            className="input input-bordered"
                                            name='description'
                                            {...register('description')}
                                        />
                                    </div>
                                </div>

                                <div className=' md:px-24'>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text text-xl">Price</span>
                                        </label>
                                        <input
                                            type="number"
                                            defaultValue={0}
                                            placeholder="Price"
                                            className="input input-bordered"
                                            name='mark'
                                            {...register('mark')}
                                        />
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text  text-xl">IsPopular</span>
                                        </label>
                                        <select
                                            name="level"
                                            className="select text-xl select-ghost w-full  input  input-bordered"
                                            {...register('level')}
                                        >
                                            <option disabled selected>IsPopular</option>
                                            <option>true</option>
                                            <option>false</option>

                                        </select>
                                    </div>
                                </div>

                                <div className='md:px-24'>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text  text-xl">IsPopular</span>
                                        </label>
                                        <select
                                            name="level"
                                            className="select text-xl select-ghost w-full  input  input-bordered"
                                            {...register('level')}
                                        >
                                            <option disabled selected>IsRecommended</option>
                                            <option>true</option>
                                            <option>false</option>

                                        </select>
                                    </div>
                                </div>
                                <div className="modal-action">
                                    <label htmlFor="my_modal_6" className="btn w-3/4 bg-orange-500 hover:bg-orange-500 text-white mx-auto">Add Item</label>
                                </div>
                            </form>


                        </div>
                    </div>


                </div>
            </div>

            <Swiper
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
                breakpoints={{
                    200: {
                        slidesPerView: 3, // show 3 slides per view on small screens
                    },
                    768: {
                        slidesPerView: 4, // show 4 slides per view on medium screens
                    },
                    1024: {
                        slidesPerView: 5, // show 5 slides per view on large screens
                    },
                }}
            >
                {
                    recommendedItem?.filter((item) => item?.IsRecommended === true)?.map(item => <SwiperSlide key={item.Id}>
                        <img className='h-[300px] w-[200px] rounded-xl' src={item?.ImageUrl} alt="" />
                        <h1 className='text-xl text-center mb-10  mt-2'>{item?.Name}</h1>
                    </SwiperSlide>)
                }


            </Swiper>
        </div>
    );
};

export default Recomanded;