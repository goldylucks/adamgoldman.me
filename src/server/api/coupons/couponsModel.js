import mongoose from 'mongoose'

const { Schema } = mongoose
const CouponsSchema = getSchema()

export default (function couponsModel() {
  let coupons
  try {
    coupons = mongoose.model('coupons')
  } catch (error) {
    coupons = mongoose.model('coupons', CouponsSchema)
  }
  return coupons
}())

function getSchema() {
  return new Schema({
    coupon: String,
    product: String,
    price: Number,
  })
}
