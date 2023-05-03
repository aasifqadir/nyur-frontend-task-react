import '../styles/Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
    let currentDate = new Date();

    let options = {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    };
    let currentTime = new Date();

    let options2 = {
        timeZone: 'Asia/Kolkata',
        hour12: false,
        hour: 'numeric',
        minute: 'numeric'
    };

    var formattedTime = currentTime.toLocaleTimeString('en-IN', options2);

    let formattedDate = currentDate.toLocaleDateString('en-US', options);
    return (
        <div className='footer'>
            <div className="top-left">
                <p>{formattedDate}</p>
                <p>UPDATED : {formattedTime} IST</p>
            </div> 
            <div className="top-right">
                <FacebookIcon />
                <InstagramIcon />
                <TwitterIcon />
            </div>
        </div>
    );
}

export default Footer;