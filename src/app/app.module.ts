import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorsService } from './authors.service';
import { EmailInputComponent } from './email-input/email-input.component';
import { PipesExampleComponent } from './pipes-example/pipes-example.component';
import { SummaryPipe } from './pipes-example/summary.pipe';
import { FavoriteStarComponent } from './favorite-star/favorite-star.component';
import { LikeComponent } from './like/like.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorListComponent,
    EmailInputComponent,
    PipesExampleComponent,
    SummaryPipe,
    FavoriteStarComponent,
    LikeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [ AuthorsService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
