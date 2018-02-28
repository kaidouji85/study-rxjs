import {Click} from './click';

window.onload = () => {
  const click = new Click({
    onClickStart: () => console.log('click start'),
    onClickEnd: () => console.log('click end'),
    onClickCnacel: () => console.log('click cancel')
  });

  const test = [
    // 1
    () => {
      click.onMouseDown(true);
      click.onMouseUp(true);
    },
    // 2
    () => {
      click.onMouseDown(true);
      click.onMouseUp(true);
    },
    // 3
    () => {
      click.onMouseDown(true);
      click.onMouseUp(true);
    },
    // 4
    () => {
      click.onMouseDown(true);
      click.onMouseUp(false);
    },
    // 5
    () => {
      click.onMouseDown(false);
      click.onMouseUp(true);
    },
    // 6
    () => {
      click.onMouseDown(false);
      click.onMouseUp(false);
    },
    // 7
    () => {
      click.onMouseUp(true);
      click.onMouseUp(true);
    },
    // 8
    () => {
      click.onMouseDown(true);
      click.onMouseDown(true);
    },
    // 9
    () => {
      click.onMouseDown(true);
      click.onMouseUp(true);
    }
  ];

  test.forEach((fnc, index) => {
    console.log(`${index+1}`);
    fnc();
    console.log(`
    `);
  });
};
