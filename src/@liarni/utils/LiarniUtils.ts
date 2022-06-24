/* eslint-disable @typescript-eslint/ban-types */

class EventEmiter {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	private events: any

	constructor() {
		this.events = {}
	}

	private getEventListByName(eventName: string) {
		if (typeof this.events[eventName] === 'undefined') {
			this.events[eventName] = new Set()
		}

		return this.events[eventName]
	}

	public on(eventName: string, fn: Function): void {
		this.getEventListByName(eventName).add(fn)
	}

	public once(eventName: string, fn: Function): void {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const onceFn = (...args: any[]) => {
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			this.removeListener(eventName, onceFn)
			fn.apply(this, args)
		}
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	public emit(eventName: string, ...args: any[]) {
		this.getEventListByName(eventName).forEach((fn: Function) => fn.apply(this, args)).bind(this)
	}

	public removeListener(eventName: string, fn: Function) {
		this.getEventListByName(eventName).delete(fn)
	}
}


class LiarniUtils {
	static EventEmiter = EventEmiter
}

export default LiarniUtils