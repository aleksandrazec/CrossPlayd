import logo from '../../assets/logo.png'
import '../home-page/styles.css'

function AboutUs(props) {
    return (
        <div className="parent">
            <div className="child">
                <div className="image-container">
                    <img className="image" src={logo} alt='Logo'></img>
                </div>
                <div className="header">
                    <h1>We're not gamers because we don't have lives. It's because we choose to have many...</h1>
                </div>
                <div className="trending-games">
                    <h3>Our mission</h3>
                    <hr></hr>
                    <p>The purpose of the application CrossPlayd is to allow users to track and review video games they've played all in one place. Rather than being a replacement for other video game scoring sites, this application focuses on creating a user-based community for every game of interest, no matter if the user owns it and independently of the platform they've played it on. This also allows for logging of older or discontinued games, as well as games that are not available on major platforms.</p>
                    <h3>Creators</h3>
                    <hr></hr>
                    <table className='links'>
                        <tr>
                            <th><a href="https://github.com/aleksandrazec">Aleksandra Zec</a></th>
                            <th><a href="https://github.com/Matej3334">Matej Kunovski</a></th>
                            <th><a href="https://github.com/CDNSeverov">Nikola Severov</a></th>
                            <th><a href="https://github.com/AndrejKaz">Andrej Kaziovski</a></th>
                        </tr>
                    </table>
                    <h3>Important links:</h3>
                    <hr></hr>
                    <p>Our GitHub containing documentation, the code as well as information about the tools used, can be found <a href="https://github.com/aleksandrazec/CrossPlayd/">here.</a></p>
                </div>
            </div>
        </div>
    )
}
export default AboutUs