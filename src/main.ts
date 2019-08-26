import { ApplicationRef, enableProdMode, NgModuleRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { createNewHosts } from '@angularclass/hmr';

if (environment.production) {
  enableProdMode();
}

const bootstrap = () => platformBrowserDynamic().bootstrapModule(AppModule);

if (environment.hmr) {
  // tslint:disable
  if (module['hot']) {
    let ngModule: NgModuleRef<any>;
    module['hot'].accept();
    bootstrap().then(mod => ngModule = mod);
    module['hot'].dispose(() => {
      const appRef: ApplicationRef = ngModule.injector.get(ApplicationRef);
      const elements = appRef.components.map(c => c.location.nativeElement);
      const makeVisible = createNewHosts(elements);
      ngModule.destroy();
      makeVisible();
    });
  } else {
    console.error('HMR is not enabled for webpack-dev-server!');
    console.log('Are you using the --hmr flag for ng serve?');
  }
} else {
  bootstrap().catch(err => console.log(err));
}
