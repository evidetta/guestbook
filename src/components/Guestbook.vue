<template>
    <div>
        <Post :key="post.id" :post="post" :index="index" v-for="(post, index) in posts" />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import {mapGetters} from "vuex";

import Post from "./Post.vue";

@Component({
    name: "Guestbook",
    components: {Post},
    computed: {...mapGetters([
        "posts"
    ])}
})
export default class Guestbook extends Vue {}
</script>