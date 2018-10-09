import {Injectable} from '@angular/core';
import {Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import {map, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {GlobalStore} from './global-store.state';
import {LoadAgencies, LoadLaunches, LoadMissions, LoadStatuses} from './global-store.actions';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private key = 'launches';
  private keyAgencies = 'agencies';
  private keyMissions = 'missions';
  private keyStatus = 'status';

  constructor(private http: HttpClient, private global: GlobalStore) {
  }

  public getLaunches = () => {
    const localLaunches = localStorage.getItem(this.key);
    if (localLaunches) {
      this.global.dispatch(new LoadLaunches(JSON.parse(localLaunches)));
    } else {
      this.http
        .get(environment.url + '/assets/launchlibrary.json')
        .pipe(map((res: any) => res.launches))
        .subscribe(launches => {
          localStorage.setItem(this.key, JSON.stringify(launches)
        )
          ;
          this.global.dispatch(new LoadLaunches(launches));
        });
    }
  }

  public getAgencies = () => {
    const localAgencies = localStorage.getItem(this.keyAgencies);
    if (localAgencies) {
      this.global.dispatch(new LoadAgencies(JSON.parse(localAgencies)));
    } else {
      this.http.get(environment.url + '/assets/launchagencies.json')
        .pipe(map((res: any) => res.agencies))
        .subscribe(agencies => {
          localStorage.setItem(this.keyAgencies, JSON.stringify(agencies));
        });
    }
  }

  public getMissionTypes = () => {
    const localMissions = localStorage.getItem(this.keyMissions);
    if (localMissions) {
      this.global.dispatch(new LoadMissions(JSON.parse(localMissions)));
    } else {
      this.http.get(environment.url + '/assets/launchmissions.json')
        .pipe(map((res: any) => res.types))
        .subscribe(missions => {
          localStorage.setItem(this.keyMissions, JSON.stringify(missions));
        });
    }
  }

  public getStatusTypes = () => {
    const localStatus = localStorage.getItem(this.keyStatus);
    if (localStatus) {
      this.global.dispatch(new LoadStatuses(JSON.parse(localStatus)));
    } else {
      this.http.get(environment.url + '/assets/launchstatus.json')
        .pipe(map((res: any) => res.types))
        .subscribe(statuses => {
          localStorage.setItem(this.keyStatus, JSON.stringify(statuses));
        });
    }
  }
}
