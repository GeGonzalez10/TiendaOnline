import React from 'react';

//Icons
import { CollectionsBookmark, Home, ListAlt, Settings, ShoppingCart, } from '@material-ui/icons'; 


export const SidebarData = [
    {
        title: 'Inicio',
        path: '/Home',
        icon: <Home {...{fontSize:"medium"}}/>,
        cName: 'sidebar-text'
    },
    {
        title: 'Productos',
        path: '/Products',
        icon: <ListAlt {...{fontSize:"medium"}}/>,
        cName: 'sidebar-text'
    },
    {
        title: 'Carrito',
        path: '/Carrito',
        icon: <ShoppingCart {...{fontSize:"medium"}}/>,
        cName: 'sidebar-text'
    },
    {
        title: 'Mis Productos',
        path: '/MisProductos',
        icon: <CollectionsBookmark {...{fontSize:"medium"}}/>,
        cName: 'sidebar-text'
    },
    {
        title: 'Soporte',
        path: '/Soporte',
        icon: <Settings {...{fontSize:"medium"}}/>,
        cName: 'sidebar-text'
    },    
];