import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import './BreakingNews.css';

export function BreakingNews() {
  return (
    <div className="w-full h-[400px] p-4 bg-white">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={3} 
        slidesPerGroup={1} 
        loop={true} 
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={800} 
        grabCursor={true}
        centeredSlides={false}
      >
        <SwiperSlide>
          <div className="relative">
            <img alt="Notícia 1" className="banner-image" src="/assets/banner agendamento 2.png" />
            <div className="absolute bottom-4 left-4 bg-red-600 bg-opacity-80 text-white p-2 rounded text-sm">
              
              <button className="block mt-2 underline">Saiba mais</button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative">
            <img alt="Notícia 2" className="banner-image" src="/assets/banner b.o 1.png" />
            <div className="absolute bottom-4 left-4 bg-red-600 bg-opacity-80 text-white p-2 rounded text-sm">
              
              <button className="block mt-2 underline">Saiba mais</button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative">
            <img alt="Notícia 3" className="banner-image" src="/assets/banner prisma 3.png" />
            <div className="absolute bottom-4 left-4 bg-red-600 bg-opacity-80 text-white p-2 rounded text-sm">
              
              <button className="block mt-2 underline">Saiba mais</button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative">
            <img alt="Notícia 3" className="banner-image" src="/assets/banner serviços 4.png" />
            <div className="absolute bottom-4 left-4 bg-red-600 bg-opacity-80 text-white p-2 rounded text-sm">
              
              <button className="block mt-2 underline">Saiba mais</button>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
}