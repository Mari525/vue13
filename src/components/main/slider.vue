<template>
  <v-carousel v-model="model">
    <v-carousel-item v-for="slide in slides" :key="slide.id" :slide="slide">
      <v-sheet height="80%">
        <v-container class="fill-height">
          <v-row class="text-h4 ml-16">
            {{ slide.name }}
          </v-row>
          <p class="text ml-16">
            {{ slide.shortDesc }}
          </p>
        </v-container>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>

export default {
	props: {
		slide: {
			type: Object,
			required: true
		}
	},
	data: () => ({
		slides: []
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
        this.slides = result;
			},
			(error) => {
        console.log(error);
			}
		);
	}
}

</script>