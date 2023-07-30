import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Strawberry Cake',
      description: 'Special strawberry cake with fruit topping...',
      price: 2.99,
    },
    {
      id: 'm2',
      name: 'Macarrons Cake',
      description: 'Japanese red bean with cream stuffing...',
      price: 3.50,
    },
    {
      id: 'm3',
      name: 'Korean Pancakes',
      description: 'Beef, carrots topped with grilled onion...',
      price: 4.99,
    },
    {
      id: 'm4',
      name: 'Seafood Pancakes',
      description: 'Spicy seafood with beef and grilled onion...',
      price: 5.99,
    },
  ];

const AvailableMeals = () => {
    const MealsList = DUMMY_MEALS.map(meal => (
    <MealItem 
        id={meal.id}
        key={meal.id} 
        name={meal.name} 
        description={meal.description} 
        price={meal.price}
    />
    ));
    return <section className={classes.meals}>
        <h1>Desserts</h1>
        <Card>
            <ul>            
                {MealsList}              
            </ul>
        </Card>
    </section>
};

export default AvailableMeals;