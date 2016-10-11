import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'rxjs/Rx'; // get everything from Rx

import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
