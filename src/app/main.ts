import { AppModule } from './app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'rxjs';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
