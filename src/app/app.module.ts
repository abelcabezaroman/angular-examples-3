import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { XyzComponent } from './xyz/xyz.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { BtnComponent } from './btn/btn.component';
import { CardComponent } from './card/card.component';
import { InputImgComponent } from './input-img/input-img.component';
import { InputAnimeComponent } from './input-anime/input-anime.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { ButtonClickComponent } from './button-click/button-click.component';
import { NgIfOverComponent } from './ng-if-over/ng-if-over.component';
import { NgStyleBallComponent } from './ng-style-ball/ng-style-ball.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgModelComponent } from './ng-model/ng-model.component';
import { FormsModule } from '@angular/forms';
import { ProTodoListComponent } from './pro-todo-list/pro-todo-list.component';
import { RandomhiddenComponent } from './randomhidden/randomhidden.component';
import { NgContentButtonComponent } from './ng-content-button/ng-content-button.component';
import { NgContainerComponent } from './ng-container/ng-container.component';

@NgModule({
  declarations: [
    AppComponent,
    XyzComponent,
    HelloWorldComponent,
    BtnComponent,
    CardComponent,
    InputImgComponent,
    InputAnimeComponent,
    NgIfComponent,
    ButtonClickComponent,
    NgIfOverComponent,
    NgStyleBallComponent,
    NgClassComponent,
    NgModelComponent,
    ProTodoListComponent,
    RandomhiddenComponent,
    NgContentButtonComponent,
    NgContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
