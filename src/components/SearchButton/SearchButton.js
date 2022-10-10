import React from "react";

import "./search-button.css";

const SearchButton = ({ onClick, children, disabled }) => {
  return (
    <button className="search-button" onClick={onClick} disabled={disabled}>
      {children} <span className="search-button__text">Посмотреть!</span>
    </button>
  );
};

export default React.memo(SearchButton);
