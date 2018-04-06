import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{db} from '../../providers/database';

/**
 * Generated class for the BeiJiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bei-ji',
  templateUrl: 'bei-ji.html',
})
export class BeiJiPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  public data:any=db.BeiJi;

}
