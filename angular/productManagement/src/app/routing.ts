import { AppComponent } from './app.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ShowProductComponent } from './show-product/show-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { MainComponent } from './main/main.component';
import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
    { path: '', component: MainComponent, pathMatch: 'full' },
    { path: 'products', component: ShowProductComponent },
    { path: 'products/new', component: AddProductComponent },
    { path: 'products/edit/:id', component: EditProductComponent }
];
export const routing = RouterModule.forRoot(APP_ROUTES);