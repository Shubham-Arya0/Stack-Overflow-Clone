import React from "react";

import github from '../../assest/github.png'
import linkedin from '../../assest/linkedin.png'
import instagram from '../../assest/instagram.png' 
import './footer.css';

const footer = () => {
    return (
         <div class="contact" id="contact-me">
                <div class="container">
                    <div class="contact-content">
                        
                        <h2>Contact Me</h2>
                        <p class="mail">
                            <i class="fas fa-arrow-right"></i> Shubhamkr.arya9@gmail.com
                        </p>
                        <p class="links">Or find me on:</p>
                        <img src={linkedin} alt="linkedin" />
                        <a href="https://www.linkedin.com/in/shubham-arya-7a75b9202" target="blank"><i
                                class="fab fa-linkedin">
                                Linkedin</i></a>
                        <img src={github} alt="github" />
                        <a href="https://github.com/Shubham-Arya0" target="blank"><i class="fab fa-github"></i>
                            Github</a>

                        <img src={instagram } alt="instagram" />
                        <a href="https://www.instagram.com/shubham_arya0/" target="blank"><i
                                class="fab fa-instagram"></i> Instagram</a> 
                                <footer>
                                    &copy; 2023 All rights reserved by shubham Arya
                                </footer>

                    </div>
                </div>
            </div>
    )
};

export default footer;