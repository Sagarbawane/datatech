import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import AddOrder from './components/addOrder'
import Order from './components/order'
import EditOrder from './components/editOrder'


export const App = () => {

    return (
        <BrowserRouter>
            <React.Fragment>
                <Link to='/addOrder' ></Link>
                <Link to='/' ></Link>
                <Link to='/editOrder/:name' ></Link>

                <Route path='/addOrder' component={AddOrder} exact={true}></Route>
                <Route path='/' component={Order} exact={true}></Route>
                <Route path='/editOrder/:name' component={EditOrder} exact={true}></Route>

            </React.Fragment>


        </BrowserRouter>


    )
}
