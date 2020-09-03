import Vue from 'vue'
import Vuex from 'vuex'

import { Post } from '../model/post';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [
      new Post("Elia Videtta", "Thanks for the memories!"),
      new Post("Jesse Costelloe", "No wuckers, cobber."),
      new Post("Matt Simmonds", "Oxford is the best.")
    ]
  },
  getters: {
    posts: state => state.posts,
  },
  actions: {
    addPost(context, post: Post) {
      context.commit("addPost", post);
    }
  },
  mutations: {
    addPost(state, post: Post) {
      state.posts.push(post);
    }
  },
  modules: {
  }
})
