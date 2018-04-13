import { NgModule } from '@angular/core';
import { BulletinComponent } from './bulletin/bulletin.component';
import { MapComponent } from './map/map.component';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
    { path: '', component: MapComponent },
    { path: 'map', component: MapComponent },
    { path: 'bulletin', component: BulletinComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { useHash: true }
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
