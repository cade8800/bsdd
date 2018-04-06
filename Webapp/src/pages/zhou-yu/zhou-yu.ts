import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{db} from '../../providers/database';


@IonicPage()
@Component({
  selector: 'page-zhou-yu',
  templateUrl: 'zhou-yu.html',
})
export class ZhouYuPage {
  public data:any=db.ZhouYu;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


}
