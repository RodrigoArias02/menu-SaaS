import { Swiper, SwiperSlide } from "swiper/react"
import img1 from "../../assets/slider1.png"
import img2 from "../../assets/slider2.png"
import { Autoplay, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "../../css/banner.css"
function HeroBanner() {

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 4000
      }}
      loop
    >
      <SwiperSlide>
        <div className="h-[180px] bg-red-500 rounded-3xl">
            <img src={img1} alt=""  />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="h-[180px] bg-blue-500 rounded-3xl">
           <img src={img2} alt=""  />
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default HeroBanner