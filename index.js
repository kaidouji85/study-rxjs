import {Click} from './click';

window.onload = () => {
  const click = new Click(() => {
    console.log('on clicked');
  });
  click.onTouchDown(true);
  click.onTouchUp(true);
};
