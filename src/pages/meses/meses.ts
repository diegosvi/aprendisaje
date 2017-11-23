import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MESES } from '../../data/data.meses';
import  { Meses } from '../../interface/interface.meses';

/**
 * Generated class for the MesesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meses',
  templateUrl: 'meses.html',
})
export class MesesPage {

  mes: Meses[] = [];
  audio: any = new Audio();
  tiempo: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.mes = MESES.slice(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbecedarioPage');
  }

  reproducir(mese: Meses){
    this.pausarSonido(mese);
    if(mese.reproduciendo){
      mese.reproduciendo=false;
      return;
    }
    console.log(mese);

    //let audio = new Audio();
    this.audio.src = mese.audio;


    this.audio.load();
    this.audio.play();

    mese.reproduciendo=true;
    this.tiempo=setTimeout (
      () => {
        mese.reproduciendo = false;
      }, mese.duracion*1000
    );

  }


  pausarSonido(meseSelected: Meses){
    clearTimeout(this.tiempo);
    this.audio.pause();
    this.audio.currentTime=0;
    for(let mese of this.mes){
      if(mese.imagen != meseSelected.imagen){
        mese.reproduciendo = false;
      }
    }
  }

}
