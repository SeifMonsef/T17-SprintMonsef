var mongoose = require('mongoose');
var memberSchema = mongoose.Schema({

   name:{
	type: String,
	required: true,
	trim: true,
	},
   imgURL:{
	type : String,
	required: true,

},
  about:{
  type: String,
  required: true,
  trim: true,
},
	  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: Date
});
mongoose.model('Member', memberSchema);
