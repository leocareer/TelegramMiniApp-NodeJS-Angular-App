import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelegramService } from '../../services/telegram.service';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule],
  template: `<h1>main shop</h1>`,
})
export class ShopComponent {
  telegram = inject(TelegramService);
  constructor() {
    this.telegram.MainButton.show();
  }
}
