$(document).ready(() => {
  let imgs_promotion_count = $('.promotion-images').length;
  $('.promotion-imgs').draggable({
    axis: "x",
    drag: function(event, ui) {
      if (ui.position.left > 0) {
        ui.position.left = 0;
      }  else if (ui.position.left < -(200 * imgs_promotion_count)) {
        ui.position.left = `-${200 * imgs_promotion_count}px`;
      }
    },
    start: function(event, ui) {
      $(this).css('cursor', 'grabbing');
    },
    stop: function(event, ui) {
      $(this).css('cursor', 'grab');
    },
    create: function(event, ui) {
      $(this).css('cursor', 'grab');
    }
  })

  let imgs_latest_count = $('.latest-menu-images').length;
  $('.latest-menu-imgs').draggable({
    axis: "x",
    drag: (event, ui) => {
      if (ui.position.left > 0) {
        ui.position.left = 0;
      }  else if (ui.position.left < -(130 * imgs_latest_count)) {
        ui.position.left = `-${130 * imgs_latest_count}px`;
      }
    },
    start: () => {
      $(this).css('cursor', 'grabbing');
    },
    stop: () => {
      $(this).css('cursor', 'grab');
    },
    create: () => {
      $(this).css('cursor', 'grab');
    }
  })
});