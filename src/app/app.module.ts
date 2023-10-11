import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { DetailsComponent } from './details/details.component';
import { CardComponent } from './card/card.component';
import { CreatorComponent } from './creator/creator.component';

@NgModule({
    declarations: [
        AppComponent,
        PrincipalComponent,
        DetailsComponent,
        CardComponent,
        CreatorComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
