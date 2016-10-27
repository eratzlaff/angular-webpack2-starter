import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, PreloadAllModules } from '@angular/router';

// import { EffectsModule } from '@ngrx/effects';
// import { RouterStoreModule } from '@ngrx/router-store';
// import { StoreModule } from '@ngrx/store';

// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { routes } from './app.routing';
// import { rootReducer } from './reducers';
// import { StoreDevToolsModule } from './features/store-devtools.module';
// import { UserEffects } from './user/user.effects';

export const APP_IMPORTS = [
  // EffectsModule.run(UserEffects),
  // NgbModule.forRoot(),
  ReactiveFormsModule,
  RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  // RouterStoreModule.connectRouter(),
  // StoreDevToolsModule,
  // StoreModule.provideStore(rootReducer)
];

