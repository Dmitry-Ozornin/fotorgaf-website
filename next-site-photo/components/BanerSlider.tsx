//npm install react-bootstrap
"use client";

import { bannerImage } from "../public/image/bannerImage/Baner.json";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
export default function BootstrapCarousel() {
  const aspectRatio: number = 16 / 9;
  return (
    <>
      <Carousel controls={false} indicators={false}>
        {bannerImage.map((imgHref) => {
          return (
            <Carousel.Item interval={2000} key={imgHref}>
              <div
                style={{
                  position: "relative",
                  width: "100%",

                  //   height: "80vh",
                  //   maxHeight:"1200px",

                  paddingTop: `${(1 / aspectRatio) * 80}%`, // Высота вычисляется автоматически
                  overflow: "hidden", // Максимальная высота
                }}
              >
                <Image
                  src={imgHref}
                  alt="Banner image"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, (max-width: 1280px) 100vw,(max-width: 2300px) 100vw, 100vw"
                  //   sizes="100vw"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  priority
                />
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
}
