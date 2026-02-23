import '../App.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";


function Footer () {

    return(
        <>
        <div className= "footer" id="about" >
            <h3>Developer for 3+ years. I've loved  </h3>
            <h3>every minute of it.</h3>
            
                <div className='numbered-list'>
                    <div className='item'>
                        <span className='circle'>1</span>
                        <p>I enjoy the process</p>

                    </div>
                    <div className='item'>
                        <span className='circle'>2</span>
                        <p>I know what it means to be on a team
                      </p>

                    </div>
                    <div className='item'>
                        <span className='circle'>3</span>
                        <p>Always curious and always learning
                       </p>

                    </div>

                
                </div>
                <div className="footer-icons">
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faGithub} />
                    <FontAwesomeIcon icon={faLinkedin} />
                </div>
            

            
        </div>    
        </>
    )
}

export default Footer
