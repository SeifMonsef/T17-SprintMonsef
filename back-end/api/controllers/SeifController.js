var mongoose = require('mongoose'),
  moment = require('moment'),
  Validations = require('../utils/Validations'),
  SeifProduct = mongoose.model('SeifProduct');

module.exports.getProduct = function(req, res, next) {
  if (!Validations.isObjectId(req.params.productId)) {
    return res.status(422).json({
      err: null,
      msg: 'productId parameter must be a valid ObjectId.',
      data: null
    });
  }
  SeifProduct.findById(req.params.productId).exec(function(err, product) {
    if (err) {
      return next(err);
    }
    if (!product) {
      return res
        .status(404)
        .json({ err: null, msg: 'SeifProduct not found.', data: null });
    }
    res.status(200).json({
      err: null,
      msg: 'SeifProduct retrieved successfully.',
      data: product
    });
  });
};

module.exports.getProducts = function(req, res, next) {
  SeifProduct.find({}).exec(function(err, products) {
    if (err) {
      return next(err);
    }
    res.status(200).json({
      err: null,
      msg: 'SeifProducts retrieved successfully.',
      data: products
    });
  });
};

module.exports.getProductsBelowPrice = function(req, res, next) {
  if (!Validations.isNumber(req.params.price)) {
    return res.status(422).json({
      err: null,
      msg: 'price parameter must be a valid number.',
      data: null
    });
  }
  SeifProduct.find({
    price: {
      $lt: req.params.price
    }
  }).exec(function(err, products) {
    if (err) {
      return next(err);
    }
    res.status(200).json({
      err: null,
      msg:
        'SeifProducts priced below ' +
        req.params.price +
        ' retrieved successfully.',
      data: products
    });
  });
};

module.exports.createProduct = function(req, res, next) {
  var valid =
    req.body.name &&
    Validations.isString(req.body.name) &&
    req.body.price &&
    Validations.isNumber(req.body.price)
    req.body.component &&
    Validations.isString(req.body.component) &&
    req.body.seller &&
    Validations.isNumber(req.body.seller);
  if (!valid) {
    return res.status(422).json({
      err: null,
      msg: 'name(String) and price(Number) are required fields.',
      data: null
    });
  }
  // Security Check
  delete req.body.createdAt;
  delete req.body.updatedAt;

  SeifProduct.create(req.body, function(err, product) {
    if (err) {
      return next(err);
    }
    res.status(201).json({
      err: null,
      msg: 'Product was created successfully.',
      data: product
    });
  });
};

module.exports.updateProduct = function(req, res, next) {
  if (!Validations.isObjectId(req.params.productId)) {
    return res.status(422).json({
      err: null,
      msg: 'productId parameter must be a valid ObjectId.',
      data: null
    });
  }
  var valid =
    req.body.name &&
    Validations.isString(req.body.name) &&
    req.body.price &&
    Validations.isNumber(req.body.price)
    req.body.component &&
    Validations.isString(req.body.component) &&
    req.body.seller &&
    Validations.isNumber(req.body.seller);
  if (!valid) {
    return res.status(422).json({
      err: null,
      msg: 'name(String) and price(Number) are required fields.',
      data: null
    });
  }
  // Security Check
  delete req.body.createdAt;
  req.body.updatedAt = moment().toDate();

  SeifProduct.findByIdAndUpdate(
    req.params.productId,
    {
      $set: req.body
    },
    { new: true }
  ).exec(function(err, updatedProduct) {
    if (err) {
      return next(err);
    }
    if (!updatedProduct) {
      return res
        .status(404)
        .json({ err: null, msg: 'Product not found.', data: null });
    }
    res.status(200).json({
      err: null,
      msg: 'Product was updated successfully.',
      data: updatedProduct
    });
  });
};

module.exports.deleteProduct = function(req, res, next) {
  if (!Validations.isObjectId(req.params.productId)) {
    return res.status(422).json({
      err: null,
      msg: 'productId parameter must be a valid ObjectId.',
      data: null
    });
  }
  SeifProduct.findByIdAndRemove(req.params.productId).exec(function(
    err,
    deletedProduct
  ) {
    if (err) {
      return next(err);
    }
    if (!deletedProduct) {
      return res
        .status(404)
        .json({ err: null, msg: 'SeifProduct not found.', data: null });
    }
    res.status(200).json({
      err: null,
      msg: 'SeifProduct was deleted successfully.',
      data: deletedProduct
    });
  });
};
