<template>
	<v-container>
		<v-row>
			<photo v-for="photo in photos" :key="photo.id" :photo="photo"></photo>
		</v-row>
	</v-container>
</template>

<script>
import photo from '@/components/gallery/photo'

export default {
	components: {
		photo
	},
	data: () => ({
		photos: []
	}),
	mounted() {
		this.fetchTodo();
	},
	methods: {
		fetchTodo() {
			this.axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10')
			.then(response => this.photos = response.data)
		}
	}
}
</script>