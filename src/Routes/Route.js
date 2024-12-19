import MainScreen from "../Home/MainScreen";
import ProductDetails from "../Home/ProductDetails";
import Profile from "../Home/Profile"
import SignUp from "../Login/SignUp";
import SignIn from "../Login/SignIn";
import Cart from "../Home/Cart"
import ProductTypePage from "../Home/ProductTypePage";
import SellerHome from "../Seller/Home";
import SellerProducts from "../Seller/Products";
import SerllerOrders from "../Seller/Orders";
import AdminCategory from "../Admin/Category";
import AdminVouchers from "../Admin/Voucher"

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
    sellerorders: '/sellerorders',
    admincategory: '/admin/category',
    adminvouchers: '/admin/vouchers',
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
    { path: Paths.sellerorders, component: SerllerOrders },
    { path: Paths.admincategory, component: AdminCategory },
    { path: Paths.adminvouchers, component: AdminVouchers },

]

export { webRoutes }