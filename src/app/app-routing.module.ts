import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent},
  { path: 'form', loadChildren: () => import('./form/form.module').then((m) => m.FormModule) },
  { path: 'card', loadChildren: () => import('./card/card.module').then((m) => m.CardModule) },
  { path: 'percentage',
    loadChildren: () => import('./percentage-in-circle/percentage-in-circle.module').then((m) => m.PercentageInCircleModule)
  },
  { path: 'cdkDragDrop',
    loadChildren: () => import('./cdk-drag-drop/cdk-drag-drop.module').then((m) => m.CdkDragDropModule)
  },
  { path: 'ngFor',
    loadChildren: () => import('./ng-for-looping/ng-for-looping.module').then((m) => m.NgForLoopingModule)
  },
  { path: 'slickCarousel',
    loadChildren: () => import('./ngx-slick-carousel/ngx-slick-carousel.module').then((m) => m.NgxSlickCarouselModule)
  },
  { path: 'searchUsingDebounce',
    loadChildren: () => import('./search-using-debounce-rxjs/search-using-debounce-rxjs.module').then((m) => m.SearchUsingDebounceRxjsModule)
  },
  { path: 'jsMethods',
    loadChildren: () => import('./js-methods/js-methods.module').then(obj => obj.JsMethodsModule)
  },
  { path: 'dateConcepts',
    loadChildren: () => import('./date-concepts/date-concepts.module').then(obj => obj.DateConceptsModule)
  },
  { path: 'toast',
    loadChildren: () => import('./custom-snackbar/custom-snackbar.module').then(obj => obj.CustomSnackbarModule)
  },
  { path: 'lightbox',
    loadChildren: () => import('./ngx-light-box/ngx-light-box.module').then(obj => obj.NgxLightBoxModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
