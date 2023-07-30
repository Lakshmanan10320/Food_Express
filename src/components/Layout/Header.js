import React , {Fragment} from 'react';
import mealsImage1 from '../../assets/meals1.PNG';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
import ImageSlider, { Slide } from "react-auto-image-slider";
import mealsImage2 from '../../assets/meals2.PNG';
import mealsImage3 from '../../assets/meals3.PNG';
import mealsImage4 from '../../assets/meals4.PNG';
import mealsImage5 from '../../assets/meals5.PNG';
import mealsImage6 from '../../assets/meals6.PNG';
import mealsImage7 from '../../assets/meals7.PNG';


const sliderDish = <ImageSlider effectDelay={500} autoPlayDelay={2000}>
                        <Slide><img alt="img2" src={mealsImage1} /></Slide>
                        <Slide><img alt="img2" src={mealsImage2} /></Slide>
                        <Slide><img alt="img1" src={mealsImage3} /></Slide>
                        <Slide><img alt="img1" src={mealsImage4} /></Slide>
                        <Slide><img alt="img1" src={mealsImage5} /></Slide>
                        <Slide><img alt="img1" src={mealsImage6} /></Slide>
                        <Slide><img alt="img1" src={mealsImage7} /></Slide>
                    </ImageSlider>

const Header = (props) => {
    return <Fragment>
        <header className={classes.header}>
            <h1>Food Express</h1>
            <HeaderCartButton onClick={props.onClick} />
        </header>
        <div className={classes['main-image']}>
            {sliderDish}
        </div>       
    </Fragment>
};

export default Header

/*<img src={mealsImage} alt = 'Delicious food' /> */