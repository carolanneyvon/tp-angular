import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoDetailsComponent } from './components/todos/todo-details/todo-details.component';
import { TodoFormComponent } from './components/todos/todo-form/todo-form.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodosComponent,
    TodoDetailsComponent,
    TodoFormComponent,
    FooterComponent,
  ],
  imports: [ BrowserModule,
  FormsModule, 
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}