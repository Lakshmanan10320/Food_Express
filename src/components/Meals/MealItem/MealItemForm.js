import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';
import { useRef,useState } from 'react';

const MealItemForm = (props) => {
    const amountInputRef = useRef();
    const [amountIsValid, setAmountIsValid] = useState(true);
    const submitHandler = event => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmounNumber = +enteredAmount;
        if(enteredAmount.trim().length === 0 || enteredAmount.trim().length < 1 || enteredAmount.trim().length > 5 ){
            setAmountIsValid(false);
            return;
        }
        props.onAddToCart(enteredAmounNumber);
    }

    return <form className={classes.form} onSubmit={submitHandler}>
        <Input ref={amountInputRef} label="Amount" input={{
            id:'amount_'+ props.id,
            type: 'number',
            min: '1',
            max:'5',
            defaultValue:'1'

        }} />
        <button>+ Add to Cart</button>
        {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
};

export default MealItemForm;