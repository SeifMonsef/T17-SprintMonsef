var express = require('express'),
  router = express.Router(),
//  productCtrl = require('../controllers/ProductController');
  youssefproductCtrl = require('../controllers/YoussefProductController');

  const authentication = require('../controllers/authentication')(router);
  app = express();
	memberCtrl = require('../controllers/MemberController');


//-------------------------------Product Routes-----------------------------------
// router.get('/product/getProducts', productCtrl.getProducts);
// router.get('/product/getProduct/:productId', productCtrl.getProduct);
// router.get(
//   '/product/getProductsBelowPrice/:price',
//   productCtrl.getProductsBelowPrice
// );
// router.post('/product/createProduct', productCtrl.createProduct);
// router.patch('/product/updateProduct/:productId', productCtrl.updateProduct);
// router.delete('/product/deleteProduct/:productId', productCtrl.deleteProduct);


app.use('/authentication' , authentication);
//------------------------------Youssef Product----------------------------------
router.get('/youssefproduct/getProducts', youssefproductCtrl.getProducts);
router.get('/youssefproduct/getProduct/:productId', youssefproductCtrl.getProduct);
router.get('/youssefproduct/getProductsBelowPrice/:price', youssefproductCtrl.getProductsBelowPrice);
router.post('/youssefproduct/createProduct', youssefproductCtrl.createProduct);
router.patch('/youssefproduct/updateProduct/:productId', youssefproductCtrl.updateProduct);
router.delete('/youssefproduct/deleteProduct/:productId', youssefproductCtrl.deleteProduct);


//-------------------------------Member Routes-----------------------------------
router.get('/member/getMembers', memberCtrl.getMembers);
router.post('/member/createMember', memberCtrl.createMember);
router.patch('/member/updateMember/:memberId', memberCtrl.updateMember);
router.delete('/member/deleteMember/:memberId', memberCtrl.deleteMember);

module.exports = router;
