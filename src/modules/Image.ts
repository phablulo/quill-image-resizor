const BaseImageFormat = window.Quill.import('formats/image')
const ImageFormatAttributesList = ['alt', 'height', 'width', 'style', 'w', 'h']

// thanks Maximus!
// https://github.com/kensnyder/quill-image-resize-module/issues/10#issuecomment-317747389
export default class ImageFormat extends BaseImageFormat {
  static formats(domNode) {
    return ImageFormatAttributesList.reduce(function (formats, attribute) {
      if (domNode.hasAttribute(attribute)) {
        formats[attribute] = domNode.getAttribute(attribute)
      }
      return formats
    }, {})
  }
  format(name, value) {
    if (ImageFormatAttributesList.indexOf(name) > -1) {
      if (value) {
        this.domNode.setAttribute(name, value)
      } else {
        this.domNode.removeAttribute(name)
      }
    } else {
      super.format(name, value)
    }
  }
}
