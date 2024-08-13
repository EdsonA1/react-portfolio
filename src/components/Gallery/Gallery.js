import React, { useState } from 'react';

const Card = ({ image, title, onClick }) => {
  return (
    <div
      className="w-80 rounded-lg overflow-hidden shadow-md bg-white cursor-pointer transform transition-transform hover:scale-105"
      onClick={onClick}
    >
      <img className="w-full h-64 object-cover" src={image} alt={title} />
      <div className="p-4 text-center">
        <div className="font-semibold text-lg text-gray-800">{title}</div>
      </div>
    </div>
  );
};

const Modal = ({ isOpen, onClose, title, galleryImages }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-gray-800 bg-opacity-75 backdrop-blur-md" onClick={onClose}></div>
      <div className="relative bg-white rounded-lg shadow-lg max-w-5xl w-full z-10 p-4">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold">{title}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${title} - ${index + 1}`}
              className="w-full h-48 object-cover rounded-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const imageCardsData = [
  {
    image: require('../../assets/Group_Pic.jpg'),
    title: 'Iceland',
    galleryImages: [
      require('../../assets/Edson_Logo.png'),
      require('../../assets/Edson_Logo.png'),
      require('../../assets/Edson_Logo.png'),
      require('../../assets/Edson_Logo.png'),
      require('../../assets/Edson_Logo.png'),
      require('../../assets/Edson_Logo.png'),
      require('../../assets/Edson_Logo.png'),
      require('../../assets/Edson_Logo.png'),
      require('../../assets/Edson_Logo.png'),
      require('../../assets/Edson_Logo.png'),
      // Add more images as needed
    ]
  },
  // Add more card data objects here
];

const Gallery = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const openModal = (card) => {
    setSelectedCard(card);
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  return (
    <div className="w-full py-8">
      <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Cool adventures</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {imageCardsData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            onClick={() => openModal(card)}
          />
        ))}
      </div>

      <Modal
        isOpen={!!selectedCard}
        onClose={closeModal}
        title={selectedCard?.title}
        galleryImages={selectedCard?.galleryImages || []}
      />
    </div>
  );
};

export default Gallery;
