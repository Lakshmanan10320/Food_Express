import classes from './MealsSummary.module.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from '../../assets/cimg1.PNG';
import img2 from '../../assets/cimg2.PNG';
import img3 from '../../assets/cimg3.PNG';
import img4 from '../../assets/cimg4.PNG';
import img5 from '../../assets/cimg5.PNG';
import img6 from '../../assets/cimg6.PNG';
import img7 from '../../assets/cimg7.PNG';
import img8 from '../../assets/cimg8.PNG';
import img9 from '../../assets/cimg9.PNG';
import img10 from '../../assets/cimg10.PNG';
import img11 from '../../assets/cimg11.PNG';
import img12 from '../../assets/cimg12.PNG';
import img13 from '../../assets/cimg13.PNG';
import img14 from '../../assets/cimg14.PNG';
import Product from './MealCard';

const MealsSummary = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
      slidesToSlide: 2
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const mealData = [
    {
      id: 1,
      imageurl: img1,
      name: "Morzzi",
      price: "19.99",
      description: "Finest fish and veggies combo...",
    },
    {
      id: 2,
      imageurl:img2,
      name: "Mexican Sushi",
      price: "23.99",
      description: "Spicy...mexican sandwich style...",
    },
    {
      id: 3,
      imageurl:img3,
      name: "Lashi Burger",
      price: "39.99",
      description: "A german specialty, raw, tasty!",
    },
    {
      id: 4,
      imageurl:img4,
      name: "Parzapew",
      price: "10.99",
      description: "Healthy...and green...drink...",
    },
    {
      id: 5,
      imageurl:img5,
      name: "Schnitzel",
      price: "20.99",
      description: "American special, raw, meaty",
    },
    {
      id: 6,
      imageurl:img6,
      name: "cheese Pizza",
      price: "40.99",
      description: "Enjoy the delecious Pizza at home...",
    },
    {
      id: 7,
      imageurl:img7,
      name: "Green Bowl",
      price: "19.99",
      description: "Healthy greens...home-made...",
    },
    {
      id: 8,
      imageurl: img1,
      name: "Morzzi",
      price: "19.99",
      description: "Finest fish and veggies combo...",
    },
    {
      id: 9,
      imageurl:img2,
      name: "Mexican Sushi",
      price: "23.99",
      description: "Spicy...mexican sandwich style...",
    },
    {
      id: 10,
      imageurl:img3,
      name: "Lashi Burger",
      price: "39.99",
      description: "A german specialty, raw, tasty",
    },
    {
      id: 11,
      imageurl:img4,
      name: "Parzapew",
      price: "10.99",
      description: "Healthy...and green...drink...",
    },
    {
      id: 12,
      imageurl:img5,
      name: "Schnitzel",
      price: "20.99",
      description: "American special, raw, meaty",
    },
    {
      id: 13,
      imageurl:img6,
      name: "cheese Pizza",
      price: "40.99",
      description: "Enjoy the delecious Pizza at home...",
    },
    {
      id: 14,
      imageurl:img7,
      name: "Green Bowl",
      price: "19.99",
      description: "Healthy greens...home-made...",
    }
  ];

  const mealData2 = [
    {
      id: 8,
      imageurl: img8,
      name: "Fire Jillebi",
      price: "19.99",
      description: "Finest sweet and veggies combo...",
    },
    {
      id: 9,
      imageurl:img9,
      name: "Litti Chokha",
      price: "23.99",
      description: "Wheat flour, stuffed with gram flour",
    },
    {
      id: 10,
      imageurl:img10,
      name: "Dahi Bhalle",
      price: "12.99",
      description: "A Marathi special, raw, tasty!",
    },
    {
      id: 11,
      imageurl:img11,
      name: "Pav Bhaji",
      price: "10.99",
      description: "Tasty, spicy Pav Bhaji... ",
    },
    {
      id: 12,
      imageurl:img12,
      name: "Masal Dosa",
      price: "20.99",
      description: "Tamil Nadu special, tasty!",
    },
    {
      id: 13,
      imageurl:img13,
      name: "chicken Curry",
      price: "40.99",
      description: "Enjoy the delecious Curry at home...",
    },
    {
      id: 14,
      imageurl:img14,
      name: "Rava Idly",
      price: "19.99",
      description: "Healthy dish...home-made...",
    },
    {
      id: 15,
      imageurl: img8,
      name: "Fire Jillebi",
      price: "19.99",
      description: "Finest sweet and veggies combo...",
    },
    {
      id: 16,
      imageurl:img9,
      name: "Litti Chokha",
      price: "23.99",
      description: "Wheat flour, stuffed with gram flour",
    },
    {
      id: 17,
      imageurl:img10,
      name: "Dahi Bhalle",
      price: "12.99",
      description: "A Marathi special, raw, tasty!",
    },
    {
      id: 18,
      imageurl:img11,
      name: "Pav Bhaji",
      price: "10.99",
      description: "Tasty, spicy Pav Bhaji... ",
    },
    {
      id: 19,
      imageurl:img12,
      name: "Masal Dosa",
      price: "20.99",
      description: "Tamil Nadu special, tasty!",
    },
    {
      id: 20,
      imageurl:img13,
      name: "chicken Curry",
      price: "40.99",
      description: "Enjoy the delecious Curry at home...",
    },
    {
      id: 21,
      imageurl:img14,
      name: "Rava Idly",
      price: "19.99",
      description: "Healthy dish...home-made...",
    }
  ];

  const product = mealData.map((item) => (
    <Product
      id={item.id}
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));

  const product2 = mealData2.map((item) => (
    <Product
      id={item.id}
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));

    return <div>
      <section className={classes.summary}>
        <h2>WAKE UP, IT'S FOOD TIME</h2>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time and
          of course by experienced chefs!
        </p>
        <p>
          Food is the ingredient that binds us together{String.fromCodePoint('0x1f603')}
        </p>
      </section>
      <div>
      <h1>Continental</h1>
        <Carousel responsive={responsive}>
            {product}
        </Carousel>
        
      </div>
      <hr />
      <div>
      <h1>Indian</h1>
        <Carousel responsive={responsive}>
            {product2}
        </Carousel>
        
      </div>
      <hr />
  </div>
}

export default MealsSummary;

/*<div className={classes.card}>
                <img className={classes['product--image']} src={img1} alt='food image' />
                <h2>Fish Finger</h2>
                <p className={classes.price}>$20.99</p>
                <p>Enjoy a delicious food at home</p>
                <p><button>Add to Cart</button></p>
            </div>
            <div className={classes.card}>
                <img className={classes['product--image']} src={img2} alt='food image' />
                <h2>Fish Finger</h2>
                <p className={classes.price}>$20.99</p>
                <p>Enjoy a delicious food at home</p>
                <p><button>Add to Cart</button></p>
            </div>
            <div className={classes.card}>
                <img className={classes['product--image']} src={img3} alt='food image' />
                <h2>Fish Finger</h2>
                <p className={classes.price}>$20.99</p>
                <p>Enjoy a delicious food at home</p>
                <p><button>Add to Cart</button></p>
            </div>
            <div className={classes.card}>
                <img className={classes['product--image']} src={img4} alt='food image' />
                <h2>Fish Finger</h2>
                <p className={classes.price}>$20.99</p>
                <p>Enjoy a delicious food at home</p>
                <p><button>Add to Cart</button></p>
            </div>
            <div className={classes.card}>
                <img className={classes['product--image']} src={img5} alt='food image' />
                <h2>Fish Finger</h2>
                <p className={classes.price}>$20.99</p>
                <p>Enjoy a delicious food at home</p>
                <p><button>Add to Cart</button></p>
            </div>*/