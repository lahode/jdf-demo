import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routing';

import { AppComponent } from './app.component';
import { JsonDynamicFormModule } from 'json-dynamic-form';
import { JsonDynamicFormConfig } from 'json-dynamic-form';
import { LoginComponent } from './login/login.component';
import { SampleComponent } from './sample/sample.component';

const JsonDynamicFormConfig: JsonDynamicFormConfig = {
  serverPath: 'http://localhost:4200/assets/'
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SampleComponent
  ],
  imports: [
    BrowserModule,
    JsonDynamicFormModule.forRoot(JsonDynamicFormConfig),
    RouterModule.forRoot(appRoutes, { useHash: false })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
