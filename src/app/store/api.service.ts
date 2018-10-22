import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import {map, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {isPlatformBrowser} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ApiService  {
  public launches: any[];
  public missions: any[];
  public agencies: any[];
  public statuses: any[];
  private key = 'launches';


  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) {
    let launches;
    if (isPlatformBrowser(this.platformId)) {
      launches = localStorage.getItem(this.key);
    }
    if (!launches) {
      this.getLaunches$();
    }
    if (launches) {
      this.launches = JSON.parse(launches);
    }

  }

  public getLaunches$ = (): Observable<any[]> =>
    this.http.
    get(environment.url + '/assets/launchlibrary.json')
      .pipe(
        map((res: any) => res.launches),
        tap(res => (this.launches = res))
      )


  public getAgencies$ = (): Observable<any[]> =>
    this.http.
      get(environment.url + '/assets/launchagencies.json')
      .pipe(
        map((res: any) => res.agencies),
        tap(res => (this.agencies = res))
      )

  public getMissionTypes$ = (): Observable<any[]> =>
    this.http
      .get(environment.url + '/assets/launchmissions.json')
      .pipe(
        map((res: any) => res.types),
        tap(res => (this.missions = res)))

  public getStatusTypes$ = (): Observable<any[]> =>
    this.http
      .get(environment.url + '/assets/launchstatus.json')
      .pipe(
        map((res: any) => res.types),
          tap(res => (this.statuses = res)))
}
