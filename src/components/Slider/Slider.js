
import SwiperCore, { Autoplay,Navigation, EffectFade, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import ItemOne from './Items/ItemOne';
import ItemTwo from './Items/ItemTwo';
import ItemThree from './Items/ItemThree';
import ItemFour from './Items/ItemFour';
// import 'swiper/components/pagination/pagination.min.css';
// import 'swiper/components/scrollbar/scrollbar.min.css';

// install Swiper modules
SwiperCore.use([Autoplay,Navigation, EffectFade, A11y]);

const Slider = () => {
    return(
        <>


<Swiper 
slidesPerView={1} 
spaceBetween={50}
speed={1150}
effect={'fade'}
autoplay={{
  "delay": 8000,
  "disableOnInteraction": false
}} 
navigation={true}
>

  <SwiperSlide>
  <ItemOne/>
  </SwiperSlide>

  <SwiperSlide>
  <ItemTwo/>
  </SwiperSlide>

  <SwiperSlide>
  <ItemThree/>
  </SwiperSlide>

  <SwiperSlide>
  <ItemFour/>
  </SwiperSlide>

  </Swiper>


        </>
    )
}

export default Slider;