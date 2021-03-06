import {bootstrap} from 'angular2/platform/browser'
import {Component} from 'angular2/core';

export class TodoItem {
    constructor (public text: string) {

    }
}

@Component({
    selector: 'app',
    templateUrl: 'app/app.html'
})

class AppComponent {
    public todos: string[];
    public strTitle: string;
    public strAdd: string;

    constructor() {
        this.todos = new Array<TodoItem>();
        this.strTitle = "Todo list";
        this.strAdd = "Add";
    }

    remove(item: TodoItem) {
        this.todos.splice(this.todos.indexOf(item), 1);
    }

    completed($event) {
        if ($event.which === 13) {
            this.addTodo($event.target);
        }
    }

    add(input) {
        this.todos.push(new TodoItem(input.value, false));
        input.value = '';
    }

}

bootstrap(AppComponent);