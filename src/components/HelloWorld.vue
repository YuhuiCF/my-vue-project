<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li
        v-for="essentialPage in essentialPages"
        :key="essentialPage.pageLink"
      >
        <a
          target="_blank"
          :href="essentialPage.pageLink"
        >
          {{ essentialPage.pageName }}
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li
        v-for="ecosystemPage in ecosystemPages"
        :key="ecosystemPage.pageLink"
      >
        <a
          target="_blank"
          :href="ecosystemPage.pageLink"
        >
          {{ ecosystemPage.pageName }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld2',
  data() {
    return {
      ecosystemPages: [
        {
          pageLink: 'http://router.vuejs.org/',
          pageName: 'vue-router',
        },
        {
          pageLink: 'http://vuex.vuejs.org/',
          pageName: 'vuex',
        },
        {
          pageLink: 'http://vue-loader.vuejs.org/',
          pageName: 'vue-loader',
        },
        {
          pageLink: 'https://github.com/vuejs/awesome-vue',
          pageName: 'awesome-vue',
        },
      ],
      essentialPages: [
        {
          pageLink: 'https://vuejs.org',
          pageName: 'Core Docs',
        },
        {
          pageLink: 'https://forum.vuejs.org',
          pageName: 'Forum',
        },
        {
          pageLink: 'https://chat.vuejs.org',
          pageName: 'Community Chat',
        },
        {
          pageLink: 'https://twitter.com/vuejs',
          pageName: 'Twitter',
        },
        {
          pageLink: 'http://vuejs-templates.github.io/webpack/',
          pageName: 'Docs for this Template',
        },
      ],
      msg: 'Welcome to my modified Vue.js App',
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
