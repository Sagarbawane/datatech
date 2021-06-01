import React from 'react';
import { connect } from 'react-redux'

import { Add_New_Order } from '../actions/orderAction'




class AddOrder extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      order: '',
      extra: ''
    }
  }

  handleChange = (e) => {

    this.setState({
      [e.target.name]: e.target.value
    })

  }

  handleSubmit = (e) => {
    e.preventDefault()
    const formData = {
      name: (this.state.name),
      order: this.state.order,
      extra: this.state.extra
    }
    console.log(formData)
    this.props.dispatch(Add_New_Order(formData));
    this.props.history.push(`/`);
  }
  handleBack = () => {
    this.props.history.push('/')
  }

  render() {
    return (

      <div className='text-center'>

        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2 >Add Order</h2>

        </div>


        <form onSubmit={this.handleSubmit}>

          <input
            type="text"
            placeholder='Name....'
            id="name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          /> <br />


          <input
            type="text"
            placeholder='Order Count....'
            id="orderLength"
            name="order"
            value={this.state.order}
            onChange={this.handleChange}
          /> <br />

          <input
            type="text"
            placeholder='Description.....'
            id="extraText"
            name="extra"
            value={this.state.extra}
            onChange={this.handleChange}
          /> <br />



          <input type="submit" value="Add Order" />
          <button class="btn btn-danger" onlick={() => {
            this.handleBack()
          }}>Back To Order page..</button>
        </form>

      </div>

    )
  }
}
const mapStateToProps = (state) => {
  return {
    order: state.order
  }
}

export default connect(mapStateToProps)(AddOrder)