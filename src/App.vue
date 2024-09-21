<script>
	import Header from './components/Header.vue'
	import Footer from './components/Footer.vue'
	export default {
		components: { Header, Footer },
	}
</script>

<template>
	<Header />
	<main><RouterView></RouterView></main>
	<Footer />
</template>

<style scoped>
	main {
	}
</style>
