import Rx from 'rxjs/Rx';

window.onload = () => {
  var subject = new Rx.Subject();

  var subscription = subject
    .map(v => v + 1)
    .subscribe(
      function (x) {
        console.log('Next: ' + x.toString());
      },
      function (err) {
        console.log('Error: ' + err);
      },
      function () {
        console.log('Completed');
      });

  subject.next(42);
};
