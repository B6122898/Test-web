import React from 'react';
import Vector from './Vector.svg'
import Dot from './dot.svg'
import './Posts.css'


const Posts = ({ posts, loading , searchText }) => {
    
  if (loading) {
    return <h2>Loading...</h2>;
  }
  const filteredplace= posts.filter(
    posts => {
      return (
        posts.name.toLowerCase().includes(searchText.toLowerCase())  
      );
    }
  );

  return (
     
     <div className='grid-container'>
        {posts && posts.map(record => {
          return(
            <div className='grid-item' key={record.id}>
          <div className='card-body'>
            <div className='img-box'>
              <img src={record.profile_image_url} alt="" />
            </div>
            <div className='content-box'>
              <p>{record.name}</p>
              
              {record.operation_time.filter(dayone => dayone.day === "Monday").map(data => {
                return (
                  <span>
                <img src={Vector} alt="" />
                {data.time_open} - {data.time_close}
               
               
              </span>

                )
              })}
              <span className='score'>
                <img src={Dot} />
                 {record.rating}
                </span>
            </div>
          </div>
          <div className="item-images">
            <div className='img-box1'>
              <img src={record.images[0]} />
            </div>
            <div className='img-box2'>
            <img src={record.images[1]} />
            </div>
            <div className='img-box3'>
            <img src={record.images[2]} />
            </div>
          </div>
        </div>
          )
        })}
      </div> 
     
    
  );
};

export default Posts;