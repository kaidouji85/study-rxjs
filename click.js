import Rx from "rxjs/Rx";

/** クリック判定をするクラス */
export class Click {
  constructor(onClick) {
    this._onTouchDown = new Rx.Subject();
    this._onTouchUp = new Rx.Subject();

    this._onTouchDown
      .filter(v => v.isOverlap)
      .flatMap(v => this._onTouchUp)
      .filter(v => v.isOverlap)
      .subscribe(() => onClick());
  }

  /**
   * マウス、指がゲーム画面にタッチダウンした際に呼ばれる関数
   *
   * @param isOverlap クリック判定対象と指、マウスが重なっているか否かのフラグ、trueで重なっている
   */
  onTouchDown(isOverlap) {
    this._onTouchDown.next({isOverlap})
  }

  /**
   * マウス、指がゲーム画面にタッチアップした際に呼ばれる関数
   *
   * @param isOverlap クリック判定対象と指、マウスが重なっているか否かのフラグ、trueで重なっている
   */
  onTouchUp(isOverlap) {
    this._onTouchUp.next({isOverlap});
  }
}