import React from 'react';
import {render} from 'react-dom';
import state from './state.js'
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
    }

    render() {
        let sectionContent = <div/>;
        switch(this.state.activeTab) {
            case 0:
                sectionContent = <PizzaMenu state={state.getIn(['state', 'menu'])}/>;
                break;
            case 1:
                sectionContent = <About state={state.getIn(['state', 'about'])}/>;
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
    }
};

render(<App/>, document.getElementById('app'));
