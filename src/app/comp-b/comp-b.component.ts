import { Component, OnInit } from '@angular/core'
import { ValueService } from 'src/app/services/value.service'
import { Observable } from 'rxjs'
import { LoggerService } from 'src/app/services/logger.service'

@Component({
  selector: 'inst-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.scss'],
})
export class CompBComponent implements OnInit {
  value$ = new Observable()

  constructor(private valueService: ValueService, private loggerService: LoggerService) {}

  ngOnInit(): void {
    this.value$ = this.valueService.value$
  }

  decValue() {
    this.valueService.dec()
    this.loggerService.log('add', 'error')
  }
}
