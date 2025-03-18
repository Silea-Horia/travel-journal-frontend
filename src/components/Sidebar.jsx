import React from 'react'
import SearchBar from './SearchBar';

// const Sidebar = ({ searchTerm, onSearchChange, vacationFilter, onFilterChange }) => {
//     return (
//       <div className="w-1/4 bg-rose-300 bg-opacity-50 p-4">
//         <div className="mb-6">
//           <SearchBar searchTerm={searchTerm} onSearchChange={onSearchChange} />
//         </div>
//         <Filters vacationFilter={vacationFilter} onFilterChange={onFilterChange} />
//       </div>
//     );
//   };

const Sidebar = () => {
  return (
    <div className='w-1/4 bg-rose-300 bg-opacity-50 p-4'>
      <div className='mb-6'>
        <SearchBar />
      </div>
      <div>
        <Filters />
      </div>
    </div>
  );
};
  
export default Sidebar