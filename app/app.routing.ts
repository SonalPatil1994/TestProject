import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './components/user.component';
import { HomeComponent } from './components/home.component';
import { SupplierComponent } from './components/supplier.component';
import { ProductComponent } from './components/product.component';





const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'user', component: UserComponent },
    { path: 'supplier', component: SupplierComponent },
    { path: 'product', component: ProductComponent }
];

export const routing: ModuleWithProviders =
    RouterModule.forRoot(appRoutes);