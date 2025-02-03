
import { useState, useEffect } from "react";

const images = [
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK_nmxFKUd1XKM0QyNZh4h6j3UJYQKIXmveg&s", title: "Tu alimentacion es importante" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyDJ-wd9gTsrWHd9C3ccWmh-wMKTCQMuWn2w&s", title: "El ejercicio te ayuda" },
];

export default function Slider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex justify-center items-center h-64 w-full bg-[#f0e6d2] overflow-hidden">
      {images.map((img, i) => (
        <div
          key={i}
          className={`absolute w-64 h-64 rounded-full flex flex-col justify-center items-center bg-[#d3c0b1] shadow-lg transition-all duration-1000 ${
            i === index ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
          style={{
            transform: `translate(${i === index ? "0, 0" : "200%, 200%"}) rotate(${i === index ? "0deg" : "180deg"})`,
          }}
        >
          <img src={img.src} alt={img.title} className="w-48 h-48 rounded-full" />
          <p className="mt-2 text-lg text-[#6f4f37] font-semibold">{img.title}</p>
        </div>
      ))}
    </div>
  );
}
