import { Component, OnInit } from '@angular/core'
import { ValueService } from 'src/app/services/value.service'

@Component({
  selector: 'inst-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.scss'],
})
export class CompAComponent implements OnInit {
  value = 0

  constructor(private valueService: ValueService) {}

  ngOnInit(): void {
    this.valueService.value$.subscribe(value => {
      this.value = value
    })
  }

  addValue() {
    this.valueService.add()
  }
}
