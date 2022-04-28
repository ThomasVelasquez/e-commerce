import {lazy} from "react";

/* const promiseStore = import('./Screens/Store'); */
const promiseCart = import('./Screens/Cart');
const promiseAbout = import('./Screens/About');
const promiseProductDetail = import('./Screens/ProductDetail');

/* const Store = lazy(() => promiseStore); */
const About = lazy(() => promiseAbout);
const Cart = lazy(() => promiseCart);
const ProductDetail = lazy(() => promiseProductDetail);

const routes = [
    /* { path: '/store', exact: true, name: 'Store', component: Store } */ /* Set as Default */
    { path: '/about', exact: true, name: 'About', component: About },
    { path: '/cart' , exact:true, name:'Cart', component: Cart},
    { path: '/store/:id', exact:true, name:'ProductDetail', component: ProductDetail },
    

]

export default routes;