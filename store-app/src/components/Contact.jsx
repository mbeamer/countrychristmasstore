import React from 'react'
import directions_map from '../img/map.png';
import facebook_img from '../img/facebook_scaled.png';
import twitter_img from '../img/twitter_scaled.png';


const divIntro = {
    left:'50'
}

const divMap = {
    right:'50'
}

const Contact = () => {
    return (
        <div class='context'>
            <div style={divIntro}>The Country Christmas Store is a venue that features unique one of a kind artisans and crafters and is located in the beautiful rural area of Pelham situated in the center of the Niagara Peninsula. It is held in a newly renovated barn and boasts about 3500 square feet of retail space on two levels, handicap accessible, complete with 2 natural gas fireplaces, an electric fireplace.<br />
            <div>
            <br />
            Find us on FaceBook and Twitter<br />
            <a href="https://www.facebook.com/thecountrychristmasstore"><img src={facebook_img} alt='facebook link' /></a>
            <a href="https://www.twitter.com/tccs1794}"><img src={twitter_img} alt='twitter link'/></a>
            <br />
            <br />
WANT UPDATES?<br />
<br />
If you would like to receive updates regarding upcoming events please complete the form below.  Looking forward to hearing from you soon!<br />
<br />
WANT TO PARTICAPATE?<br />
<br />
The country Christmas Store is adding new vendors every single year. If you would like to become one of them, contact us using the box below.
            </div>

            </div>
            <div style={divMap}>
                <img src={directions_map} alt='directions to the store'/>
<br />
<br />1794 Centre Street<br />
RR # 1<br />
Ridgeville,  ON <br />
L0S 1M0<br />
Tel: 905 714 2069<br />
thecountrychristmasstore@gmail.com
            </div>
        </div>
    );
}

export default Contact