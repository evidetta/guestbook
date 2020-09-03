<template>
  <form class="bg-light text-dark w-100 p-3 mt-1">
    <fieldset>
      <legend>Leave a message...</legend>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">Name</span>
        </div>
        <input ref="name" type="text" class="form-control" v-model="name" />
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">Message</span>
        </div>
        <textarea ref="msg" class="form-control" v-model="msg"></textarea>
      </div>
      <div class="alert alert-danger collapse" :class="{show: hasError}" role="alert">
        <strong>Error: </strong>
        {{error}}
      </div>
      <button type="button" class="btn btn-primary" @click="validate(name, msg)">Post</button>
    </fieldset>
  </form>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapActions } from "vuex";

import { Post } from "../model/post";

@Component({
  name: "Form",
  data() {
    return {
      name: "",
      msg: "",
      error: "",
      hasError: false,
    };
  },
  methods: {
    ...mapActions(["addPost"]),
    validate(name: string, msg: string) {
      try {
        this.$data.hasError = false;

        if (name === "") {
          (this.$refs.name as any).focus();
          throw new Error("Please enter your name.");
        }

        if (msg == "") {
          (this.$refs.msg as any).focus();
          throw new Error("Please enter your message.");
        }

        (this as any).addPost(new Post(name, msg));

        this.$data.name = "";
        this.$data.msg = "";
      } catch (e) {
        this.$data.error = (e as Error).message;
        this.$data.hasError = true;
      }
    },
  },
})
export default class Form extends Vue {}
</script>