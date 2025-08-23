import {store, togglePause } from './redux/store.js';

console.log('yeehonk2.js loaded');
jQuery(document).ready(function($) {
  var width = $(document).width();
  var $idAnimate = $('#animate');

  function goRight() {
    if (!store.getState().yeeHonk.isPaused) {
      $idAnimate.animate(
        { left: width },
        500,
        function() {
          checkCollisionAndShow();
          setTimeout(goLeft, 50);
        }
      );
    }
  }

  function goLeft() {
    if (!store.getState().yeeHonk.isPaused) {
      $idAnimate.animate(
        { left: 0 },
        500,
        function() {
          checkCollisionAndShow();
          setTimeout(goRight, 50);
        }
      );
    }
  }

  setTimeout(goRight, 50);

  store.subscribe(() => {
    const { isPaused } = store.getState().yeeHonk;
    if (isPaused) {
      $idAnimate.stop(); 
      checkCollisionAndShow();
    } else {
      goRight(); 
    }
  });

  $(document).click(function() {
    store.dispatch(togglePause());
  });
});
