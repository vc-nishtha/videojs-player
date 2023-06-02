import { importProvidersFrom } from "@angular/core";
import { ApplicationConfig, BrowserModule } from "@angular/platform-browser";
import { provideRouter } from "@angular/router";
import { appRoutes } from "./core/routes/app.routes";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    importProvidersFrom(
      BrowserModule
    )
  ]
}
