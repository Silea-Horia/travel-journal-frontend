import React from 'react'

const Filters = ({ vacationFilter, onFilterChange }) => {
    return (
      <div className="bg-gray-100 p-4">
        <h3 className="font-bold mb-2">Filters:</h3>
        <div>
          <h4 className="mb-1">Vacation:</h4>
          <div className="bg-rose-200 bg-opacity-50 p-2">
            <div className="mb-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={vacationFilter === 'vacation'}
                  onChange={() => onFilterChange(vacationFilter === 'vacation' ? 'all' : 'vacation')}
                  className="mr-2"
                />
                vacation
              </label>
            </div>
            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={vacationFilter === 'planned'}
                  onChange={() => onFilterChange(vacationFilter === 'planned' ? 'all' : 'planned')}
                  className="mr-2"
                />
                planned vacation
              </label>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Filters;