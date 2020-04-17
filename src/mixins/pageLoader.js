export const pageLoader = {
	data() {
		return {
			isPageLoaded: false
		}
	},
	methods: {
		resolveData() {
			this.isPageLoaded = true
		}
	}
}