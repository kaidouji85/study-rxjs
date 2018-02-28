import Rx from "rxjs/Rx";
import * as R from 'ramda';

/** クリック判定をするクラス */
export class Click {
  constructor({onClickStart, onClickEnd, onClickCnacel}) {
    this._mouseEvent = new Rx.Subject();

    this._mouseEvent
      .bufferCount(2)
      .filter(v => R.equals(v[0], {type: 'mouseDown', isOverlap: true}))
      .filter(v => R.equals(v[1], {type: 'mouseUp', isOverlap: true}))
      .subscribe(() => onClickEnd());

    this._mouseEvent
      .filter(v => R.equals(v, {type: 'mouseDown', isOverlap: true}))
      .subscribe(() => onClickStart());

    this._mouseEvent
      .bufferCount(2)
      .filter(v => R.equals(v[0], {type: 'mouseDown', isOverlap: true}))
      .filter(v => R.equals(v[1], {type: 'mouseUp', isOverlap: false}))
      .subscribe(() => onClickCnacel());
  }

  /**
   * マウスがゲーム画面にタッチダウンした際に呼ばれる関数
   *
   * @param isOverlap クリック判定対象と指、マウスが重なっているか否かのフラグ、trueで重なっている
   */
  onMouseDown(isOverlap) {
    this._mouseEvent.next({type: 'mouseDown', isOverlap});
  }

  /**
   * マウスがゲーム画面にタッチアップした際に呼ばれる関数
   *
   * @param isOverlap クリック判定対象と指、マウスが重なっているか否かのフラグ、trueで重なっている
   */
  onMouseUp(isOverlap) {
    this._mouseEvent.next({type: 'mouseUp', isOverlap});
  }
}