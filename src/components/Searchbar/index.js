import './style.css'

import {FaSearchLocation} from 'react-icons/fa'
import {MdOutlineLocationSearching} from 'react-icons/md'
import { useState } from 'react'

const Searchbar = ({action}) => {
    const [location, setLocation] = useState('Accra');

    const search = (e) => {
        e.preventDefault();
        action(location)
    }
    return(
        <form className="search-form" onSubmit={(e) => search(e)}>
            <div className='icon'>
                <MdOutlineLocationSearching />
            </div>
            <input type='text' placeholder='Enter city....' onChange={(e) => setLocation(e.target.value)} />
            <button className='icon'>
                <FaSearchLocation />
            </button>
        </form>
    )
}

export default Searchbar