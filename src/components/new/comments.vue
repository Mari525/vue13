<template>
	<v-card class="mb-16">
		<v-card-title>Имя</v-card-title>
		<v-card-text>Комментарий</v-card-text>
	</v-card>
</template>

<script>
export default {
	props: {
		comments: {
			type: Object,
			required: true
		}
	}
}
</script>