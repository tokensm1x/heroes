import { Directive , Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive ({ selector: '[hasPermission]' })
export class PermissionDirective {

  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef) {}

  @Input() set hasPermission(condition: string) {
    if(condition === "no_access") {
      this.viewContainer.clear();
    } else if (condition === "read_access"){
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else if (condition === "write_access") {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
