import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { LocationStrategy, HashLocationStrategy} from '@angular/common';

import {AppComponent} from './app.component';
import {MainComponent} from './main/main.component';
import {InsideComponent} from './inside/inside.component';
import {RouterModule, Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const routes: Routes = [
    {path: '', component: MainComponent},
    {path: 'inside', component: InsideComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        InsideComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        BrowserAnimationsModule
    ],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
    bootstrap: [AppComponent]
})
export class AppModule {
}
