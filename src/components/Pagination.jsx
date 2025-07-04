import React from 'react';
import { FaChevronLeft, FaChevronRight, FaChevronDown } from 'react-icons/fa';

const Pagination = () => {
  return (
    <div className="pagination-container">
      <div className="show-rows">
        <span>Show</span>
        <div className="rows-dropdown">
          <span>10</span>
          <FaChevronDown />
        </div>
        <span>Row</span>
      </div>
      <div className="pagination-controls">
        <button className="page-nav"><FaChevronLeft /></button>
        <button className="page-num active">1</button>
        <button className="page-num">2</button>
        <button className="page-num">3</button>
        <button className="page-num">4</button>
        <button className="page-num">5</button>
        <span className="page-dots">...</span>
        <button className="page-num">10</button>
        <button className="page-nav"><FaChevronRight /></button>
      </div>
    </div>
  );
};

export default Pagination;