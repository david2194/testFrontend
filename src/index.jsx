import * as Immutable from 'immutable';
import React from 'react';
import {render} from 'react-dom';
import {state, fetchAbout, fetchPizzaMenu, fetchTopIngredients, fetchTopPizzas} from './state.js'
import About from './components/about.jsx'
import PizzaMenu from './components/pizza.jsx'
import {Layout, Header, Content, Tabs, Tab} from 'react-mdl'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0,
            completeState: state
        };
        this._fetchData();
    };

    _fetchData() {
        fetchAbout().then((about) => {
            const currentState = this.state.completeState;
            this.setState({completeState: currentState.set('about', Immutable.fromJS(about))});
        }).catch((error) => {
            console.log(error);
        });

        fetchPizzaMenu().then((pizzas) => {
            const currentState = this.state.completeState;
            this.setState({completeState: currentState.setIn(['menu', 'pizzas'], Immutable.fromJS(pizzas.pizzas))});
        }).catch((error) => {
            console.log(error);
        });

        fetchTopIngredients().then((ingredients) => {
            const currentState = this.state.completeState;
            this.setState({completeState: currentState.setIn(['menu', 'top_ingredients'], Immutable.fromJS(ingredients.top_ingredients))});
        }).catch((error) => {
            console.log(error);
        });

        fetchTopPizzas().then((pizzas) => {
            const currentState = this.state.completeState;
            this.setState({completeState: currentState.setIn(['menu', 'top_pizzas'], Immutable.fromJS(pizzas.top_pizzas))});
        }).catch((error) => {
            console.log(error);
        });
    };

    render() {
        let sectionContent = <div/>;
        switch(this.state.activeTab) {
            case 0:
                sectionContent = <PizzaMenu state={this.state.completeState.get('menu')}/>;
                break;
            case 1:
                sectionContent = <About state={this.state.completeState.get('about')}/>;
                break;
        }
        return (
            <Layout className='main-layout'>
                <Header title="La Pizzeria à Gilles" className='header-title'/>
                <Content>
                    <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                        <Tab>Pizzas</Tab>
                        <Tab>About</Tab>
                    </Tabs>
                    <section>
                        {sectionContent}
                    </section>
                </Content>
            </Layout>
        )
    };
};

render(<App/>, document.getElementById('app'));
