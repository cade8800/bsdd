import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{db}from '../../providers/database';

@IonicPage()
@Component({
  selector: 'page-qian',
  templateUrl: 'qian.html',
})
export class QianPage {

  public qian:any={QianHao:''};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.init();
  }

  private init(){
    var id=this.navParams.get("id");
    if(!id)return ;
    let target=db.QianWen.filter(function(item){
      return item.QianHao==id;
    });
    if(target&&target.length>=1){
      this.qian=target[0];
    }
  }

}
