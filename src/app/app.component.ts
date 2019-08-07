import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router, NavigationEnd, RouterEvent } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { filter } from 'rxjs/operators';
import { NgwWowService} from 'ngx-wow';
import {PageScrollConfig} from 'ng2-page-scroll';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Benjamin-Ju';
  
  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object, private wowService: NgwWowService) {
    PageScrollConfig.defaultDuration = 0;
    this.router.events.pipe(
      filter((event:RouterEvent) => event instanceof NavigationEnd)
    ).subscribe(event => {
      if (isPlatformBrowser(this.platformId)) {
        window.scroll(0, 0);
        this.wowService.init(); // Load WoW animations when done navigating to page
      }
    });
  }
}
