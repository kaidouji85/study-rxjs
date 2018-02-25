import Rx from "rxjs/Rx";
import * as R from 'ramda';

/** クリック判定をするクラス */
export class Click {
  constructor(onClick) {
    const EMPTY_EVENT = {type: 'empty', isOverlap: false};
    const CLICK_EVENT_LIST = [
      {type: 'touchDown', isOverlap: true},
      {type: 'touchUp', isOverlap: true}
    ];

    this._touchEvent = new Rx.BehaviorSubject([EMPTY_EVENT, EMPTY_EVENT]);
    this._touchEvent
      .scan(function(acc, x, index, source) {
        const list = [...acc, x];
        return list.slice(-2);
      })
      .subscribe(eventList => {
        //console.log('subscribe');
        //console.log(eventList);
        const isClick = R.equals(eventList, CLICK_EVENT_LIST);
        if (isClick) {
          onClick();
        }
      });
  }

  /**
   * マウス、指がゲーム画面にタッチダウンした際に呼ばれる関数
   *
   * @param isOverlap クリック判定対象と指、マウスが重なっているか否かのフラグ、trueで重なっている
   */
  onTouchDown(isOverlap) {
    this._touchEvent.next({type: 'touchDown', isOverlap});
  }

  /**
   * マウス、指がゲーム画面にタッチアップした際に呼ばれる関数
   *
   * @param isOverlap クリック判定対象と指、マウスが重なっているか否かのフラグ、trueで重なっている
   */
  onTouchUp(isOverlap) {
    this._touchEvent.next({type: 'touchUp', isOverlap});
  }
}