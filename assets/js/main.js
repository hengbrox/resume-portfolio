"use strict";

const callback = function (entries, observer) {
  entries.forEach(function (entry) {
    if (!entry.isIntersecting) return;

    $(entry.target).removeClass("waiting-for-reveal");

    // edge case for progress indicators
    // where we need to set the width by js
    if ($(entry.target).is(".progress-bar")) {
      const $indicator = $(entry.target).find(".progress-indicator");
      const width = $indicator.attr("data-to");
      $indicator.width(width);
    }
  });
};

const options = {
  root: null,
  rootMargin: "-10%",
};

const observer = new IntersectionObserver(callback, options);

$(document).ready(function () {
  $(".progress-bar").each(function () {
    const progressBar = $(this)[0];
    observer.observe(progressBar);
  });
  $(".timeline-dot").each(function () {
    const timelineDot = $(this)[0];
    observer.observe(timelineDot);
  });
});
