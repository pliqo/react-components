import React from 'react';
import './Rating.css';

const Rate = (props) => {
  const { changeRate, id, isOnOver, rate } = props; 
  let classColor; 

  if(isOnOver && rate > id) {
    classColor = "Rate--onover";
  } else if (rate > id) { 
    classColor = "Rate--active";
  } 

  return (
    <span 
      onClick={ changeRate.bind(this, 'change', id + 1) } 
      onMouseOver={ changeRate.bind(this, 'show', id + 1) } 
      onMouseOut={ changeRate.bind(this, 'reset') }
      className={ classColor }
    >
      { '\u2605' }
    </span>
  );
}

const Rating = (props) => {
  return (
    <div className="Rating">
      {[...Array(props.qty).keys()]
        .map((index) =>
          <Rate 
            key={ index } 
            id={ index } 
            {...props}  
          />
        )
      }
    </div>
  );
}

export default Rating; 