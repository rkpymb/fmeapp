import { useState, useEffect, useRef } from 'react';
import styles from '../../styles/VideoPlayer.module.css'
function VideoPlayer({ src }) {
    const [isPlaying, setIsPlaying] = useState(false);
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
    }, []);

    useEffect(() => {
        if (isPlaying) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    }, [isPlaying]);

    return (
        <div className={styles.videobox}>
            <video ref={videoRef}
                src={src}
                autoPlay
                type={'video/mp4'}
                loop
               
                onLoadStart={() => {
                  
                   
                }}
                onLoadedData={() => {
                   
                  
                }}
            />
        </div>
       
    );
}

export default VideoPlayer;
