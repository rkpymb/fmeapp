import { useState, useEffect, useRef } from 'react';
import styles from '@/app/page.module.css'
import { StorageURl, MediaFilesFolder, MediaFilesUrl } from '../../../../Data/config'
function VideoPlayer({ itemdata }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [VideoURI, setVideoURI] = useState('https://fmenew.sgp1.cdn.digitaloceanspaces.com/fmereelsvides/');
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsPlaying(true);
          } else {
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(video);

    return () => {
      observer.unobserve(video);
    };
  });

  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying]);

  return (

    <>
      
      <div className={styles.videobox}>
        <video ref={videoRef}
          src={`${MediaFilesUrl}${MediaFilesFolder}/${itemdata.ContentData}`}
          autoPlay
          type={'video/mp4'}
          loop
          controls
          className={styles.videoboxPlayer}
          onLoadStart={() => {

           
          }}
          onLoadedData={() => {


          }}
        />
      </div>
      <div style={{ minHeight: 10 }}></div>
      <div className={styles.PostCap}>
        <span> {itemdata.PostText}</span>
      </div>
    
    </>


  );
}

export default VideoPlayer;
