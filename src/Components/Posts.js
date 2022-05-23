import React from 'react';
import Vector from './Vector.svg'
import Dot from './dot.svg'
import './Posts.css'


const Posts = ({ posts, loading  }) => {
    
  if (loading) {
    return <h2>Loading...</h2>;
  }
 

  return (
     
     <div className='grid-container'>
        {posts && posts.map(record => {
          return(
            <div className='grid-item' key={record.id}>
          <div className='card-body'>
            <div className='img-box'>
              <img src={record.profile_image_url ? record.profile_image_url : ''} alt="" />
            </div>
            <div className='content-box'>
              <p>{record.name}</p>
              
              {record.operation_time.filter(dayone => dayone.day === "Monday").map(data => {
                return (
                  <span>
                <img src={Vector ? Vector : ''} alt="" />
                {data.time_open} - {data.time_close}
               
               
              </span>

                )
              })}
              <span className='score'>
                <img src={Dot ? Dot : ""}  alt=''/>
                 {record.rating ? record.rating : "No Ratiing"}
                </span>
            </div>
          </div>
          <div className="item-images">
            <div className='img-box1'>
              <img src={record.images[0] ? record.images[0] : ''} alt=''/>
            </div>
            <div className='img-box2'>
              <img src={record.images[1] ? record.images[1] : ''} alt=''/>
            </div>
            <div className='img-box3'>
              <img src={record.images[2] ? record.images[2] : ''} alt=''/>
            </div>
          </div>
        </div>
          )
        })}
      </div> 
     
    
  );
};

export default Posts;