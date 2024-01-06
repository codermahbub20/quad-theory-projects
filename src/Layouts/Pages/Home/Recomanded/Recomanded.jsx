import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';



const Recomanded = () => {
    const [recommendedItem, setRecommendedItem] = useState([])

    useEffect(() => {
        fetch('http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10')
            .then(res => res.json())
            .then(data => {
                setRecommendedItem(data.Items)
            })
    }, [])


    return (
        <div>

            <div className=' flex justify-between mb-3'>
                <div>
                    <h1 className='text-2xl font-medium'>Recommended</h1>
                </div>
                <div>
                    <button className='btn'>Add More</button>
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