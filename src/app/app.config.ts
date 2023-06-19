import { importProvidersFrom } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { ApplicationConfig, BrowserModule } from "@angular/platform-browser";
import { provideRouter } from "@angular/router";
import { appRoutes } from "./core/routes/app.routes";
import { VideoJsComponent } from "./modules/video-js/video-js.component";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    importProvidersFrom(
      BrowserModule
    ),
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: VideoJsComponent,
      multi: true
    }
  ]
}
