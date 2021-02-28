import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StepComponent } from 'src/app/presentation/todo-list/todo-item/step/step.component';
import { TitleComponent } from 'src/app/presentation/todo-list/todo-item/title/title.component';
import { TodoListComponent } from 'src/app/presentation/todo-list/todo-list.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingComponent } from './presentation/loading/loading.component';
import { MilestoneComponent } from './presentation/todo-list/todo-item/milestone/milestone.component';
import { TodoItemComponent } from './presentation/todo-list/todo-item/todo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemComponent,
    LoadingComponent,
    MilestoneComponent,
    StepComponent,
    TitleComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
