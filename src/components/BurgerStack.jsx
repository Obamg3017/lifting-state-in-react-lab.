

const BurgerStack = (props) => {
  const handleRemoveFromBurger = (ingredient) =>{
    props.removeFromBurger(ingredient)
  }
  
  
    return(
        <ul>
            {props.ingredients.map((ingredient, index)=>{
                return(
                    <li key={index} style={{ backgroundColor : ingredient.color}}>
                        {ingredient.name}
                        <button onClick={()=>{handleRemoveFromBurger(index)}}>X</button>
                    </li>
                )
            })}
        </ul>
    )
};

export default BurgerStack;
