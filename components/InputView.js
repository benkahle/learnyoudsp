import React, { Component, PropTypes } from 'react'

export default class InputView extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    var canvas = this.refs.canvas;
    var context = canvas.getContext('2d');
    this.paint(context);
  }

  componentDidUpdate() {
    var canvas = this.refs.canvas;
    var context = canvas.getContext('2d');
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    context.clearRect(0, 0, canvas.width, canvas.height);
    this.paint(context);
  }

  paint(context) {
    var image = new Image();
    image.src = this.props.inputUrl || "";
    image.onload = () => {
      var size = this.getScaledDimensions(image);
      context.drawImage(image, 0, 0, size.width, size.height);
    }
  }

  getScaledDimensions(image) {
    var canvas = this.refs.canvas;
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
      <div className="col-sm-12">
        <canvas ref="canvas" id="input-canvas"></canvas>
      </div>
    )
  }
}

InputView.propTypes = {
  inputUrl: PropTypes.string
}

export default InputView
