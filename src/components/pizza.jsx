import React from 'react'
import {Grid, Cell, Card, CardTitle, CardText, CardActions, Button} from 'react-mdl'


const PizzaItem = ({name, img, description, ingredients}) => {
    const style = {backgroundImage: 'url(' + img + ')'}
    return (
        <Cell col={4}>
            <Card className='card pizza-card'>
                <CardTitle className='card-title pizza-title' expand style={style}>{name}</CardTitle>
                <CardText>
                    <p>
                        {description}
                    </p>
                    <p>
                        Ingrédients:
                    </p>
                    <ul>
                        {ingredients.map((ingredient, _) => <li key={ingredient.id}>ingredient.name</li>)}
                    </ul>
                </CardText>
                <CardActions border>
                    <Button colored >ORDER NOW</Button>
                </CardActions>
            </Card>
        </Cell>
    )
};


const PizzaMenu = ({state}) => (
    <Grid>
    {state.get('pizzas').toSeq().map(pizza =>
        <PizzaItem
        key={pizza.get('id')}
        {...pizza.toJS()}
        />)}
    </Grid>
);

export default PizzaMenu;
