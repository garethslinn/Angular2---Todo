System.register(['angular2/platform/browser', 'angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var browser_1, core_1;
    var TodoItem, AppComponent;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TodoItem = (function () {
                function TodoItem(text) {
                    this.text = text;
                }
                return TodoItem;
            }());
            exports_1("TodoItem", TodoItem);
            AppComponent = (function () {
                function AppComponent() {
                    this.todos = new Array();
                    this.todos.push(new TodoItem('Hello world'), false);
                }
                AppComponent.prototype.remove = function (item) {
                    this.todos.splice(this.todos.indexOf(item), 1);
                };
                AppComponent.prototype.completed = function ($event) {
                    if ($event.which === 13) {
                        this.addTodo($event.target);
                    }
                };
                AppComponent.prototype.add = function (input) {
                    this.todos.push(new TodoItem(input.value, false));
                    input.value = '';
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                        templateUrl: 'app/app.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            browser_1.bootstrap(AppComponent);
        }
    }
});
//# sourceMappingURL=app.js.map