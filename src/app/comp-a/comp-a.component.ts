import { Component, OnInit } from '@angular/core'
import { ValueService } from 'src/app/services/value.service'
import { Observable } from 'rxjs'
import { LoggerService } from 'src/app/services/logger.service'

@Component({
  selector: 'inst-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.scss'],
})
export class CompAComponent implements OnInit {
  value$ = new Observable()

  constructor(private valueService: ValueService, private loggerService: LoggerService) {}

  ngOnInit(): void {
    this.value$ = this.valueService.value$
  }

  addValue() {
    this.valueService.add()
    this.loggerService.log('add', 'success')
  }
}
