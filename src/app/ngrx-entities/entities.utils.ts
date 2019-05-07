import { asapScheduler } from 'rxjs';
import { tap } from 'rxjs/operators';

export const success = <T>(onSuccess: (result: T) => any) =>
  tap((result: T) => asapScheduler.schedule(() => onSuccess(result)));
