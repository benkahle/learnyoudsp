import React, { Component, PropTypes } from 'react'
import * as filters from '../filters'

export default class Output extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    var canvas = this.refs.outputCanvas;
    var context = canvas.getContext('2d');
    this.paint(context);
  }

  componentDidUpdate() {
    if (this.props.runningStatus === "starting") {
      if (this.props.inputUrl) {
        console.log("Output starting computation");
        this.props.onStarted();
        this.compute();
      } else {
        this.props.onComplete();
        alert("Please choose an input image first.");
      }
    }
    if (this.props.outputUrl !== this.lastOutputUrl) {
      this.resetCanvas();
    }
  }

  resetCanvas() {
    var canvas = this.refs.outputCanvas;
    var context = canvas.getContext('2d');
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    context.clearRect(0, 0, canvas.width, canvas.height);
    this.paint(context);
  }

  getOptionsForFilter(filter) {
    var options;
    switch (filter) {
      case "convolve":
        options = {kernel: this.props.kernel};
        break;
      default:
        break;
    }
    return options;
  }

  compute() {
    console.log("Output is computing...");
    var filter = filters[this.props.filter];
    var options = this.getOptionsForFilter(this.props.filter);
    this.filterImage(filter, this.props.inputUrl, options, (newPixels) => {
      var newUrl = this.getDataUrl(newPixels);
      this.props.setOutputUrl(newUrl);
      this.lastOutputUrl = newUrl;
      console.log("Output is Finished");
      this.props.onComplete();
    });
  }

  getTempCanvas(w,h) {
    var c = document.createElement('canvas');
    c.width = w;
    c.height = h;
    return c;
  }

  getPixels(img, callback) {
    var c = this.getTempCanvas();
    var ctx = c.getContext('2d');
    var image = new Image();
    image.src = img;
    image.onload = () => {
      c.width = image.width;
      c.height = image.height;
      ctx.drawImage(image, 0, 0);
      callback(ctx.getImageData(0, 0, c.width, c.height));
    }
  }

  filterImage(filter, image, options, callback) {
    this.getPixels(image, (pixels) => {
      callback(filter.apply(null, [pixels, options]));
    });
  }

  // drawImage(pixels) {
  //   var canvas = this.refs.outputCanvas;
  //   var context = canvas.getContext('2d');
  //   context.putImageData(pixels, 0, 0);
  // }

  getDataUrl(pixels) {
    var c = this.getTempCanvas(pixels.width, pixels.height);
    var ctx = c.getContext('2d');
    ctx.putImageData(pixels, 0, 0);
    return c.toDataURL();
  }

  paint(context) {
    var image = new Image();
    image.src = this.props.outputUrl || "";
    image.onload = () => {
      var size = this.getScaledDimensions(image);
      context.drawImage(image, 0, 0, size.width, size.height);
    }
  }

  getScaledDimensions(image) {
    var canvas = this.refs.outputCanvas;
    var width = image.width;
    var height = image.height;
    var minCanvasDim = Math.min(canvas.width, canvas.height);
    var maxCanvasDim = Math.max(canvas.width, canvas.height);
    var canvasRatio = canvas.width / canvas.height;
    var maxImageDim = canvas.height;
    if (canvasRatio > 1) {
      maxImageDim = canvas.width;
    }
    if (Math.max(width, height) > minCanvasDim) {
      var ratio = width / height;
      if (ratio > 1) {
        height = maxImageDim / ratio;
        width = maxImageDim;
      } else {
        width = maxImageDim * ratio;
        height = maxImageDim;
      }
    }
    return {width, height};
  }

  render() {
    return (
      <div className="col-sm-6">
        <div className="row">
          <div className="col-sm-12">
            <canvas ref="outputCanvas" id="output-canvas"></canvas>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 flex-row-reverse">
            <button type="button" className="btn btn-secondary">Set as input</button>
          </div>
        </div>
      </div>
    )
  }
}

Output.propTypes = {
  onComplete: PropTypes.func.isRequired
}

export default Output
