import "swiper/css";
import "swiper/css/zoom";
import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Zoom } from "swiper/modules";
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
              zoom={true}
              autoHeight={true}
              slidesPerView={1}
              initialSlide={currentSlide}
              onSlideChange={(swipe) => setCurrentSlide(swipe.activeIndex)}
              modules={[Zoom]}
            >
              {images.map((image, index) => (
                <SwiperSlide key={index} style={{ textAlign: "center" }}>
                  <div
                    className="swiper-zoom-container"
                    style={{
                      minHeight: "55vh",
                      height: "max-content",
                      marginBottom: "-2px",
                    }}
                  >
                    <img src={image} alt="이미지" style={{ width: "100%", height: "100%" }} />
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
