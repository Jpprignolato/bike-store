import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ɵEmptyOutletComponent } from "@angular/router";

@Component({
  selector: 'app-default-login-layout',
  standalone: true,
  imports: [ɵEmptyOutletComponent],
  templateUrl: './default-login-layout.component.html',
  styleUrl: './default-login-layout.component.scss'
})
export class DefaultLoginLayoutComponent {
      @Input() title: string = "";
      @Input() primaryButtonText: string = "";
      @Input() secondaryButtonText: string = "";
      @Output("submit") onSubmit = new EventEmitter();
      @Output("navigate") onNavigate = new EventEmitter();

      submit() {
          this.onSubmit.emit();
      }

      navigate() {
          this.onNavigate.emit();
      }
}
