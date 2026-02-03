import { useState, useEffect, useRef } from 'react';

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
        <section className="relative w-full h-[400px] md:h-[600px] lg:h-[calc(100vh-80px)] bg-black">
            <div className="relative w-full h-full">
                <video
                    ref={videoRef}
                    className="w-full h-full object-cover transition-opacity duration-1000"
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
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[#8a0303] text-white p-4 rounded-full transition-colors duration-300 z-10"
                    aria-label="Previous video"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </button>

                {/* Next Button */}
                <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[#8a0303] text-white p-4 rounded-full transition-colors duration-300 z-10"
                    aria-label="Next video"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </button>

                {/* Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {videos.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setOpacity(0);
                                setTimeout(() => setCurrentIndex(index), 500);
                            }}
                            className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === currentIndex ? 'bg-[#8a0303]' : 'bg-white/50'
                                }`}
                            aria-label={`Go to video ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Carousel;