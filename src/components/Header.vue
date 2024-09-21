<template>
	<header>
		<nav class="content">
			<img src="/public/vite.svg" />
			<RouterLink :to="path" v-for="{ name, path } in routes" :key="name">
				{{ name }}
			</RouterLink>
		</nav>
	</header>
</template>

<script>
	import { routes } from '../router'
	export default {
		data: () => ({ routes }),
	}
</script>

<style scoped lang="scss">
	header {
		padding: 16px 0px;
	}
	nav {
		display: flex;
		align-items: center;
		justify-items: center;
		gap: 1rem;
	}
	a {
		color: var(--color-font);
		text-decoration: none;
		font-size: 2rem;
		transition: all 0.25s;
		text-wrap: nowrap;
	}

	a:hover {
		color: orange;
	}
	@media (max-width: var(--tablet)) {
		a {
			font-size: 1.5rem;
		}
	}
</style>
