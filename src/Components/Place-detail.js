import Dot from './dot.svg'
import './place-detail.css'

const Placedetail = () => {
    return (
        <div className='place'>
            <div className="control">
                <button> 
                &lt; BACK</button>
            </div>
            <div className="place-container">
                <div className='place-detail'>
                    <img src='https://media-cdn.tripadvisor.com/media/photo-s/17/75/3f/d1/restaurant-in-valkenswaard.jpg'/>
                    <div className='placedetail-title'>
                        <h1>DAI LOU MODERN CHINESE CUISINE</h1>
                        <span>
                            <img src={Dot} />
                            4.1 
                        </span>
                    </div>
                    <div className='placedetail-address'>
                        <span className='address'>Address : </span>
                        <span>55/5 Soi Phahon Yothin 2, Khwaeng Samsen Nai, Khet Phaya Thai, Krung Thep Maha Nakhon 10400, Thailand</span>
                    </div>
                    <div className='placedetail-opening'>
                        <span className='opening'>Opening Hour :  </span>
                        <div className='day'>
                        <span>
                            Monday: 10:00 AM – 6:00 PM
                        </span>
                        <span>
                            Tuesday: 10:00 AM – 6:00 PM
                        </span>
                        <span>
                            Wednesday: 10:00 AM – 6:00 PM
                        </span>
                        <span>
                            Thursday: 10:00 AM – 6:00 PM
                        </span>
                        <span>
                            Friday: 10:00 AM – 6:00 PM
                        </span>
                        <span>
                            Saturday: Closed
                        </span>
                        <span>
                            Sunday: Closed
                        </span>
                        </div>
                    </div>
                </div>
                <div className='place-img'>
                    <p>Images</p>
                    <div className='placeimg-box1'>
                        <img src='https://brandinside.asia/wp-content/uploads/2019/07/shutterstock_1437332618-e1563988304801.jpg'/>
                    </div>
                    <div className='placeimg-box2'>
                        <img src='https://www.elmedico.net/wp-content/uploads/2019/07/Food-quality-.jpg' />
                    </div>
                    <div className='placeimg-box3'>
                        <img src='https://brandinside.asia/wp-content/uploads/2019/07/shutterstock_1437332618-e1563988304801.jpg'/>
                    </div>

                </div>

            </div>
        </div>

    );
   
} 

export default Placedetail;