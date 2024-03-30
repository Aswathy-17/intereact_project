import { Link } from "react-router-dom";
import './index.css';



export default function HomePage(){
    return(
        <>
            <div className="main-content">
                <div className="video-container">
                    <video autoPlay muted loop playsInline id="vid">
                        <source src='/vid.mp4' type='video/mp4' />
                    </video>
                </div>
                <div className="nav-bar">
                    <div className="nav-logo">
                        <div className="logo-img"></div>
                    </div>
                    <div className="nav-links">
                        <div className="links">
                            <div className="randompic-link">
                                <Link to="/random">Random</Link>
                            </div>
                            <div className="login-link">
                                <Link to="/login">Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="name">INTEREACT</div>
                <div className="about-section-container">
                    <div className="about-content">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Officia, nobis magnam itaque fuga asperiores tenetur quo accusantium iste, 
                            excepturi doloribus a! Quis aspernatur laboriosam numquam ea, natus velit fuga corporis, 
                            repudiandae non recusandae quod incidunt? Alias magnam consequatur illum qui minus sit consectetur expedita ducimus iste et. 
                            Nemo, repellendus doloribus.
                        </p>
                    </div>
                </div>
                <div className="footer-section">
                    <div className="contacts">
                        <div className="contact-title">Contacts</div>
                        <div>PhoneNo : 9981678564</div>
                        <a>LinkedIn : xyz12</a>
                        <a>Instagram: xyz_12</a>
                        <a>Gmail: xyz@gmail.com</a>
                    </div>
                    <div className="footer-logo"></div>
                </div>
            </div>
        </>
    );
}
