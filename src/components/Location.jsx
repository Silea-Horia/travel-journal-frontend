import React from "react";

const Location = ({ location, onCheckboxChange }) => {
    return (
      <div className="mb-2 border-b pb-2">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={location.checked}
            onChange={() => onCheckboxChange(location.id)}
            className="mr-2"
          />
          <div>
            <span className="font-semibold underline">{location.name}</span>
            {location.details && (
              <span> - {location.details}</span>
            )}
          </div>
        </label>
      </div>
    );
  };

export default Location;