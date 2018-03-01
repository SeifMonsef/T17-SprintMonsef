var mongoose = require('mongoose'),
  moment = require('moment'),
  Validations = require('../utils/Validations'),
  Member = mongoose.model('Member');

module.exports.getMember = function(req, res, next) {
  if (!Validations.isObjectId(req.params.memberId)) {
    return res.status(422).json({
      err: null,
      msg: 'memberId parameter must be a valid ObjectId.',
      data: null
    });
  }
  Member.findById(req.params.memberId).exec(function(err, member) {
    if (err) {
      return next(err);
    }
    if (!member) {
      return res
        .status(404)
        .json({ err: null, msg: 'Member not found.', data: null });
    }
    res.status(200).json({
      err: null,
      msg: 'Member retrieved successfully.',
      data: member
    });
  });
};

module.exports.getMembers = function(req, res, next) {
  Member.find({}).exec(function(err, members) {
    if (err) {
      return next(err);
    }
    res.status(200).json({
      err: null,
      msg: 'Members retrieved successfully.',
      data: members
    });
  });
};



module.exports.createMember = function(req, res, next) {
  var valid =
    req.body.name &&
    Validations.isString(req.body.name) ;
  if (!valid) {
    return res.status(422).json({
      err: null,
      msg: 'name(String) , imgURL(String) and about(String) are required fields.',
      data: null
    });
  }
  // Security Check
  delete req.body.createdAt;
  delete req.body.updatedAt;

  Member.create(req.body, function(err, member) {
    if (err) {
      return next(err);
    }
    res.status(201).json({
      err: null,
      msg: 'Member was created successfully.',
      data: member
    });
  });
};

module.exports.updateMember = function(req, res, next) {
  if (!Validations.isObjectId(req.params.memberId)) {
    return res.status(422).json({
      err: null,
      msg: 'MemberId parameter must be a valid ObjectId.',
      data: null
    });
  }
  var valid =
    req.body.name &&
    Validations.isString(req.body.name);
  if (!valid) {
    return res.status(422).json({
      err: null,
      msg: 'name(String) , imgURL(String) and about(String) are required fields.',
      data: null
    });
  }
  // Security Check
  delete req.body.createdAt;
  req.body.updatedAt = moment().toDate();

  Member.findByIdAndUpdate(
    req.params.memberId,
    {
      $set: req.body
    },
    { new: true }
  ).exec(function(err, updatedMember) {
    if (err) {
      return next(err);
    }
    if (!updatedMember) {
      return res
        .status(404)
        .json({ err: null, msg: 'Member not found.', data: null });
    }
    res.status(200).json({
      err: null,
      msg: 'Member was updated successfully.',
      data: updatedMember
    });
  });
};

module.exports.deleteMember = function(req, res, next) {
  if (!Validations.isObjectId(req.params.MemberId)) {
    return res.status(422).json({
      err: null,
      msg: 'MemberId parameter must be a valid ObjectId.',
      data: null
    });
  }
  Product.findByIdAndRemove(req.params.MemberId).exec(function(
    err,
    deletedMember
  ) {
    if (err) {
      return next(err);
    }
    if (!deletedMember) {
      return res
        .status(404)
        .json({ err: null, msg: 'Member not found.', data: null });
    }
    res.status(200).json({
      err: null,
      msg: 'Member was deleted successfully.',
      data: deletedMember
    });
  });
};
