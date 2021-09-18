// @flow
import React from 'react'
import axios from 'axios'

import { isAdam, isProd } from '../../utils'
import history from '../../history'

type Props = {}

class AdminCoupons extends React.Component {
  state = {
    coupons: [],
    isFetchingCoupons: true,
    newCoupon: '',
    newProduct: '',
  }
  componentDidMount() {
    if (isProd && !isAdam()) {
      global.alert('you are not allowed on this page')
      history.push('/')
      return
    }
    this.fetchCoupons()
  }
  props: Props
  render() {
    return (
      <React.Fragment>
        <div className='container'>
          <div className='mainheading'>
            <h1 className='sitetitle'>Admin Coupons</h1>
          </div>
          {this.renderNewCouponForm()}
          {this.renderCoupons()}
        </div>
      </React.Fragment>
    )
  }

  renderCoupons() {
    if (this.state.isFetchingCoupons) {
      return <h1>Loading ...</h1>
    }
    return (
      <div>
        <h1>Coupons</h1>
        {this.state.coupons.map(coupon => (
          <div>
            <div>Product: {coupon.product}</div>
            <div>Coupon: {coupon.coupon}</div>
            <button onClick={() => this.deleteCoupon(coupon.coupon)}>
              Delete
            </button>
            <hr />
          </div>
        ))}
      </div>
    )
  }

  renderNewCouponForm() {
    return (
      <div>
        <form onSubmit={this.createCoupon}>
          <h3>Create Coupon</h3>
          <div>
            Product:
            <input
              value={this.state.newProduct}
              onChange={this.onProductChange}
            />
          </div>
          <div>
            Coupon:
            <input
              value={this.state.newCoupon}
              onChange={this.onCouponChange}
            />
          </div>
          <button>Submit</button>
        </form>
        <hr />
      </div>
    )
  }

  onProductChange = evt => {
    this.setState({ newProduct: evt.target.value })
  }
  onCouponChange = evt => {
    this.setState({ newCoupon: evt.target.value })
  }

  fetchCoupons() {
    axios
      .get('/api/coupons/getAll')
      .then(({ data }) =>
        this.setState({ coupons: data, isFetchingCoupons: false }),
      )
      .catch(err => {
        global.console.log(err)
        this.setState({ isFetchingCoupons: false })
      })
  }

  createCoupon = evt => {
    evt.preventDefault()
    const { newCoupon, newProduct } = this.state
    axios
      .post('/api/coupons/create', { coupon: newCoupon, product: newProduct })
      .then(res => {
        global.console.log(res)
        const createdCoupon = res.data
        this.setState(state => ({
          coupons: [createdCoupon].concat(state.coupons),
        }))
      })
      .catch(err => {
        global.alert(err.message)
        global.console.error(err)
      })
  }

  deleteCoupon(coupon) {
    axios
      .delete(`/api/coupons/delete/${coupon}`)
      .then(() => {
        global.console.log('deleted successfully')
        this.setState(state => ({
          coupons: state.coupons.filter(c => c.coupon !== coupon),
        }))
      })
      .catch(err => {
        global.alert('error deleting coupon')
        global.console.error(err)
      })
  }
}

export default AdminCoupons
