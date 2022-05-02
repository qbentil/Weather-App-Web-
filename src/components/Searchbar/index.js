import './style.css'

import {FaSearchLocation} from 'react-icons/fa'
import {MdOutlineLocationSearching} from 'react-icons/md'

const Searchbar = () => {
    return(
        <form className="search-form">
            <div className='icon'>
                <MdOutlineLocationSearching />
            </div>
            <input type='text' placeholder='Enter city....' />
            <div className='icon'>
                <FaSearchLocation />
            </div>
        </form>
    )
}

export default Searchbar