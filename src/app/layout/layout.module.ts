import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { AsideComponent } from './components/aside/aside.component';
import { BlogComponent } from './components/blog/blog.component';
import { FooterComponent } from './components/footer/footer.component';
import { BlogContainerComponent } from './components/blog-container/blog-container.component';


@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent,
    AsideComponent,
    BlogComponent,
    FooterComponent,
    BlogContainerComponent
  ],
  exports: [
    HeaderComponent,
    MainComponent,
    AsideComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule {
}
