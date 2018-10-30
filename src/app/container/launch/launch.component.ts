import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../../store/launch/launch.reducer';
import {ActivatedRoute} from '@angular/router';
import {SetTitle} from '../../store/title/title.actions';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.css']
})
export class LaunchComponent implements OnInit {
  public order = { ordered: 1};
  public launches: any[];
  public title: string;
  private id: number;
  public launch: any;

  constructor(private store: Store<State>, private route: ActivatedRoute) {
    this.store.select('launch').subscribe(
      launches => this.launches = launches.launches);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.launch = this.launches.find(x => x.id == params['id']);
        this.store.dispatch(new SetTitle({title: 'State name: ' + this.launch['name']}));
      }
    });
  }

}
