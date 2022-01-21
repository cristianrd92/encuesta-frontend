import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EncuestaService } from './services/encuesta.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgSelectModule,
    AppRoutingModule
  ],
  providers: [EncuestaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
