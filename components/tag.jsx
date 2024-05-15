import React from 'react';

import "./Tag.css";

const Tag = ({tagName, selectTag, selected }) => {
  const tagStyle = {
    MAT102: {backgroundColor: '#E38874'},
    CSC148: {backgroundColor: '#E3B374'},
    MAT136: {backgroundColor: '#FEF1AE'},
    ISP100: {backgroundColor: '#D7AFE9'},
    default: {backgroundColor: '#f9f9f9'}
  }
  return (
      <button 
          type = "button" 
          className='tag' 
          style = {selected ? tagStyle[tagName]: tagStyle.default}
          onClick={()=> selectTag(tagName)}> 
          {tagName}
      </button>
  );
}

export default Tag;