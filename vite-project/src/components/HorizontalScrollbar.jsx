import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

import BodyPart from './BodyPart';
import ExerciseCard from './ExcerciseCard';

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (
  <Swiper
    slidesPerView="auto"
    spaceBetween={10}
    navigation={true}
    pagination={{ clickable: true }}
    modules={[Navigation, Pagination]}
    className="horizontalSwiper"
  >
    {data.map((item) => (
      <SwiperSlide key={item.id || item} style={{ width: '200px' }}>
        {bodyParts ? (
          <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
        ) : (
          <ExerciseCard exercise={item} />
        )}
      </SwiperSlide>
    ))}
  </Swiper>
);

export default HorizontalScrollbar;