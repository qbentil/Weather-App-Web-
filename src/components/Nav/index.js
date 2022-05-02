import './index.css'

import {FaGithubSquare} from 'react-icons/fa'

export const Nav = () => {
    return (
        <div className='navbar'>
            <h2 className='title'>ReactWeather</h2>
            <FaGithubSquare size={30} color={'#fff'} />
        </div>
    )
}