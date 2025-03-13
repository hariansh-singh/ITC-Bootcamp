const express=require('express');
const router=express.Router();
const multer = require('multer');
const {
    saveProduct,
    searchProducts,
    getProductCategories,
    getProductById,
    updateProductDetails,
    deleteProduct
  } = require("../controllers/ProductController");
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }

}

var upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

const {loginUser,registerUser}=require('../controllers/AuthController');
const verifyToken = require('../middleware/authJWT');
router.post("/api/v1/auth",loginUser);
router.post("/api/v1/signup",registerUser);
//Product
router.post("/api/v1/products",upload.single('attach'),saveProduct);
router.get("/api/v1/products",verifyToken,searchProducts);
router.get("/api/v1/products/categories", getProductCategories);
router.get("/api/v1/products/:id", getProductById);
router.put("/api/v1/products/:id", updateProductDetails);
router.delete("/api/v1/products/:id", deleteProduct);
module.exports=router;
