import React from 'react'

const MainContent = ({ locations, onCheckboxChange, onAdd, onEdit, onDelete }) => {
    return (
      <div className="w-3/4 bg-gray-200 p-4 flex flex-col h-full">
        <LocationList locations={locations} onCheckboxChange={onCheckboxChange} />
        <div className="mt-auto">
          <ActionButtons onAdd={onAdd} onEdit={onEdit} onDelete={onDelete} />
        </div>
      </div>
    );
  };

export default MainContent