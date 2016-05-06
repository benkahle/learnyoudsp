import React from 'react'

const makeModal = (opts) => {
  return (
    <div key={opts.id} className="modal fade" id={opts.id} tabIndex="-1" role="dialog" aria-labelledby={opts.label} aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 className="modal-title" id={opts.id+"Label"}>{opts.heading}</h4>
          </div>
          <div className="modal-body">
            {opts.body}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}

const settingsBody = (
  <ul>
    <li><h5>Convolve:</h5>
    <p>
    This filter allows you to convolve the input image with the specified kernel to compute the output image.
    Click on the question mark by "Kernel" at the top of the application to learn more about the convolution algorithm.
    Remember to click the green "save" button to keep your customized kernels around!
    </p>
    </li>
    <li><h5>Greyscale:</h5>
    <p>
    This filter converts a colored image into only greyscale.
    This can be useful for focusing on subtle details of other filtering algorithms.</p>
    </li>
    <li><h5>Brightness:</h5>
    <p>
    This filter allows you to increase or decrease the brightness of the input image.
    The "Brightness" slider below the filter drop down sets the value of the brightness adjustment in RGB units.
    Zero will leave the image as is while negative values will decrease the pixel values of the image (darkening it) and
    positive numbers will increase the pixel values of the image (brightening it).
    </p>
    </li>
    <li><h5>Threshold:</h5>
    <p>
    This setting allows you to compute a black and white image from the input where any pixel value below the cutoff value is set to black
    and any pixel above the cutoff value is set to white.
    </p>
    </li>
  </ul>
)

const kernelBody = (
  <div>
    <p>
    Convolving a kernel with a matrix is a core operation of digital signal processing.
    Convolution can be done in many different dimensions but in this example we focus on 2D convolution, as 2D matrices are a way of expressing image data.
    Convolution is an operation on two matrices f and g, which produces a third matrix that can be interpreted as a modified ("filtered") version of f.
    In this interpretation we call g the filter.
    Applied to two dimensional functions like images, convolution is useful for may tasks including edge finding, feature detection, motion detection, and image matching.
    Formally, for matrices f and g of a dimensions (m,n), convolution can be written as:
    </p>
    <img src='static/images/convEq.png' style={{width: "100%"}}/>
    <p>
    Visually, this operation can be seen as scanning the center of the kernel over the data matrix where the value of the output under the center of kernel is equal to the sum of the product of the values of the kernel multiplied by the values of the data matrix immediately below them.
    This can be seen in the following sequence of images:
    </p>
    <img src='static/images/conv1.png' style={{width: 50+"%", marginLeft: 25+"%"}}/>
    <img src='static/images/conv2.png' style={{width: 49+"%"}}/>|
    <img src='static/images/conv3.png' style={{width: 49+"%"}}/>
    <img src='static/images/conv4.png' style={{width: 49+"%"}}/>|
    <img src='static/images/conv5.png' style={{width: 49+"%"}}/>
    <img src='static/images/conv6.png' style={{width: 49+"%"}}/>|
    <img src='static/images/conv7.png' style={{width: 49+"%"}}/>
    <img src='static/images/conv8.png' style={{width: 49+"%"}}/>|
    <img src='static/images/conv9.png' style={{width: 49+"%"}}/>
    <img src='static/images/conv10.png' style={{width: 49+"%"}}/>
    <img src='static/images/conv11.png' style={{width: 50+"%", marginLeft: 25+"%"}}/>
    <p>
    By designing recognizing the outputs of convolution we can design kernels to perform specific tasks on images.
    This application aims to provide the opportunity to learn about convolution and kernels through example and experimentation.
    Explore the provided, common, kernels in the list below (click the ?-icon to read about them) and try designing your own kernels by editing the matrix to the right.
    Try convolving these kernels with images from the gallery and any image from your computer.
    </p>
    <p>
    Sources:
    </p>
    <ul>
      <li style={{fontSize:"12px"}}>https://graphics.stanford.edu/courses/cs178/applets/convolution.html</li>
      <li style={{fontSize:"12px"}}>https://graphics.stanford.edu/courses/cs148-10-summer/docs/04_imgproc.pdf</li>
    </ul>
  </div>
)

const sobelXBody = (
  <div>
    <img src='static/images/sobelx.png' style={{width: 50+"%", marginLeft: 25+"%"}}/>
    <p>
    Sobel kernels create an image emphasizing edges in a specific direction.
    It calculates the gradient of the image in the x direction, thereby highlighting vertical edges on the image.
    When the results of an X- and Y- Sobel filter are combined using </p>
    <img src='https://upload.wikimedia.org/math/3/d/8/3d82fd5595a30ee764dc968e29101012.png'/>
    <p>
    (Where Gx and Gy are the gradients in their respective directions and G is the final image result) the final result displays the edges present in the original image.
    </p>
  </div>
)

const sobelYBody = (
  <div>
    <img src='static/images/sobely.png' style={{width: 50+"%", marginLeft: 25+"%"}}/>
    <p>
    Sobel kernels create an image emphasizing edges in a specific direction.
    It calculates the gradient of the image in the y direction, thereby highlighting horizontal edges on the image.
    When the results of an X- and Y- Sobel filter are combined using </p>
    <img src='https://upload.wikimedia.org/math/3/d/8/3d82fd5595a30ee764dc968e29101012.png'/>
    <p>
    (Where Gx and Gy are the gradients in their respective directions and G is the final image result) the final result displays the edges present in the original image.
    </p>
  </div>
)

const edgeBody = (
  <div>
    <img src='static/images/edge.png' style={{width: 50+"%", marginLeft: 25+"%"}}/>
    <p>
    A simple edge detection kernel, sometimes called an "outline" kernel.
    This kernel finds regions with large changes in pixel values by multiplying the central pixel by the sum of 8 times the value below the center plus -1 times the values surrounding the center.
    In regions of low variability, the combined negative value of the surrounding pixels will balance out the high positive central value and result in a low value, appearing black.
    In regions of high variability, the central value will dominate and the pixel will appear lighter.
    </p>
  </div>
)

const embossBody = (
  <div>
    <img src='static/images/emboss.png' style={{width: 50+"%", marginLeft: 25+"%"}}/>
    <p>
    The emboss kernel is very similar to the Sobel filters in that it highlights the differences of pixels in a given direction.
    In this implementation the kernel computes the gradient of the image in the direction from the top left to the bottom right.
    Additionally, because the central value of this kernel is 1, the kernel maintains the main color of the image while also emphasizing the gradient.
    </p>
  </div>
)

const sharpenBody = (
  <div>
    <img src='static/images/sharpen.png' style={{width: 50+"%", marginLeft: 25+"%"}}/>
    <p>
    The sharpen kernel uses similar ideas as the edge (outline) kernel to emphasize differences in adjacent pixel values.
    In fact, if you lower the center value to 4 it acts as a very basic edge kernel in the X- and Y-directions (no input from the corners).
    The increased center value maintains the original color of the image while also highlighting the edges.
    </p>
  </div>
)

const boxBlurBody = (
  <div>
    <img src='static/images/boxblur.png' style={{width: 50+"%", marginLeft: 25+"%"}}/>
    <p>
    The Box Blur kernel is a very simple blurring kernel.
    The kernel takes the average of all of the surrounding pixels with no additional weighting.
    The even weighting blurs in a "box" pattern, but additional iterations of the convolution will produce more "circular" results more similar to a Gaussian blur.
    </p>
  </div>
)

const gaussianBlurBody = (
  <div>
    <img src='static/images/gaussianblur.png' style={{width: 50+"%", marginLeft: 25+"%"}}/>
    <p>
    The Gaussian Blur kernel smoothes an image using a <a href="https://en.wikipedia.org/wiki/Gaussian_function">Gaussian Function</a>.
    The kernel takes the average of all of the surrounding pixels weighting pixels nearer to the center more than those on the outside.
    This weighting creates a smoother, more "circular" blurring pattern.
    </p>
  </div>
)

const unsharpMaskBody = (
  <div>
    <img src='static/images/unsharpmask.png' style={{width: 50+"%", marginLeft: 25+"%"}}/>
    <p>
    The Unsharp Mask kernel is a more sharpening kernel that combines concepts from the simple sharpen kernel and the Gaussian Blur.
    The large central value is surrounded by smaller negative values like the sharpen mask that emphasizes differences in intensity values between neighboring pixels.
    However, rather than having constant values surrounding the center, the outlying values decrease as a smooth function as they get further from the center.
    This smooth weighting still emphasizes edges in the source image but adds much less noise and distortion to the image than the simpler sharpen kernel.
    </p>
  </div>
)

const modalData = {
  "Sobel-X": {
    id: "kernelSobel-XModal",
    label: "sobel-X Kernel Details",
    heading: "Sobel X-Directional Kernel",
    body: sobelXBody
  },
  "Sobel-Y": {
    id: "kernelSobel-YModal",
    label: "sobel-Y Kernel Details",
    heading: "Sobel Y-Directional Kernel",
    body: sobelYBody
  },
  "Edge": {
    id: "kernelEdgeModal",
    label: "Edge Kernel Details",
    heading: "Edge Kernel",
    body: edgeBody
  },
  "Emboss": {
    id: "kernelEmbossModal",
    label: "Emboss Kernel Details",
    heading: "Emboss Kernel",
    body: embossBody
  },
  "Sharpen": {
    id: "kernelSharpenModal",
    label: "Sharpen Kernel Details",
    heading: "Sharpen Kernel",
    body: sharpenBody
  },
  "BoxBlur": {
    id: "kernelBox-blurModal",
    label: "Blur Kernel Details",
    heading: "Box Blur Kernel",
    body: boxBlurBody
  },
  "GaussianBlur": {
    id: "kernelGaussian-blurModal",
    label: "Gaussian Blur Kernel Details",
    heading: "Gaussian Blur Kernel",
    body: gaussianBlurBody
  },
  "UnsharpMask": {
    id: "kernelUnsharp-maskModal",
    label: "Unsharp Mask Kernel Details",
    heading: "Unsharp Mask Kernel",
    body: unsharpMaskBody
  },
  "settings": {
    id: "settingsModal",
    label: "Filter Mode Details",
    heading: "Filter Modes",
    body: settingsBody
  },
  "kernel": {
    id: "kernelModal",
    label: "Kernel and Convolution Details",
    heading: "Convolution and Kernels",
    body: kernelBody
  }
}

const makeModals = () => {
  return Object.keys(modalData).map(modalName => {
    return makeModal(modalData[modalName]);
  });
}

const Modals = () => (
  <div id="modals">
    {makeModals()}
  </div>
)

export default Modals
