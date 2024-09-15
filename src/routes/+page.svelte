<!DOCTYPE html>
<html lang="de">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Vokabeltrainer</title>
		<script src="data.js"></script>
		<script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>

		<style>
		</style>
	</head>

	<body>
		<div class="mdl-layout mdl-js-layout mt-0 pt-0">
			<header class="mdl-layout__header mdl-layout__header--scroll">
				<div class="mdl-layout__header-row">
					<!-- Title -->
					<span class="mdl-layout-title">Vokabeltrainer</span>
					<!-- Add spacer, to align navigation to the right -->
					<div class="mdl-layout-spacer"></div>
					<!-- Navigation -->
					<nav class="mdl-navigation">
						<a class="mdl-navigation__link" href="src/routes/vocTest/+page.svelte">Vokabel-Test</a>
						<a class="mdl-navigation__link" href="src/routes/addVoc/+page.svelte">Hinzufügen</a>
					</nav>
				</div>
			</header>
			<div class="mdl-layout__drawer">
				<span class="mdl-layout-title">Vokabeltrainer</span>
				<nav class="mdl-navigation">
					<a class="mdl-navigation__link" href="">Link</a>
					<a class="mdl-navigation__link" href="">Link</a>
				</nav>
			</div>

			<main class="mdl-layout__content justify-center text-center item-center align-middle">
				<div class="page-content mt-80">
					<p>Was bedeutet</p>
					<h1>?</h1>

					<!-- Simple Textfield -->
					<form action="#">
						<div class="mdl-textfield mdl-js-textfield">
							<input class="mdl-textfield__input" type="text" id="germanText" />
							<label class="mdl-textfield__label" for="sample1">Deutsch...</label>
						</div>
						<!-- Colored FAB button -->
						<button class="mdl-button mdl-js-button mdl-button--fab mdl-button--colored">
							<i class="material-icons">add</i>
						</button>
					</form>
					<div></div>
				</div>
			</main>

		</div></body
	></html
>
