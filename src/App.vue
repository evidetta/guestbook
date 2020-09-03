<template>
  <div id="app" class="bg-white">
    <h1 class="bg-dark text-light">Guestbook</h1>
    <div class="container">
      <div class="row">
        <div class="col-2"></div>
        <div class="col">
          <Guestbook />
          <Form />
        </div>
        <div class="col-2"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import "bootstrap/dist/css/bootstrap.css";

import { Component, Vue } from "vue-property-decorator";

import Guestbook from "./components/Guestbook.vue";
import Form from "./components/Form.vue";

import { Post } from "./model/post";

@Component({
  components: {
    Guestbook,
    Form
  }
})
export default class App extends Vue {}
</script>