
import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "body", "characterCount" ]

  initialize() {
    this.update()
  }
  update() {
    let count = this.bodyTarget.value.length
    let message = ""
    if (count == 1) {
      message = "1 character"
    } else {
      message = `${count} characters`
    }
    this.characterCountTarget.textContent = message
  }
}
