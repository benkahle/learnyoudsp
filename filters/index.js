//Filter functions referenced from http://www.html5rocks.com/en/tutorials/canvas/imagefilters/


export const brightness = (pixels, options = {}) => {
  var d = pixels.data;
  options.adj = options.adj || 50;
  console.log(options.adj);
  for (var i=0; i<d.length; i+=4) {
    d[i] += options.adj;
    d[i+1] += options.adj;
    d[i+2] += options.adj;
  }
  return pixels;
};

export const greyscale = (pixels) => {
  var d = pixels.data;
  for (var i=0; i<d.length; i+=4) {
    var r = d[i];
    var g = d[i+1];
    var b = d[i+2];
    // CIE luminance for the RGB
    // The human eye is bad at seeing red and blue, so we de-emphasize them.
    var v = 0.2126*r + 0.7152*g + 0.0722*b;
    d[i] = d[i+1] = d[i+2] = v
  }
  return pixels;
}


export const threshold = (pixels, options = {}) => {
  var d = pixels.data;
  options.threshold = options.threshold || 128;
  for (var i=0; i<d.length; i+=4) {
    var r = d[i];
    var g = d[i+1];
    var b = d[i+2];
    var v = (0.2126*r + 0.7152*g + 0.0722*b >= options.threshold) ? 255 : 0;
    d[i] = d[i+1] = d[i+2] = v
  }
  return pixels;
};

var tmpCanvas = document.createElement('canvas');
var tmpCtx = tmpCanvas.getContext('2d');

var createImageData = (w,h) => {
  return tmpCtx.createImageData(w,h);
};

export const convolve = (pixels, options = {}) => {
  var kernel = options.kernel;
  var opaque = options.opaque || true;
  var kernWidth = kernel[0].length;
  var kernHeight = kernel.length;
  var halfWidth = Math.floor(kernWidth/2);
  var halfHeight = Math.floor(kernHeight/2);
  var src = pixels.data;
  var sw = pixels.width;
  var sh = pixels.height;
  // pad output by the convolution matrix
  var w = sw;
  var h = sh;
  var output = createImageData(w, h);
  var dst = output.data;
  // go through the destination image pixels
  var alphaFac = opaque ? 1 : 0;
  for (var y=0; y<h; y++) {
    for (var x=0; x<w; x++) {
      var sy = y;
      var sx = x;
      var dstOff = (y*w+x)*4;
      // calculate the weighed sum of the source image pixels that
      // fall under the convolution matrix
      var r=0, g=0, b=0, a=0;
      for (var cy=0; cy<kernHeight; cy++) {
        for (var cx=0; cx<kernWidth; cx++) {
          var scy = sy + cy - halfHeight;
          var scx = sx + cx - halfWidth;
          if (scy >= 0 && scy < sh && scx >= 0 && scx < sw) {
            var srcOff = (scy*sw+scx)*4;
            var wt = kernel[cy][cx];
            r += src[srcOff] * wt;
            g += src[srcOff+1] * wt;
            b += src[srcOff+2] * wt;
            a += src[srcOff+3] * wt;
          }
        }
      }
      dst[dstOff] = r;
      dst[dstOff+1] = g;
      dst[dstOff+2] = b;
      dst[dstOff+3] = a + alphaFac*(255-a);
    }
  }
  return output;
};
