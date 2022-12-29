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

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getTodos()
  }

  getTodos() {
    this.http
      .get<Todo[]>('https://social-network.samuraijs.com/api/1.1/todo-lists', {
        withCredentials: true,
        headers: {
          'api-key': 'd4e06bbb-2142-48c2-be24-68df57142f14',
        },
      })
      .subscribe(res => {
        this.todos = res
      })
  }
}
