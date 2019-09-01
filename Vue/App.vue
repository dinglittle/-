<template>
	<div class="container">
		<main>
			<component :is="selected">
				<svg class="winebottle" aria-labelledby="title" xmlns="http://www.w3.org/2000/svg" viewBox=" 0 155 140 300">
					...
				</svg>
			</component>
		</main>
		<aside>
			<h4>Name your Wine</h4>
			<input v-model="label" maxlength="18">
			<div class="button-row">
				<h4>Color</h4>
				<button @click="selected = 'appBlack', labelColor='#000000'">Black Label</button>
				<button @click="selected = 'appWhite',labelColor='#ffffff'">White Label</button>
				<input type="color" v-model="labelColor" defaultValue="#ff0000">
			</div>
		</aside>
	</div>	
</template>
<script>
	import Black from './component/Black.vue'
</script>