<template>
	<v-card class="mb-16">
		<v-card-title>
			Заголовок
		</v-card-title>
		<v-card-subtitle>
			Дата
		</v-card-subtitle>
		<v-card-text>
			<!-- <v-img :src="full.url" width="200" height="200"></v-img> -->
			Картинка
		</v-card-text>
		<v-card-text>
			Текст
		</v-card-text>
	</v-card>
</template>

<script>
export default {
	props: {
		full: {
			type: Object,
			required: true
		}
	}
}
</script>