import Rx from 'rxjs/Rx';

window.onload = () => {
  Rx.Observable.of(1,2,3)
    .subscribe(v => console.log(v));
};
