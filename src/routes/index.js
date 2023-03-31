import Contact from "../pages/Contact";
import LifeStyle from "../pages/LifeStyle/LifeStyle";
import Home from "../pages/Home"
import Shop from "../pages/Shop";
import Cart from "../pages/Cart/Cart";
import Login from "../pages/Login"
import ProductDetail from "../pages/ProductDetail";
import NotFound from "../pages/NotFound";
import Policy from "../components/Layout/Footer/Policy";
import Company from "../components/Layout/Footer/Company"
import Recruiment from "../components/Layout/Footer/Recruiment"
import SystemShop from "../components/Layout/Footer/SystemShop";
import Guideshop from "../components/Layout/Footer/Guideshop";
import PaymentPolicy from "../components/Layout/Footer/PaymentPolicy";
// import ReturnPolicy from "../components/Layout/Footer/ReturnPolicy";
import News from "../pages/LifeStyle/News";
import Knowledge from "../pages/LifeStyle/Knowledge";
import Trend from "../pages/LifeStyle/Trend";
import Style from "../pages/LifeStyle/Style";
import Blogs from "../pages/LifeStyle/Blogs"
import ReturnPolicy from "../components/Layout/Footer/ReturnPolicy";

const publicRoutes = [
    {
        path: '/', component: Home
    },
    {
        path: '/contact', component: Contact
    },
    {
        path: '/shop', component: Shop

    },
    {
        path: '/shop/:id', component: ProductDetail
    },
    {
        path: '/lifestyle', component: LifeStyle
    },
    {
        path: '/lifestyle/news', component: News
    },
    {
        path: '/lifestyle/knowledge', component: Knowledge
    },
    {
        path: '/lifestyle/trend', component: Trend
    },
    {
        path: '/lifestyle/style', component: Style
    },
    {
        path: '/lifestyle/blogs', component: Blogs
    },
    {
        path: '/login', component: Login
    },
    {
        path: '/cart', component: Cart
    },
    {
        path: '/policy', component: Policy
    },
    {
        path: '/company', component: Company
    },
    {
        path: '/recruiment', component: Recruiment
    },
    {
        path: '/system-shop', component: SystemShop
    },
    {
        path: '/guide-shop', component: Guideshop
    },
    {
        path: '/payment-policy', component: PaymentPolicy
    },
    {
        path: '/return-policy', component: ReturnPolicy
    },
    {
        path: '/*', component: NotFound
    }
]
export default publicRoutes