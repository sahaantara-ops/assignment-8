import React from 'react';
import { Star, Download } from 'lucide-react';
import { Link } from 'react-router';

const AppDetails = ({ featuredData }) => {
  const { id, image, title, companyName, description, ratingAvg, downloads } = featuredData;

  return (
    <Link to={`/apps/${id}`}>
      <div className="card bg-base-100 hover:scale-105 hover:shadow-xl transition duration-300">
        
        <figure>
          <img
            src={image}
            alt={title}
            className="h-40 w-full object-cover"
          />
        </figure>

        <div className="card-body">
          <h2 className="card-title font-bold text-gray-700">
            {title}
          </h2>

          <h3 className="text-sm text-gray-500">
            {companyName}
          </h3>

          <p className="text-sm text-gray-600 line-clamp-2">
            {description}
          </p>

          <div className="card-actions flex justify-between mt-3">
            
            <div className="flex items-center gap-1 text-amber-500 text-sm">
              <Star size={16} />
              {ratingAvg}
            </div>

            <div className="flex items-center gap-1 text-emerald-500 text-sm">
              <Download size={16} />
              {downloads}
            </div>

          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppDetails;