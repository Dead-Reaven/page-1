<template>
	<img class="bg" src="/public/assets/hero.png" alt="" />
	<header class="k2d-300">
		<div class="container">
			Для замовлення та консультацій: +38 (099) 6 800 900; +38 (097) 6 800 900;
			+38 (073) 6 800 901
		</div>
	</header>

	<main class="wrapper">
		<section class="container border-gradient">
			<nav class="content">
				<div class="nav_header">
					<img
						src="/public/icons/def-ukr.png	"
						class="nav_header_ico"
						alt="ico"
					/>
					<h1 class="k2d-800 color-blue">
						ЖМЕРЕНСЬКИЙ ЦЕНТР ВІЙСЬКОВО-ПАТРІОТИЧНОГО ВИХОВАННЯ
					</h1>
				</div>
				<div class="nav_links">
					<a class="btn active-red k2d-700" href="#">
						<img src="/public/icons/check-ico.png" alt="" />
						Методичні рекомендації
					</a>
					<a class="btn green k2d-700" href="#">Промо</a>
					<a class="btn violet k2d-700" href="#">Quiz</a>
				</div>
			</nav>
		</section>

		<section
			style="padding: 2rem 0"
			class="monda-700 container border-gradient"
		>
			<div class="content">
				<div class="" v-for="el in institutions" :key="el.name">
					<a href="">
						<div class="institutions">
							<span>{{ el.class }}</span>
							<!-- <hr /> -->
							<span>{{ el.name }}</span>
							<!-- <hr /> -->
							<span><img src="/public/icons/orange-book.png" alt="ico" /></span>
						</div>
					</a>
				</div>
			</div>
		</section>
	</main>
</template>

<style scoped></style>

<script>
	export default {
		data: () => ({
			institutions: [
				{
					name: ' Браїлівська гімназія Жмеринської міської територіальної громади',
					class: '10-A',
				},
				{
					name: 'Філія"Коростівецька гімназія" Комунального закладу "Жмеринський ліцей № 6"',
					class: '10-A',
				},
				{
					name: 'Філія"Коростівецька гімназія" Комунального закладу "Жмеринський ліцей № 6"',
					class: '10-A',
				},
				{
					name: 'Філія"Коростівецька гімназія" Комунального закладу "Жмеринський ліцей № 6"',
					class: '10-A',
				},
				{
					name: 'Філія"Коростівецька гімназія" Комунального закладу "Жмеринський ліцей № 6"',
					class: '10-В',
				},
			],
		}),
	}
</script>
