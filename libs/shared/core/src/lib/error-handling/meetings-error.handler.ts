import { ErrorHandler, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

const ROUTE_NOT_MATCHED = 'Cannot match any routes. URL Segment:';
const MICRO_APP_MAPPING: { [key: string]: string } = {
  "'meeting-templates'": 'Meeting Templates',
  "'meeting-scheduled'": 'Meeting Scheduled',
};
const SNACKBAR_DURATION = 2000;

@Injectable()
export class MeetingsErrorHandlerHandler implements ErrorHandler {
  constructor(private snackBar: MatSnackBar) {}

  handleError({ message }: Error) {
    if (message?.startsWith(ROUTE_NOT_MATCHED)) {
      this.notifyAboutMissingApp(message);
    }
  }

  private notifyAboutMissingApp(message: string) {
    const appRouteId = message.replace(ROUTE_NOT_MATCHED, '').trim();
    this.snackBar.open(
      `Redirection to ${MICRO_APP_MAPPING[appRouteId]} is currently unavailable. Please try again later.`,
      '',
      {
        duration: SNACKBAR_DURATION,
        verticalPosition: 'bottom',
      }
    );
  }
}
