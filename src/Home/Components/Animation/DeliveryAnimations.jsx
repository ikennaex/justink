import React from "react";
import { Deliveryman1, Deliveryman2 } from "../../../imports";

const DeliveryAnimations = () => {
  const videos = [
    {
      src: Deliveryman1,
      caption: "Fast Doorstep Delivery: Ensuring goods move quickly from retailers to consumers."
    },
    {
      src: Deliveryman2,
      caption: "Pay-on-Delivery Flexibility: Enhancing trust and convenience for buyers and sellers."
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4 mt-10">
      {videos.map((video, index) => (
        <div key={index} className="flex flex-col items-center text-center">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-50 h-50"
          >
            <source src={video.src} type="video/mp4" />
          </video>
          <p className="mt-3 text-black text-l md:text-base px-10">
            {video.caption}
          </p>
        </div>
      ))}
    </div>
  );
};

export default DeliveryAnimations;
