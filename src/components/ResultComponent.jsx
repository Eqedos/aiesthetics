import React, { useState } from 'react';
import Bohemian from './Bohemian.png'; // Adjust the path as necessary
import Mid from './mid.png'; // Adjust the path as necessary
import Min from './min.png'; // Adjust the path as necessary

const ResultComponent = () => {
    const carouselImages = [Bohemian, Mid, Min];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const furnitureItems = [
        { name: 'Couch', type: 'Mirror', size: '20x120 cm', price: '$9' },
        { name: 'Chair', type: 'Rug', size: '170x240 cm', price: '$119' },
        { name: 'Bed', type: 'Chest of 6 drawers', size: '160x78 cm', price: '$179' },
        // Add more furniture items here...
    ];

    const handleNextClick = () => {
        setCurrentImageIndex((prevIndex) => 
            prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePreviousClick = () => {
        setCurrentImageIndex((prevIndex) => 
            prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="result-component flex">
            {/* Image Carousel */}
            <div className="w-1/2">
                <img 
                    src={carouselImages[currentImageIndex]} 
                    alt={`Slide ${currentImageIndex + 1}`} 
                    style={{ width: '100%', height: 'auto' }}
                />
                <div className="flex justify-center mt-2">
                    <button 
                      onClick={handlePreviousClick}
                      className="text-lg p-2 mx-2 bg-gray-200 rounded-full hover:bg-gray-400 transition duration-300"
                    >
                      &lt;
                    </button>
                    <button 
                      onClick={handleNextClick}
                      className="text-lg p-2 mx-2 bg-gray-200 rounded-full hover:bg-gray-400 transition duration-300"
                    >
                      &gt;
                    </button>
                </div>
            </div>
            
            {/* Furniture List */}
            <div className="w-1/2 p-4 overflow-y-auto">
                {furnitureItems.map((item, index) => (
                    <div key={index} className="card bg-white p-4 rounded shadow-lg mb-4">
                        <div className="flex flex-col md:flex-row items-center mb-4">
                            <div className="flex-grow">
                                <h2 className="font-bold">{item.name}</h2>
                                <p>{item.type}</p>
                                <p>{item.size}</p>
                            </div>
                            <span className="font-bold">{item.price}</span>
                        </div>
                        <div className="flex justify-between">
                            <button className="border px-4 py-1">-</button>
                            <span>1</span>
                            <button className="border px-4 py-1">+</button>
                        </div>
                        <div className="flex justify-between mt-2">
                            <button className="border px-4 py-1">Remove</button>
                            <button className="border px-4 py-1">Save to favourites</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ResultComponent;
