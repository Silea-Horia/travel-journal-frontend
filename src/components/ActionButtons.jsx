import React from 'react'

const ActionButtons = ({ onAdd, onEdit, onDelete }) => {
    return (
      <div className="flex justify-between mt-auto">
        <button 
          onClick={onAdd}
          className="bg-rose-200 px-8 py-2 border border-rose-400"
        >
          Add
        </button>
        <button 
          onClick={onEdit}
          className="bg-rose-200 px-8 py-2 border border-rose-400"
        >
          Edit
        </button>
        <button 
          onClick={onDelete}
          className="bg-rose-200 px-8 py-2 border border-rose-400"
        >
          Delete
        </button>
      </div>
    );
  };

export default ActionButtons