import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{db} from '../../providers/database';
import{QianPage} from '../qian/qian';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public qianList:any=db.QianWen;

  constructor(public navCtrl: NavController) {

  }

  public select(ev:any){
    let val = ev.target.value;
    if(val){
      this.qianList=db.QianWen.filter(function(item){
        return item.QianHao.indexOf(val)>-1||item.ShiTi.indexOf(val)>-1 ||item.ShiYue.indexOf(val)>-1;
      });
    }else{
      this.qianList=db.QianWen;
    }
  }
  public clearKey(ev:any){
    this.qianList=db.QianWen;
  }
  public detail(id){
    if(id)
    this.navCtrl.push(QianPage,{id:id});
  }


}
