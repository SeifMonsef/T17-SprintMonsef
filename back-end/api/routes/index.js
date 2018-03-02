var express = require('express'),
  router = express.Router(),
//  productCtrl = require('../controllers/ProductController');
  SeifproductCtrl = require('../controllers/SeifController');

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
//------------------------------Seif Product----------------------------------
router.get('/Seifproduct/getProducts', SeifproductCtrl.getProducts);
router.get('/Seifproduct/getProduct/:productId', SeifproductCtrl.getProduct);
router.get('/Seifproduct/getProductsBelowPrice/:price', SeifproductCtrl.getProductsBelowPrice);
router.post('/Seifproduct/createProduct', SeifproductCtrl.createProduct);
router.patch('/Seifproduct/updateProduct/:productId', SeifproductCtrl.updateProduct);
router.delete('/Seifproduct/deleteProduct/:productId', SeifproductCtrl.deleteProduct);


//-------------------------------Member Routes-----------------------------------
router.get('/member/getMembers', memberCtrl.getMembers);
router.post('/member/createMember', memberCtrl.createMember);
router.patch('/member/updateMember/:memberId', memberCtrl.updateMember);
router.delete('/member/deleteMember/:memberId', memberCtrl.deleteMember);

module.exports = router;
