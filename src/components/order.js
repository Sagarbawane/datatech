import React from "react";
import { connect } from 'react-redux'
import { Delete_Order } from '../actions/orderAction'



class Order extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    AddOrder = () => {
        this.props.history.push(`/addOrder`);
    }
    EditOrder = (name) => {
        this.props.history.push(`/editOrder/${name}`);
    }


    render() {
        console.log('render')
        return (
            <div className='text-center'>
                <div className='container'>
                    <div className='col-md-10 col-md-offset-1 section-title'>
                        <h2 >My Order</h2>
                        <button class="btn btn-danger" onClick={() => {
                            this.AddOrder()
                        }} >Add New Order</button>
                    </div>

                    <div className='row'>
                        {this.props.order
                            ? this.props.order.map((ele, i) => (
                                <div key={`${ele.title}-${i}`} className='col-xs-12 col-md-4' >
                                    {' '}
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsPoQQX213nBxQtu_bsYB76Z2Bg4dfP6IIdszVx6WY_8VIoMSm4GYmHp9l8dR1XfamyvY&usqp=CAU" alt='product' />
                                    <h3>{ele.name}</h3>
                                    <h4>{ele.order}</h4>
                                    <h4>{ele.extra}</h4>
                                    <button class="btn btn-danger" onClick={() => {
                                        this.props.dispatch(Delete_Order(ele.name))
                                    }} >delete</button>
                                    <button class="btn btn-danger" onClick={() => {
                                        this.EditOrder(ele.name)
                                    }} >Edit</button>
                                </div>
                            ))
                            : 'Loading...'}
                    </div>
                </div>

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        order: state.order
    };
};
export default connect(mapStateToProps)(Order);


