import React from 'react';

const Star = (props) => {
  const { changeRate, id, isOnOver, rate } = props; 
  let classColor; 

  if(isOnOver && rate > id) {
    classColor = "Star-hover";
  } else if (rate > id) { 
    classColor = "Star-on";
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

const StarWidget = (props) => {
  return (
    <div className="StarWidget">
      {[...Array(props.qty).keys()]
        .map((index) =>
          <Star 
            key={ index } 
            id={ index } 
            {...props}  
          />
        )
      }
    </div>
  );
}

export default StarWidget; 