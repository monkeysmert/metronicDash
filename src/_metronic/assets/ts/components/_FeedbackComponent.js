import {
  DataUtil,
  ElementStyleUtil,
  EventHandlerUtil,
  getUniqueIdWithPrefix,
  getAttributeValueByBreakpoint
} from "../_utils/index"

const defaultFeedbackOptions = {
  width: 100,
  placement: "top-center",
  content: "",
  type: "popup"
}

class FeedbackComponent {
  constructor(_element, options) {
    this.element = _element
    this.options = Object.assign(defaultFeedbackOptions, options)
    this.instanceUid = getUniqueIdWithPrefix("feedback")
    this.shown = false

    // Event handlers
    this._handlers() // will add in the show popup
    DataUtil.set(this.element, "feedback", this)
  }

  _handlers = () => {
    this.element.addEventListener("click", e => {
      e.preventDefault()
      this._go()
    })
  }

  _go = () => {}

  showPopup = () => {
    this.element = document.createElement("DIV")

    this.element.classList.add("feedback feedback-popup")
    this.element.innerHTML = this.options.content || ""

    if (this.options.placement === "top-center") {
      this.setPopupTopCenterPosition()
    }

    document.body.appendChild(this.element)
    this.element.classList.add("feedback-shown")
    this.shown = true
  }

  setPopupTopCenterPosition = () => {
    const width = getAttributeValueByBreakpoint(
      this.options.width?.toString() || "0"
    )
    const height = ElementStyleUtil.get(this.element, "height")
    this.element.classList.add("feedback-top-center")
    ElementStyleUtil.set(this.element, "width", width)
    ElementStyleUtil.set(this.element, "left", "50%")
    ElementStyleUtil.set(this.element, "top", "-" + height)
  }

  hidePopup = () => {
    this.element.remove()
  }

  ///////////////////////
  // ** Public API  ** //
  ///////////////////////
  show = () => {
    if (EventHandlerUtil.trigger(this.element, "kt.feedback.show") === false) {
      return
    }

    if (this.options.type === "popup") {
      this.showPopup()
    }

    EventHandlerUtil.trigger(this.element, "kt.feedback.shown")

    return this
  }

  hide = () => {
    if (EventHandlerUtil.trigger(this.element, "kt.feedback.hide") === false) {
      return
    }

    if (this.options.type === "popup") {
      this.hidePopup()
    }

    this.shown = false
    EventHandlerUtil.trigger(this.element, "kt.feedback.hidden")
    return this
  }

  isShown = () => {
    return this.isShown
  }

  getElement = () => {
    return this.element
  }

  // Event API
  on = (name, handler) => {
    return EventHandlerUtil.on(this.element, name, handler)
  }

  one = (name, handler) => {
    return EventHandlerUtil.one(this.element, name, handler)
  }

  off = (name, handerId) => {
    return EventHandlerUtil.off(this.element, name, handerId)
  }

  trigger = (name, event) => {
    return EventHandlerUtil.trigger(this.element, name, event)
  }

  // Create Instances
  static createInstances(selector) {
    throw new Error("not implemented")
  }

  // Static methods
  static hasInstace(element) {
    throw new Error("not implemented")
  }

  static getInstance(element) {
    throw new Error("not implemented")
  }

  static bootstrap(attr = "[data-Feedback]") {
    throw new Error("not implemented")
  }
}

export { FeedbackComponent, defaultFeedbackOptions }
