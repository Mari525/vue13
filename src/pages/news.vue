<template>
	<v-container>
		<v-row>
			<card v-for="card in cardsList" :key="card.id" :card="card"></card>
		</v-row>
	</v-container>
</template>

<script>
import card from '@/components/news/card'

export default {
	components: {
		card
	},
	data: () => ({
		cardsList: []
	}),
	beforeMount() {
		fetch("/articles.json", {
			method: "GET",
			headers: { "Content-Type": "application/json" },
			})
		.then((res) => {
			return res.json();
		})
		.then(
			(result) => {
			this.cardsList = result;
			},
			(error) => {
			console.log(error);
			}
		);
	}
}

</script>