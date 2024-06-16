import type ImageResizor from '../ImageResizor'
import { BaseModule } from './BaseModule'

export class Resize extends BaseModule {
  boxes: HTMLDivElement[] = []
  dragBox: HTMLDivElement | null = null
  dragStartX = 0
  dragStartY = 0
  preDragWidth = 0
  preDragHeight = 0
  preDragARatio = 0

  constructor(imageResizor: ImageResizor) {
    super(imageResizor)
  }

  onCreate = () => {
    // track resize handles
    this.boxes = []

    // add 3 resize handles
    this.addBox('e-resize') // right
    this.addBox('n-resize') // bottom
    this.addBox('nwse-resize') // right bottom

    this.positionBoxes()
  }

  onDestroy = () => {
    // reset drag handle cursors
    this.setCursor('')
  }

  positionBoxes = () => {
    const handleXOffset = `${-parseFloat(this.options.handleStyles?.width.toString() || '0') / 2}px`
    const handleYOffset = `${-parseFloat(this.options.handleStyles?.height.toString() || '0') / 2}px`

    // set the top and left for each drag handle
    ;[
      { right: handleXOffset, top: `calc(50% - ${handleYOffset.slice(1)})` }, // right
      { left: `calc(50% - ${handleXOffset.slice(1)})`, bottom: handleYOffset }, // bottom
      { right: handleXOffset, bottom: handleYOffset } // bottom right
    ].forEach((pos, idx) => {
      Object.assign(this.boxes[idx].style, pos)
    })
  }

  addBox = (cursor) => {
    // create div element for resize handle
    const box = document.createElement('div')

    // Star with the specified styles
    Object.assign(box.style, this.options.handleStyles)
    box.style.cursor = cursor

    // Set the width/height to use 'px'
    box.style.width = `${this.options.handleStyles?.width || 0}px`
    box.style.height = `${this.options.handleStyles?.height || 0}px`

    // listen for mousedown on each box
    box.addEventListener('mousedown', this.handleMousedown, false)
    // add drag handle to document
    this.overlay?.appendChild(box)
    // keep track of drag handle
    this.boxes.push(box)
  }

  handleMousedown = (evt: MouseEvent) => {
    // note which box
    this.dragBox = evt.target as HTMLDivElement
    // note starting mousedown position
    this.dragStartX = evt.clientX
    this.dragStartY = evt.clientY
    // store the width before the drag
    this.preDragWidth = this.img?.width || this.img?.naturalWidth || 0
    // store the height before the drag
    this.preDragHeight = this.img?.height || this.img?.naturalHeight || 0
    // store aspect ratio for performance
    this.preDragARatio = this.preDragHeight / this.preDragWidth
    // set the proper cursor everywhere
    this.setCursor(this.dragBox.style.cursor)
    // listen for movement and mouseup
    document.addEventListener('mousemove', this.handleDrag, false)
    document.addEventListener('mouseup', this.handleMouseup, false)
  }

  handleMouseup = () => {
    // reset cursor everywhere
    this.setCursor('')
    // stop listening for movement and mouseup
    document.removeEventListener('mousemove', this.handleDrag)
    document.removeEventListener('mouseup', this.handleMouseup)
  }

  handleDrag = (evt) => {
    if (!this.img) {
      // image not set yet
      return
    }
    // update image size
    if (this.dragBox === this.boxes[1]) {
      // bottom
      const delta = evt.clientY - this.dragStartY
      this.img.height = Math.round(this.preDragHeight + delta)
    } else {
      const delta = evt.clientX - this.dragStartX
      if (this.dragBox === this.boxes[0]) {
        // right
        this.img.width = Math.round(this.preDragWidth + delta)
      } else {
        // right bottom
        const w = this.preDragWidth + delta
        this.img.width = Math.round(w)
        this.img.height = Math.round(w * this.preDragARatio)
      }
    }
    this.requestUpdate()
  }

  setCursor = (value) => {
    const elements = [document.body, this.img]
    elements.forEach((el) => {
      if (el) {
        el.style.cursor = value
      }
    })
  }
}
