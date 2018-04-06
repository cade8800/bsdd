import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{db} from '../../providers/database';

@IonicPage()
@Component({
  selector: 'page-shu-hao',
  templateUrl: 'shu-hao.html',
})
export class ShuHaoPage {

  public data:any=db.ShuHao;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

}
