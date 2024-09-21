<template>
	<section class="content">
		<h1>Home page</h1>
		<br />
		<div class="counter-container">
			<button @click="add" type="button">add</button>
			<div>{{ data.counter }}</div>
			<button @click="minus" type="button">minus</button>
		</div>
	</section>
</template>

<script>
	import useCounter from '../store/useCounter'
	const { data, add, minus } = useCounter()
	export default { data, methods: { add, minus } }
</script>

<style lang="scss" scoped>
	.counter-container {
		display: flex;
		gap: 0.5rem;
	}
</style>
