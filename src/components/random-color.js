AFRAME.registerComponent("random-color", {

  schema: {
    // Time in milliseconds (ms).
    minimumInterval: { type: "number", default: 2000 }
  },

  init: function () {
    this.throttleTick();
  },

  update: function () {

  },

  tick: function () {
    this.el.setAttribute(
      "material",
      "color",
      `${this.getRandomHslColor()}`
    );
  },

  remove: function () {

  },

  pause: function () {

  },

  play: function () {

  },

  throttleTick: function () {
    this.tick = AFRAME.utils.throttleTick(
      this.tick,
      this.data.minimumInterval,
      this
    );
  },

  getRandomHslColor: function () {
    return `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
  }

});