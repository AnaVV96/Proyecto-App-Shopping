import { Routes } from '@angular/router';
import { Wishlist } from './pages/wishlist/wishlist';
import { Profile } from './pages/profile/profile';
import { Home } from './pages/home/home';
import { Carrito } from './pages/carrito/carrito';

export const routes: Routes = [
    {
        path: "",
        component: Home
    },
    {
        path: "wishlist",
        component: Wishlist
    },
    {
        path: "profile",
        component: Profile
    },
    {
        path: "carrito",
        component: Carrito
    },
];
