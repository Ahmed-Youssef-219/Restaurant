import React,{useEffect} from 'react';
import DishCard from './DishCard';
import { dishesData } from '../constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, FreeMode } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";


const BestDishes = () => {


    useEffect(()=>{
        console.log(dishesData);
    },[])
  return (
    <div className='dark:bg-slate-800 bg-white'>
        <h1 className='mb-9 text-4xl dark:text-white text-slate-900 text-center'>Best Dishes</h1>
        <Swiper
            breakpoints={{
                0: {
                slidesPerView: 1,
                },
                768: {
                slidesPerView: 2,
                },
                1024: {
                slidesPerView: 4,
                },
            }}
            freeMode={true}
            spaceBetween={60}
            modules={[Autoplay, Pagination, Navigation, FreeMode]}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            
            pagination={{
                clickable: true,
            }}
            navigation={true}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            className=''
        >  
        {
            dishesData.map((dish, index) => (
                <SwiperSlide className='w-full flex items-center justify-center'  key={dish.name + index}>
                    <DishCard image={dish.image} name={dish.name} description={dish.description} price={dish.price} />
                </SwiperSlide>
            ))
        }
        </Swiper>
    </div>
  )
}

export default BestDishes;
