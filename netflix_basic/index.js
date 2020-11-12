import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Cards'
import Sdata from './Sdata';

ReactDOM.render(
  <>
    <h1 className='heading_style'>List of Cards</h1>
    {Sdata.map((val) => {
      return(
        <Card
          sname={val.sname}
          imgsrc={val.imgsrc}
          title={val.title}
          link={val.link}
        />
      );
    })}
  </>
  , document.getElementById('root')
)