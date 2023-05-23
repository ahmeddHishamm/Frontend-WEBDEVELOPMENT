
import "./FooterStyles.css"
const Footer = () => {
    return(
        <div className="footer">
            <div className="top">
                <div>
                <h1> Avventura </h1>
                <p>Start your Adventure!</p>
                </div>
                <div>
                <a href="/">
                    <i className="fa-brands fa-facebook-square"></i>
                </a>
                <a href="/">
                    <i className="fa-brands fa-instagram-square"></i>
                </a>
                <a href="/">
                    <i className="fa-brands fa-twitter-square"></i>
                </a>
                <a href="/">
                    <i className="fa-brands fa-behance-square"></i>
                </a>
            </div>
            </div>


            <div className="bottom">
                <div>
                    <div>
                        <h4> Project</h4>
                        <a href="/">change log</a>
                        <a href="/">status</a>
                        <a href="/">licenses</a>
                        <a href="/">Versions</a>
                    </div>

                    <div>
                        <h4> Help</h4>
                        <a href="/">Support</a>
                        <a href="/">Troubleshooting</a>
                        <a href="/">Contact us</a>
                        <a href="/">Terms of Service</a>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Footer