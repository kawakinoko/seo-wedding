import { NgModule } from '@angular/core';
// RECOMMENDED (doesn't work with system.js)
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
    imports: [
        TabsModule.forRoot()
    ],
    exports: [
        TabsModule
    ]
})
export class AppBootstrapModule { }
