import '../css/ComponentsCss/modelingAndPhoto.css';
import React, { useEffect, useState, useRef } from "react";

export function ModelingPhoto() {
  const scrollRef = useRef(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const autoScrollInterval = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;
    const scrollSpeed = 1; // slower for smoothness

    const startAutoScroll = () => {
      autoScrollInterval.current = setInterval(() => {
        if (scrollContainer && isAutoScrolling) {
          scrollAmount += scrollSpeed;
          scrollContainer.scrollLeft = scrollAmount;

          // Reset when end is reached
          if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
            scrollAmount = 0;
            scrollContainer.scrollLeft = 0;
          }
        }
      }, 30);
    };

    startAutoScroll(); 

    //pause auto-scroll when user interacts
    const handleUserScroll = () => {
      setIsAutoScrolling(false);
      clearInterval(autoScrollInterval.current);

      //resume scroll after 3 seconds of no user interaction
      setTimeout(() => {
      setIsAutoScrolling(true);
      scrollAmount = scrollContainer.scrollLeft;
      startAutoScroll
      }, 10000);
    };

    scrollContainer?.addEventListener('wheel', handleUserScroll);
    scrollContainer?.addEventListener('touchstart', handleUserScroll);
    scrollContainer?.addEventListener('mousedown', handleUserScroll);


    return () => {
      clearInterval(autoScrollInterval.current);
      scrollContainer?.removeEventListener('wheel', handleUserScroll);
    scrollContainer?.removeEventListener('touchstart', handleUserScroll);
    scrollContainer?.removeEventListener('mousedown', handleUserScroll);
    };
  }, [isAutoScrolling]);

  const [images, setImages] = useState([]);
  const folderId = "1w1Uw__USMO5l20YoFPFRqm4SGWcl3QEc";
  const apiKey = "AIzaSyDsc1AJpxh7OHIX5POzKVdBwM19IOtSHp0";

  useEffect(() => {
  fetch(
    `https://www.googleapis.com/drive/v3/files?q=${encodeURIComponent(
      `'${folderId}' in parents`
    )}&key=${apiKey}&fields=files(id,name,mimeType)`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data); // check Drive API response
      if (data.files && data.files.length > 0) {
        const imageLinks = data.files.map(
          (file) => `https://drive.google.com/thumbnail?id=${file.id}&sz=w1000`
        );
        setImages(imageLinks);
      } else {
        console.error("No files found or access issue:", data);
      }
    })
    .catch((err) => console.error("Error fetching Drive files:", err));
}, []);


  

  return (
    <section className="modeling-section">
      <h2>Modeling | Photography</h2>
      <div className="photo-gallery" ref={scrollRef}>
        {images.map((url, i) => (
        <img key={i} src={url} alt={`drive-img-${i}`} />
      ))}
      </div>
    </section>
  );
}

export default ModelingPhoto