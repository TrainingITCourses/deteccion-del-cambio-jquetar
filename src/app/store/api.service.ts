import {Injectable} from '@angular/core';
import {Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import {map, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // private key = 'launches';
  // private keyAgencies = 'agencies';
  // private keyMissions = 'missions';
  // private keyStatus = 'status';
  private urlLaunch = environment.url + '/assets/launchlibrary.json';
  private urlAgencie = environment.url + '/assets/launchagencies.json';
  private urlMission = environment.url + '/assets/launchmissions.json';
  private urlStatus = environment.url + '/assets/launchstatus.json';

  constructor(private http: HttpClient) {
  }

  public getLaunches$ = (): Observable<any[]> =>
    this.http.get(this.urlLaunch).pipe(map((res: any) => res.launches));


  public getAgencies$ = (): Observable<any[]> =>
    this.http.get(this.urlAgencie).pipe(map((res: any) => res.agencies));

  public getMissionTypes$ = (): Observable<any[]> =>
    this.http.get(this.urlMission).pipe(map((res: any) => res.types))

  public getStatusTypes$ = (): Observable<any[]> =>
    this.http.get(this.urlStatus).pipe(map((res: any) => res.types))
}
