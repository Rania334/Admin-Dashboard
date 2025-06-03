import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { DashboardComponent } from './app/pages/dashboard/dashboard.component';
import { AdminProfileComponent } from './app/pages/admin-profile/admin-profile.component';
import { CategoryListComponent } from './app/components/CategoriesAndProducts/category-list/category-list.component';
import { CategoryFormComponent } from './app/components/CategoriesAndProducts/category-form/category-form.component';
import { CatProductListComponent } from './app/components/CategoriesAndProducts/cat-product-list/cat-product-list.component';
import { PageOneComponent } from './app/components/UserVendor/page-one/page-one.component';
import { HomeComponent } from './app/pages/home/home.component';
import { AuthGuard } from './app/guards/auth.guard';
import { LoginComponent } from './app/pages/login/login.component';


const routes: Routes = [
 { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'Settings', component: AdminProfileComponent, canActivate: [AuthGuard] },
  { path: 'categories', component: CategoryListComponent, canActivate: [AuthGuard] },
  { path: 'add-category', component: CategoryFormComponent, canActivate: [AuthGuard] },
  { path: 'edit-category/:id', component: CategoryFormComponent, canActivate: [AuthGuard] },
  { path: 'products/cat/:id', component: CatProductListComponent, canActivate: [AuthGuard] },
  { path: 'Control', component: PageOneComponent, canActivate: [AuthGuard] },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    provideRouter(routes),
    
  ]
}).catch(err => console.error(err));