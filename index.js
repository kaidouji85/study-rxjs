import {Click} from './click';

window.onload = () => {
  const click = new Click(() => {
    console.log('on clicked');
  });

  click.onTouchDown(true);
  click.onTouchUp(true);

  click.onTouchDown(true);
  click.onTouchUp(true);

  click.onTouchDown(true);
  click.onTouchUp(true);

  click.onTouchDown(true);
  click.onTouchUp(false);

  click.onTouchDown(false);
  click.onTouchUp(true);

  click.onTouchDown(false);
  click.onTouchUp(false);

  click.onTouchUp(true);
  click.onTouchUp(true);

  click.onTouchDown(true);
  click.onTouchDown(true);

  click.onTouchDown(true);
  click.onTouchUp(true);
};
