import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider, connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import store, { fetchColors } from './store';
import Nav from './Nav';
import Home from './Home';
import Colors from './Colors';


class _App extends Component{
    componentDidMount(){
        this.props.fetchColors();
    }
    render(){
        return (
            <div>
                <Route component={ Nav } />
                <Route exact path='/' component={ Home } />
                <Route path='/colors' component={ Colors } />
            </div>
        );
    }
};

const mapDispatch = (dispatch)=> {
    return {
        fetchColors: ()=> dispatch(fetchColors())
    }
}
const App = connect(null, mapDispatch)(_App)

const root = createRoot(document.querySelector('#root'));
root.render(
    <Provider store={ store }>
        <Router>
            <App />
        </Router>
    </Provider>
);