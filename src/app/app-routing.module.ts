import { ConveyHeartInfoComponent } from './convey-heart-info/convey-heart-info.component';
import { NgModule } from '@angular/core';
import { BulletinComponent } from './bulletin/bulletin.component';
import { MapComponent } from './map/map.component';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
    { path: '', component: MapComponent },
    { path: 'map', component: MapComponent },
    { path: 'bulletin', component: BulletinComponent },
    { path: 'convey-heart', component: ConveyHeartInfoComponent }
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
