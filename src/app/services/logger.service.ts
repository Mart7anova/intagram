import { Injectable } from '@angular/core'

type Severity = 'error' | 'success' | 'info'

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  log(message: string, severity: Severity) {
    console.log(`%c${message}`, this.getSeverity(severity))
  }

  getSeverity(severity: Severity) {
    switch (severity) {
      case 'success':
        return 'background: green; color: white;'
      case 'error':
        return 'background: red; color: white;'
      case 'info':
        return 'background: blue; color: white;'
    }
  }
}
