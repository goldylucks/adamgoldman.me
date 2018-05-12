import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })
Enzyme.ShallowWrapper.prototype.sel = function shallowSel(id) { return this.find(sel(id)) }
Enzyme.ReactWrapper.prototype.sel = function reactSel(id) { return this.find(sel(id)) }
Enzyme.ShallowWrapper.prototype.changeInputValue = function shallowChangeInputValue(value) {
  changeInputValue(this, value)
  return this
}
Enzyme.ReactWrapper.prototype.changeInputValue = function reactChangeInputValue(value) {
  changeInputValue(this, value)
  return this
}


jest.mock('../src/utils/fbUtils')

global.sel = sel
global.changeInputValue = changeInputValue

class LocalStorageMock {
  constructor() {
    this.store = {}
  }

  clear() {
    this.store = {}
  }

  getItem(key) {
    return this.store[key] || null
  }

  setItem(key, value) {
    this.store[key] = value.toString()
  }

  removeItem(key) {
    delete this.store[key]
  }
}

global.localStorage = new LocalStorageMock()

function sel(id) {
  return `[data-test="${id}"]`
}

function changeInputValue(input, value) {
  input.simulate('change', { target: { value } })
}
