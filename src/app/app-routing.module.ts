import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
    { path: "principal", component: PrincipalComponent },
    { path: "details/:name", component: DetailsComponent },
    { path: "", redirectTo: "/principal", pathMatch: "full" }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
