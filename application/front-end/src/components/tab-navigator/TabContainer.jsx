import TabItem from './TabItem';
import { Link } from 'react-router';
import { UserContext } from '../../Context'
import { useContext } from 'react'
import './styles.css'
import logo from '../../assets/logo.png'

function TabContainer({ children }) {
    const user = useContext(UserContext)
    const getTabs = () => {
        console.log(user)
        if(user.role !== 'Guest'){
            return [
                {
                    text: 'Games',
                    url: '/games',
                },
                {
                    text: 'Community',
                    url: '/community',
                },
                {
                    text: 'About us',
                    url: '/aboutus',
                },
                {
                    text: 'Profile',
                    url: '/profile',
                }
            ]
        }else {
            return [
                {
                    text: 'Games',
                    url: '/games',
                },
                {
                    text: 'Community',
                    url: '/community',
                },
                {
                    text: 'About us',
                    url: '/aboutus',
                },
                {
                    text: 'Log in',
                    url: '/login',
                },
                
            ]
        }

    }
    return (
        <div className='tab-navigator'>
            <div className='tab-container'>
                <div className='tab-item'>
                    <Link to='/'><img src={logo} height={40} alt='Home'></img></Link>
                </div>
                {
                    getTabs().map(({ text, url }) => <TabItem
                        key={text}
                        text={text}
                        url={url}
                    />)
                }
            </div>
            {children}
        </div>
    )
}



export default TabContainer;