var Backbone = require('backbone');
var XYZView = require('./xyz-view.js');
var _ = require('underscore');

/**
 * View model for XYZ tab content.
 */
module.exports = Backbone.Model.extend({

  defaults: {
    name: 'xyz',
    label: 'XYZ',
    tms: false,
    layer: undefined // will be set when valid
  },

  createView: function () {
    return new XYZView({
      model: this
    });
  },

  hasAlreadyAddedLayer: function (userLayers) {
    var urlTemplate = this.get('layer').get('urlTemplate');
    return _.any(userLayers.isCustomCategory(), function (customLayer) {
      return customLayer.get('urlTemplate') === urlTemplate;
    });
  }

});
