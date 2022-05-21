import React , {useState} from 'react'
import './Searchbar.css' 
import Searchicon from './search.svg'
import Posts from './Posts'

const Serchbar = () => {
    const [searchText,setSearchText] = useState('')

    return (
        <div className="search-bar">
            <div className='place-title'>
            <h1>Place List</h1>
            </div>
            <div className='place-search'>
                <div className='type'>
                    <div className='select-type'>
                        <select>
                            <option>Restaurant</option>
                            <option>Cafe</option>
                            <option>Bakery</option>
                        </select>
                    </div>
                </div>
                <div className='search-box'>
                    
                        <input type= "text" placeholder='Search name...' onChange={e=>setSearchText(e.target.value)} />
                    
                </div> 
            </div>
        </div>
    )
}

export default Serchbar;