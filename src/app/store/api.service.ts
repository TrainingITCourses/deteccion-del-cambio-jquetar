import {Injectable} from '@angular/core';
import {Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import {map, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private key = 'launches';
  private keyAgencies = 'agencies';
  private keyMissions = 'missions';
  private keyStatus = 'status';
  private urlLaunch = environment.url + '/assets/launchlibrary.json';
  private urlAgencie = environment.url + '/assets/launchagencies.json';
  private urlMission = environment.url + '/assets/launchmissions.json';
  private urlStatus = environment.url + '/assets/launchstatus.json';
  constructor(private http: HttpClient) {
  }

  public getLaunches$ = () => {
    const localLaunches = localStorage.getItem(this.key);
    if (localLaunches) {
      return of(JSON.parse(localLaunches));
    } else {
      return this.http.get(this.urlLaunch).pipe(
        map((res: any) => res.launches),
        tap(launches =>
          localStorage.setItem(this.key, JSON.stringify(launches))
        )
      );
    }
  }


  public getAgencies$ = () => {
    const localAgencies = localStorage.getItem(this.keyAgencies);
    if (localAgencies) {
      return of(JSON.parse(localAgencies));
    } else {
      return this.http.get(this.urlAgencie).pipe(
        map((res: any) => res.agencies),
        tap(agencies =>
          localStorage.setItem(this.keyAgencies, JSON.stringify(agencies))
        )
      );
    }
  }

  public getMissionTypes$ = () => {
    const localMissions = localStorage.getItem(this.keyMissions);
    if (localMissions) {
      return of(JSON.parse(localMissions));
    } else {
      return this.http.get(this.urlMission).pipe(
        map((res: any) => res.types),
        tap(missions =>
          localStorage.setItem(this.keyMissions, JSON.stringify(missions))
        )
      );
    }
  }

  public getStatusTypes$ = () => {
    const localStatus = localStorage.getItem(this.keyStatus);
    if (localStatus) {
      return of(JSON.parse(localStatus));
    } else {
      return this.http.get(this.urlStatus).pipe(
        map((res: any) => res.types),
        tap(statuses =>
          localStorage.setItem(this.keyStatus, JSON.stringify(statuses))
        )
      );
    }
  }
}
