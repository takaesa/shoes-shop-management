import MainScreen from "../Home/MainScreen";
import ProductDetails from "../Home/ProductDetails";


const Paths ={
    mainScreen: '/mainScreen',
    productDetails: '/productDetails'
}
const webRoutes = [
    { path: Paths.mainScreen, component: MainScreen},
    { path: Paths.productDetails, component: ProductDetails},
]

export { webRoutes}