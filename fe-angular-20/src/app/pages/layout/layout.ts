import { Component, OnInit, signal } from '@angular/core';
import { RouterLink, RouterOutlet, Routes, Route } from '@angular/router';
import { routes } from '../../app.routes';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@Component({
  selector: 'app-layout',
  imports: [NzLayoutModule, NzMenuModule, NzButtonModule, NzCardModule, RouterLink, RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout implements OnInit {
  // show only the child routes of the layout
  menuItems = signal<Route[]>([]);

  ngOnInit(): void {
    this.initialMenus();
  }

  private initialMenus() {
    // the first entry in top‑level routes is the layout itself
    const layout = routes.find((r) => r.path === '');
    if (layout && layout.children) {
      // exclude catch‑all or routes without titles
      const items = (layout.children as Route[]).filter((r) => r.path !== '**' && !!r.title);
      this.menuItems.set(items);
    }
  }
}
