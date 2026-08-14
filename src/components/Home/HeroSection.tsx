import { Autoplay, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import 'swiper/css/pagination';

import pinkBanner from "../../assets/images/pink-banner.jpg";
import yellowBanner from "../../assets/images/yellow-banner2.jpg";
import onlineShoppingBanner from "../../assets/images/online-shopping-yellow-banner.jpg";


const HeroSection = () => {
  return (
    <section className="w-full h-100">
          <Swiper
            loop
            pagination={true}
            modules={[Pagination, Autoplay]}
            autoplay={{ delay: 3000 }}
            className="mySwiper h-100 relative"
          >
            <SwiperSlide>
              <div className="h-100 w-full">
                <img src={pinkBanner} className="size-full! object-cover!" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-100 w-full">
                <img src={yellowBanner} className="size-full! object-cover!" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-100 w-full">
                <img src={onlineShoppingBanner} className="size-full! object-cover!" />
              </div>
            </SwiperSlide>
    
            
          </Swiper>
        </section>
  )
}

export default HeroSection