<template>
  <div class="w-100 p-3" v-bind:class="{'bg-dark text-light': displayDarkBackground(), 'bg-light text-dark': displayLightBackground()}">
    <p>
      <strong>Name:</strong>
      <br />{{post.name}}
    </p>
    <p>
      <strong>Message:</strong>
      <br />{{post.msg}}
    </p>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

enum PostBackground {
    Dark,
    Light
}

@Component({
    name: "Post",
    props: ["post", "index"],
    methods: {
        getPostBackground(index: number) {
            if(index % 2 == 0) {
                return PostBackground.Light;
            } else {
                return PostBackground.Dark;
            }
        },
        displayDarkBackground() {
          return (this as any).getPostBackground(this.$props.index) == PostBackground.Dark;
        },
        displayLightBackground() {
          return (this as any).getPostBackground(this.$props.index) == PostBackground.Light;
        }
    }
})
export default class Post extends Vue{}
</script>