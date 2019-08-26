import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { BlogContainerComponent } from './layout/components/blog-container/blog-container.component';
import { BlogComponent } from './layout/components/blog/blog.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent
  },
  {
    path: 'blog',
    component: BlogContainerComponent,
    children: [
      {
        path: ':blogId',
        component: BlogComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
