import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'hasPermission'
})
export class PermissionPipe implements PipeTransform {
  transform(value: string): boolean {
    if (value === 'no_access') return false;
    else if (value === 'read_access') return false;
    else if (value === 'write_access') return true;
  }
}
