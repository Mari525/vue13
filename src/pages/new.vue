<template>
	<v-container>
		<full></full>
		<newComment></newComment>
		<comments></comments>
	</v-container>
</template>

<script>
import full from '@/components/new/full'
import comments from '@/components/new/comments'
import newComment from '@/components/new/newComment'

export default {
	components: {
		full,
		comments,
		newComment
	}
}
</script>