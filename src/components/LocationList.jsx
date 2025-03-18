import React from "react";

const LocationList = ({ locations, onCheckboxChange }) => {
    return (
      <div className="mb-4">
        {locations.map(location => (
          <LocationItem 
            key={location.id} 
            location={location}
            onCheckboxChange={onCheckboxChange}
          />
        ))}
      </div>
    );
  };

export default LocationList;