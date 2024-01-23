// Card.js
import React from 'react';

const Card = ({ name, category, imageUrl }) => (
  <div className="bg-white p-4 rounded-md shadow-md">
    <img src={imageUrl} alt={name} className="mb-2 rounded-md" />
    <h3 className="text-xl font-bold">{name}</h3>
    <p className="text-gray-600">{category}</p>
  </div>
);

export default Card;
