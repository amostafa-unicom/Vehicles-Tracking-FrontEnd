import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { shareReplay } from 'rxjs/operators';
import { Configuration } from './configuration';

@Injectable({ providedIn: 'root' })
export class ConfigService {
  private readonly configUrl = 'assets/config.json';
  private configuration$: Configuration;

  constructor(private http: HttpClient) {}

  public load(): Promise<any> {
    // console.log("Start Get Setting");
    return new Promise((resolve, reject) => {
      this.http
        .get<Configuration>(this.configUrl)
        .pipe(shareReplay(1))
        .subscribe((response: any) => {
          this.configuration$ = response;
          resolve(true);
        });
    });
  }

  get settings() {
    return this.configuration$;
  }
}
