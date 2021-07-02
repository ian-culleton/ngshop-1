import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DogListComponent } from './dog-list/dog-list.component';
import { DogDetailComponent } from './dog-detail/dog-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DogListComponent,
    DogDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
