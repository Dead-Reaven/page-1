import { reactive } from 'vue'

const useCounter = () => {
	const data = reactive({
		counter: 0,
	})

	const add = () => {
		data.counter++
	}

	const minus = () => {
		data.counter--
	}

	return {
		data: () => ({ data }),
		add,
		minus,
	}
}

export default useCounter
