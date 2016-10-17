(function(Script) {
  var _run = Script.prototype.run;
  Script.prototype.run = function (ctx, domain, fn)
  {
    const path = require('path');
    let resourcePath = this.path;
    if (typeof domain === 'object') {
      domain.resourceName = function () // access to the current resourceName the current event is running
      { 
          var pathSegments = path.dirname(resourcePath).split(path.sep);
          return pathSegments[pathSegments.length - 1].replace(/-/g, '');
      };
    }
    _run.call(this, ctx, domain, fn);
  }
})(require('deployd/lib/script'));
