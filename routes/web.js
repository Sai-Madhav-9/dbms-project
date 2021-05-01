const homeController = require('../app/http/controllers/homeController')
const forgotController = require('../app/http/controllers/forgotController')
const joinController = require('../app/http/controllers/joinController')
const offersController = require('../app/http/controllers/offersController')
const recipeController = require('../app/http/controllers/recipeController')
const feedbackController = require('../app/http/controllers/feedbackController')
const menuController = require('../app/http/controllers/menuController')
const authController = require('../app/http/controllers/authController')
const cartController = require('../app/http/controllers/customers/cartController')
const orderController = require('../app/http/controllers/customers/orderController')
const adminOrderController = require('../app/http/controllers/admin/orderController')
const statusController = require('../app/http/controllers/admin/statusController')

//all data
const alljoinController = require('../app/http/controllers/alljoinController')
const alloffersController = require('../app/http/controllers/alloffersController')
const allrecipeController = require('../app/http/controllers/allrecipeController')
const allfeedbackController = require('../app/http/controllers/allfeedbackController')
const allorderController = require('../app/http/controllers/allorderController')

// Middlewares 
const guest = require('../app/http/middlewares/guest')
const auth = require('../app/http/middlewares/auth')
const admin = require('../app/http/middlewares/admin')


const {
    signUpController,
    resetPasswordRequestController,
    resetPasswordController,
} = require("../app/http/controllers/auth.controller");
  

function initRoutes(app) {
    app.get('/', homeController().index)

    app.get('/join-Our-Chain', joinController().index)
    app.post('/join-Our-Chain', joinController().postJoin)

    app.get('/alljoin', auth,  alljoinController().index)
    app.get('/allfeedback', auth, allfeedbackController().index)
    app.get('/allorder', auth, allorderController().index)
    app.get('/allrecipe', auth, allrecipeController().index)
    app.get('/alloffers', auth, alloffersController().index)

    app.get('/feedback',feedbackController().index)
    app.post('/feedback',feedbackController().postFeedback)
    
    app.get('/recipe',recipeController().index)
    app.post('/recipe',recipeController().postRecipe)

    app.get('/set-offers',offersController().index)
    app.post('/set-offers',offersController().postOffer)


    app.get('/menu',menuController().index)
    app.get('/login', guest, authController().login)
    app.post('/login', authController().postLogin)
    app.get('/register', guest, authController().register)
    app.post('/register', authController().postRegister)
    app.post('/logout', authController().logout)

    app.get('/cart', cartController().index)
    app.post('/update-cart', cartController().update)

    // Customer routes
    app.post('/orders', auth,  orderController().store)
    app.post('/clear-cart', orderController().clear)
    
    app.get('/customer/orders', auth, orderController().index)
    app.get('/customer/orders/:id', auth, orderController().show)

    //cancel order
    app.get('/customer/orders/cancel/:id', auth, orderController().cancelOrder)

    // Admin routes
    app.get('/admin/orders', admin, adminOrderController().index)
    app.post('/admin/order/status', admin, statusController().update)


    //password reset
    // app.post("/auth/signup", signUpController);
    app.get('/forgotpassword',forgotController().index)
    app.get('/passwordReset/:token/:id',forgotController().show)
    app.post("/auth/requestResetPassword", resetPasswordRequestController);
    app.post("/auth/resetPassword", resetPasswordController);


}

module.exports = initRoutes

