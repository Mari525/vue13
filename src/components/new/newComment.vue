<template>
  <form class="mb-10">
    <v-text-field
      v-model="name"
      :counter="10"
      label="Name"
      required
    ></v-text-field>
	<v-textarea
      name="comment"
      filled
      label="Your comment"
      auto-grow
    ></v-textarea>
    <v-btn class="mr-4">
      submit
    </v-btn>
  </form>
</template>

<script>
export default {
	props: {
		newComment: {
			type: Object,
			required: true
		}
	}
}
</script>