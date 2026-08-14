import { Autoplay, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import 'swiper/css/pagination';

import pinkBanner from "../../assets/images/pink-banner.png";
import yellowBanner from "../../assets/images/yellow-banner2.png";
import onlineShoppingBanner from "../../assets/images/shopping-yellow-banner.png";
import newbanner from "../../assets/images/new.png";


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
                <img src={pinkBanner} className="size-full!" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-100 w-full">
                <img src={yellowBanner} className="size-full!" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-100 w-full">
                <img src={onlineShoppingBanner} className="size-full!" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-100 w-full">
                <img src={newbanner} className="size-full!" />
              </div>
            </SwiperSlide>
    
            
          </Swiper>
        </section>
  )
}

export default HeroSection