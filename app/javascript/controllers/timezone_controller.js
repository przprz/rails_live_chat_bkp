import { Controller } from "@hotwired/stimulus"

export class TimezoneController extends Controller {
    static targets = ["time"]

    timeTargetConnected(element) {
        this._convertToLocalTime(element);
    }

    _convertToLocalTime(element) {
        const utcTime = new Date(element.dataset.foo)
        const newTime = utcTime.toLocaleString("pl-PL", { timeZone: "Europe/Warsaw" })
        element.innerText = newTime
    }
}
