import MainScreen from "../Home/MainScreen";
import ProductDetails from "../Home/ProductDetails";
import Profile from "../Home/Profile"
import SignUp from "../Login/SignUp";
import SignIn from "../Login/SignIn";
import Cart from "../Home/Cart"
import ProductTypePage from "../Home/ProductTypePage";
import SellerHome from "../Seller/Home";
import SellerProducts from "../Seller/Products";


const Paths = {
    home: '/',
    productDetails: '/productDetails',
    profile: '/profile',
    signup: '/signup',
    signin: '/signin',
    cart: '/cart',
    productPage: '/productPage',
    sellerhome: '/sellerhome',
    sellerproducts: '/sellerproducts',
}
const webRoutes = [
    { path: Paths.home, component: MainScreen },
    { path: Paths.productDetails, component: ProductDetails },
    { path: Paths.profile, component: Profile },
    { path: Paths.signup, component: SignUp },
    { path: Paths.signin, component: SignIn },
    { path: Paths.cart, component: Cart },
    { path: Paths.productPage, component: ProductTypePage },
    { path: Paths.sellerhome, component: SellerHome },
    { path: Paths.sellerproducts, component: SellerProducts },

]

export { webRoutes }