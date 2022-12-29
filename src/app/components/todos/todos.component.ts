import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'

interface Todo {
  addedDate: string
  id: string
  order: number
  title: string
}

@Component({
  selector: 'inst-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = []

  httpOptions = {
    withCredentials: true,
    headers: {
      'api-key': 'd4e06bbb-2142-48c2-be24-68df57142f14',
    },
  }

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getTodos()
  }

  getTodos() {
    this.http
      .get<Todo[]>('https://social-network.samuraijs.com/api/1.1/todo-lists', this.httpOptions)
      .subscribe(res => {
        this.todos = res
      })
  }

  createTodo() {
    const randomNumber = Math.floor(Math.random() * 100)
    const title = 'Angular' + randomNumber
    this.http
      .post<{ data: { item: Todo } }>(
        'https://social-network.samuraijs.com/api/1.1/todo-lists',
        { title },
        this.httpOptions
      )
      .subscribe(res => {
        const newTodo = res.data.item
        console.log(res)
        this.todos.unshift(newTodo)
      })
  }

  deleteTodo(id: string) {
    this.http
      .delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${id}`, this.httpOptions)
      .subscribe(() => {
        this.todos = this.todos.filter(t => t.id !== id)
      })
  }
}
