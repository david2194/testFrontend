import React from 'react'
import {Grid, Cell, Card, CardTitle, CardText, CardActions, Button, DataTable, TableHeader} from 'react-mdl'
import {fetchLikePizza} from '../state.js'


const PizzaItem = ({name, img, description, ingredients, cote}) => {
    const style = {backgroundImage: 'url( data:image/jpg;base64,' + img.data + ')'};
    return (
        <Cell col={4}>
            <Card className='card pizza-card'>
                <CardTitle className='card-title pizza-title' expand style={style}>{name}</CardTitle>
                <CardText>
                    <p>
                        {description}
                    </p>
					<p>
                        {cote}% des Gillois aiment.
                        <CardActions border>
                            <Button colored onClick={() => fetchLikePizza(name, "1")}>J'aime</Button>
                        </CardActions>
                        <CardActions border>
                            <Button colored onClick={() => fetchLikePizza(name, "0")}>Je n'aime pas</Button>
                        </CardActions>
                    </p>
                    <p>
                        Ingrédients:
                    </p>
                    <ul>
                        {ingredients.map((ingredient, _) => <li key={ingredient.id}>{ingredient.name}</li>)}
                    </ul>
                </CardText>
                <CardActions border>
                    <Button colored >ORDER NOW</Button>
                </CardActions>
            </Card>
        </Cell>
    )
};


const TopTen = ({title, items}) => {
    items = items.map((item, index) => ({pos: index + 1, name: item.name})).slice(0, 10);
    return (
        <Cell col={6}>
                <h3>{title}</h3>
                <DataTable
                    rows={items}
                >
                    <TableHeader numeric name="pos" tooltip="Position">Position</TableHeader>
                    <TableHeader name="name" tooltip="Pizza">Pizza</TableHeader>
                </DataTable>
            </Cell>
    )
};


const PizzaMenu = ({state}) => (
    <main>
        <Grid>
            <TopTen {...{title: 'Trending Pizzas', items: state.get('top_pizzas').toJS()}}/>
            <TopTen {...{title: 'Trending Ingredients', items: state.get('top_ingredients').toJS()}}/>
        </Grid>
        <Grid>
        <Cell col={12}>
            <h2>Menu</h2>
        </Cell>
        {state.get('pizzas').toSeq().map(pizza =>
            <PizzaItem
            key={pizza.get('id')}
            {...pizza.toJS()}
            />)}
        </Grid>
    </main>
);

export default PizzaMenu;
