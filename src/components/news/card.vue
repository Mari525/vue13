<template>
	<v-col>
		<v-card>
			<v-card-title>
				{{ card.name }}
			</v-card-title>
			<v-card-text>
				<v-img :src="card.preview_image" width="200" height="200"></v-img>
			</v-card-text>
			<v-card-text>
				{{ card.shortDesc }}
			</v-card-text>
		</v-card>
	</v-col>
</template>

<script>
export default {
	props: {
		card: {
			type: Object,
			required: true
		}
	}
}
</script>