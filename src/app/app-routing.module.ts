import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IntroComponent } from './intro/intro.component';
import { ProductsComponent } from './products/products.component';
import { AppsComponent } from './apps/apps.component';
import { PhotosComponent } from './photos/photos.component';
import { D3PrintsComponent } from './d3-prints/d3-prints.component';

const routes: Routes = [
  { path: '', redirectTo: '/intro', pathMatch: 'full' },
  { path: 'intro', component: IntroComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'apps', component: AppsComponent },
  { path: 'products', component: ProductsComponent },
  { path: '3dprints', component: D3PrintsComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
