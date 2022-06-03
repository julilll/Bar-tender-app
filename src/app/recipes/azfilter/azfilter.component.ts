import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-azfilter',
  templateUrl: './azfilter.component.html',
  styleUrls: ['./azfilter.component.scss'],
})
export class AZfilterComponent implements OnInit {

  constructor(private modal: ModalController) { }

  ngOnInit() {}

  chooseChar(char) {
    this.modal.dismiss(char);
  }
}
