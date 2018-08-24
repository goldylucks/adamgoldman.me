import Coupons from './couponsModel'

export default {
  validate, getAll, create, del,
}

function getAll(req, res, next) {
  Coupons.find()
    .then(coupons => res.json(coupons))
    .catch(next)
}

function create(req, res, next) {
  Coupons.create(req.body)
    .then(coupon => res.status(201).json(coupon))
    .catch(next)
}

async function validate(req, res, next) {
  const { coupon, product } = req.params
  try {
    const matchingCoupon = await Coupons.findOne({ product, coupon })
    res.json(matchingCoupon)
  } catch (err) {
    next(err)
  }
}

function del(req, res, next) {
  console.log('del coupon')
  console.log(req.params)
  Coupons.deleteOne({ coupon: req.params.coupon })
    .then(coupon => res.json(coupon))
    .catch(next)
}
