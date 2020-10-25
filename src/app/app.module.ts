import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ProjectGoalsComponent } from './project-goals/project-goals.component';
import { PersonasComponent } from './personas/personas.component';
import { SketchesComponent } from './sketches/sketches.component';
import { AppRoutingModule } from './app-routing.module';
import { TechnologiesComponent } from './technologies/technologies.component';
import { CritiqueComponent } from './critique/critique.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WelcomePageComponent,
    ProjectGoalsComponent,
    PersonasComponent,
    SketchesComponent,
    TechnologiesComponent,
    CritiqueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
