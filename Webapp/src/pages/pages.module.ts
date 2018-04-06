import { NgModule } from '@angular/core';

import { BeiJiPageModule } from '../pages/bei-ji/bei-ji.module';
import { GuanYuPageModule } from '../pages/guan-yu/guan-yu.module';
import { HomePageModule } from '../pages/home/home.module';
import { QianPageModule } from '../pages/qian/qian.module';
import { ShuHaoPageModule } from '../pages/shu-hao/shu-hao.module';
import { ZhouYuPageModule } from '../pages/zhou-yu/zhou-yu.module';
import { ZhuHaoPageModule } from '../pages/zhu-hao/zhu-hao.module';

@NgModule({
    imports: [
        BeiJiPageModule,
        GuanYuPageModule,
        HomePageModule,
        QianPageModule,
        ShuHaoPageModule,
        ZhouYuPageModule,
        ZhuHaoPageModule
    ],
    declarations: [],
    providers: [],
    exports: []
})
export class PagesModule { }