import { Component, Inject, OnInit } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Hero } from '../hero';

interface dialogObject {
  name: string,
  param: string
}

@Component({
  selector: 'app-bottom-sheet-dialog',
  templateUrl: './bottom-sheet-dialog.component.html',
  styleUrls: ['./bottom-sheet-dialog.component.css']
})
export class BottomSheetDialogComponent implements OnInit {

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: dialogObject,
  private _bottomSheetRef: MatBottomSheetRef<BottomSheetDialogComponent>) { }

  ngOnInit(): void {
  }

  closeBottomSheet(): void {
    this._bottomSheetRef.dismiss();
  }

}
