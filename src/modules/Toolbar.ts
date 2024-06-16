import IconAlignLeft from 'quill/assets/icons/float-left.svg?raw'
import IconAlignCenter from 'quill/assets/icons/float-center.svg?raw'
import IconAlignRight from 'quill/assets/icons/float-right.svg?raw'
import { BaseModule } from './BaseModule'
import type ImageResizor from '../ImageResizor'
import ImageFormat from './Image'

window.Quill.register(ImageFormat, true)
const Parchment = window.Quill.imports.parchment
const FloatStyle = new Parchment.StyleAttributor('float', 'float')
const MarginStyle = new Parchment.StyleAttributor('margin', 'margin')
const DisplayStyle = new Parchment.StyleAttributor('display', 'display')

export class Toolbar extends BaseModule {
  toolbar?: HTMLDivElement
  alignments: {
    icon: string
    apply: () => void
    remove: () => void
    isApplied: () => boolean
  }[] = []

  constructor(resizer: ImageResizor) {
    super(resizer)
  }

  onCreate = () => {
    // Setup Toolbar
    this.toolbar = document.createElement('div')
    Object.assign(this.toolbar.style, this.options.toolbarStyles)
    this.overlay?.appendChild(this.toolbar)

    // Setup Buttons
    this._defineAlignments()
    this._addToolbarButtons()
  }

  // The toolbar and its children will be destroyed when the overlay is removed
  onDestroy = () => {}

  // Nothing to update on drag because we are are positioned relative to the overlay
  onUpdate = () => {}

  _defineAlignments = () => {
    this.alignments = []
    if (!this.img) return // nothing to do...
    const remove = () => {
      FloatStyle.remove(this.img)
      MarginStyle.remove(this.img)
      DisplayStyle.remove(this.img)
    }
    if (this.options.toolbarButtons?.left !== false)
      this.alignments.push({
        icon: IconAlignLeft,
        apply: () => {
          DisplayStyle.add(this.img, 'inline')
          FloatStyle.add(this.img, 'left')
          MarginStyle.add(this.img, '0 1em 1em 0')
        },
        isApplied: () => FloatStyle.value(this.img) === 'left',
        remove
      })
    if (this.options.toolbarButtons?.center !== false)
      this.alignments.push({
        icon: IconAlignCenter,
        apply: () => {
          DisplayStyle.add(this.img, 'block')
          FloatStyle.remove(this.img)
          MarginStyle.add(this.img, 'auto')
        },
        isApplied: () => MarginStyle.value(this.img) === 'auto',
        remove
      })
    if (this.options.toolbarButtons?.right !== false)
      this.alignments.push({
        icon: IconAlignRight,
        apply: () => {
          DisplayStyle.add(this.img, 'inline')
          FloatStyle.add(this.img, 'right')
          MarginStyle.add(this.img, '0 0 1em 1em')
        },
        isApplied: () => FloatStyle.value(this.img) === 'right',
        remove
      })
    const copy = { ...this.options.toolbarButtons }
    delete copy.left
    delete copy.right
    delete copy.center
    for (const value of Object.values(copy)) {
      if (!(value instanceof Function)) continue
      const button = value(this.img, DisplayStyle, FloatStyle, MarginStyle)
      this.alignments.push(button)
    }
  }

  _addToolbarButtons = () => {
    const buttons: HTMLSpanElement[] = []
    this.alignments.forEach((alignment, idx) => {
      const button = document.createElement('span')
      buttons.push(button)
      button.innerHTML = alignment.icon
      button.addEventListener('click', () => {
        // deselect all buttons
        buttons.forEach((button) => (button.style.filter = ''))
        if (alignment.isApplied()) {
          // If applied, unapply
          alignment.remove()
        } else {
          // otherwise, select button and apply
          this._selectButton(button)
          alignment.apply()
        }
        // image may change position; redraw drag handles
        this.requestUpdate()
      })
      Object.assign(button.style, this.options.toolbarButtonStyles)
      if (idx > 0) {
        button.style.borderLeftWidth = '0'
      }
      Object.assign((button.children[0] as HTMLOrSVGImageElement).style, this.options.toolbarButtonSvgStyles)
      if (alignment.isApplied()) {
        // select button if previously applied
        this._selectButton(button)
      }
      this.toolbar?.appendChild(button)
    })
  }

  _selectButton = (button) => {
    button.style.filter = 'invert(20%)'
  }
}
