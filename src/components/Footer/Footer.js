import { FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa"
import "./FooterStyles.css"
import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{ color:
                    "#fff", marginRight: "2rem"}} />
                    <div>
                        <p>'Akila', Karametiya ,Kirama.</p>
                        <p>Sri Lanka</p>
                    </div>

                </div>
                <div className="phone">
                    <h4>
                    <FaPhone size={20} style={{ color:
                    "#fff", marginRight: "2rem"}} />
                    077 047 33 92
                    </h4>
                </div>

                <div className="email">
                    <h4>
                    <FaMailBulk size={20} style={{ color:
                    "#fff", marginRight: "2rem"}} />
                    akila.gunasekara@qriomatrix.com
                    </h4>
                </div>

            </div>

            <div className="right">
                <h4>About Me</h4>
                <p>
                A self-driven person working as an intern Software Enginear(QrioMatrix) in the IT industry with strong interpersonal and communication skills.
                </p>
                <div className="social">
                
                <FaGithub size={30} 
                    style={{ color:"#fff", 
                    marginRight: "1rem"}}
                    />
                <FaLinkedin size={30} 
                    style={{ color:"#fff", 
                    marginRight: "1rem"}}
                    />
                <FaTwitter size={30} 
                    style={{ color:"#fff", 
                    marginRight: "1rem"}}
                    />
                <FaFacebook size={30} 
                    style={{ color:"#fff", 
                    marginRight: "1rem"}}
                    />
                <FaYoutube size={30} 
                    style={{ color:"#fff", 
                    marginRight: "1rem"}}
                    />
                <FaTiktok size={30} 
                    style={{ color:"#fff", 
                    marginRight: "1rem"}}
                    />
                   
                    

                </div>
            </div>

        </div>
    </div>
  );
};

export default Footer
