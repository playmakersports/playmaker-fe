import "swiper/css";
import React, { useRef, useState } from "react";
import Image from "next/image";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  boardImagesGridContainer,
  boardImagesGridItem,
  boardImageViewerBullet,
  boardImageViewerContainer,
  boardImageViewerItemList,
} from "./teamBoard.css";

function ImagesGrid({ images }: { images: string[] }) {
  const [showImage, setShowImage] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const onClickImage = (index: number) => {
    setShowImage(true);
    setCurrentSlide(index);
  };
  const handleCloseViewer = () => {
    setShowImage(false);
    setCurrentSlide(0);
  };

  return (
    <>
      <div className={boardImagesGridContainer} style={{ scrollbarWidth: "none" }}>
        {images.map((image, index) => (
          <button
            type="button"
            key={`${index}+image`}
            className={boardImagesGridItem}
            onClick={() => onClickImage(index)}
          >
            <Image src={image} alt={`${index}번 이미지`} width={80} height={80} quality={80} />
          </button>
        ))}
      </div>
      {showImage && (
        <section className={boardImageViewerContainer} onClick={handleCloseViewer}>
          <div className={boardImageViewerItemList} onClick={(e) => e.stopPropagation()}>
            <Swiper
              slidesPerView={1}
              initialSlide={currentSlide}
              onSlideChange={(swipe) => setCurrentSlide(swipe.activeIndex)}
            >
              {images.map((image, index) => (
                <SwiperSlide key={index} style={{ textAlign: "center" }}>
                  <div style={{ height: "max-content" }}>
                    <img src={image} alt="이미지" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className={boardImageViewerBullet}>
              {Array.from({ length: images.length }).map((_, index) => (
                <div
                  key={`${index}+bullet`}
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: currentSlide === index ? "var(--primary500)" : "var(--gray200)",
                  }}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default ImagesGrid;
