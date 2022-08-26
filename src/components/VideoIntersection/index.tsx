import { FunctionComponent, useEffect, useRef } from 'react';
import Slick, { Settings } from 'react-slick';
import { useInView } from 'react-intersection-observer';

interface Props {
   isMobile?: boolean;
   items: [];
   videoURL: string;
}

export const VideoInterSection: FunctionComponent<Props> = ({
   items, isMobile = false, videoURL
}) => {
   const containerRef = useInView();
   const videoEl = useRef<HTMLVideoElement>(null);

   useEffect(() => {
      const video = videoEl.current;
      const isInView = containerRef.inView;

      if(!video) return;

      video.muted = true;
      video[isInView ? 'play' : 'pause']();
      !isInView && (video.currentTime = 0);

   }, [containerRef.inView, videoEl]);

   const settings: Settings = {
      dots: false,
      arrows: false,
      centerMode: true,
      slidesToShow: !isMobile ? items.length >= 3 ? 3 : items.length : 1,
      slidesToScroll: 1,
      autoplay: false,
      infinite: true,
      speed: 500,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               dots: true,
               centerMode: false,
            }
         }
      ]
   };

   return(
      <div>
         <div className="slick">
            <Slick {...settings }>
               {
                  items.map((item, index) => (
                     <div className="item" key={String(index)}>{JSON.stringify(item)}</div>
                  ))
               }
            </Slick>
         </div>

         <div className="video-container">
            <video
               loop={true}
               muted={true}
               preload="auto"
               ref={videoEl}
            >
               <source type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"' 
                  src={videoURL}>
               </source> 
            </video>
         </div>

      </div>
   );
};