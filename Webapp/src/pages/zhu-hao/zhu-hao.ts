import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{db} from '../../providers/database';

/**
 * Generated class for the ZhuHaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-zhu-hao',
  templateUrl: 'zhu-hao.html',
})
export class ZhuHaoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  public data:any=db.ZhuHao;

}
