(function() {
  'use strict';
  angular.module('ngCountup', []).directive('countUp', function() {
    return {
      restrict: 'A',
      require: 'ngModel',
      scope: {
        ngModel: '=',
        numDecimals: '='
      },
      link: function(scope, element, attrs) {
        var numDecimals, opts;
        opts = {
          prefix: attrs.prefix || '',
          suffix: attrs.suffix || ''
        };
        numDecimals = 0;
        if ((attrs.numDecimals != null) && attrs.numDecimals >= 0) {
          numDecimals = attrs.numDecimals;
        }
        return scope.$parent.$watch(attrs.ngModel, function(newVal, oldVal) {
          if (newVal == null) {
            newVal = 0;
          }
          if (oldVal == null) {
            oldVal = 0;
          }
          if (newVal != null) {
            new countUp(attrs.id, oldVal, newVal, numDecimals, 4, opts).start();
          }
        });
      }
    };
  });

}).call(this);
