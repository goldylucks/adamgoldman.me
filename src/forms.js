export const inputChange = function inputChange(key) {
  return function inputChangeInner(evt) {
    this.setState({ [key]: evt.target.value })
  }.bind(this)
}

export const inputToggle = function inputToggle(key) {
  return function inputToggleInner() {
    this.setState({ [key]: !this.key })
  }.bind(this)
}
