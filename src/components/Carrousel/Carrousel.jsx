// src/components/Carousel.jsx
import { useState, useEffect, useRef } from 'react';
import './Carrousel.css';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [opacity, setOpacity] = useState(1);
    const videoRef = useRef(null);

    const videos = [
        { src: '/videos/itMovie.mp4', poster: '/images/carrousel/itPoster.jpg' },
        { src: '/videos/largaMarchaMovie.mp4', poster: '/images/carrousel/longWalkPoster.jpg' },
    ];

    const handlePrev = () => {
        setOpacity(0);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
        }, 500);
    };

    const handleNext = () => {
        setOpacity(0);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
        }, 500);
    };

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.load();
            setOpacity(1);
        }
    }, [currentIndex]);

    return (
        <section className="carousel-section">
            <div className="carousel-container">
                <video
                    ref={videoRef}
                    className="carousel-video"
                    style={{ opacity }}
                    poster={videos[currentIndex].poster}
                    controls
                >
                    <source src={videos[currentIndex].src} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Previous Button */}
                <button
                    onClick={handlePrev}
                    className="carousel-btn carousel-btn-prev"
                    aria-label="Previous video"
                >
                    <svg className="carousel-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                {/* Next Button */}
                <button
                    onClick={handleNext}
                    className="carousel-btn carousel-btn-next"
                    aria-label="Next video"
                >
                    <svg className="carousel-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                {/* Indicators */}
                <div className="carousel-indicators">
                    {videos.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setOpacity(0);
                                setTimeout(() => setCurrentIndex(index), 500);
                            }}
                            className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`}
                            aria-label={`Go to video ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Carousel;
