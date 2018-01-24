
<template>
  <div class="hello">
    <h2>Partqualities</h2>
    <ul>
      <li
        v-for="partQuality in partQualities"
        :key="partQuality.id"
      >
        {{ partQuality.type }}
        <ul>
          <li
            v-for="translation in partQuality.translations"
            :key="translation.country + translation.language"
          >
            {{ translation.translation }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import api from './Api';

export default {
  name: 'HelloWorld2',
  data() {
    return {
      partQualities: [],
    };
  },

  created: function() {
    const params = {
      countryCode: 'DE',
      languageCode: 'de',
    };

    api
      .listPartQualities(params)
      .then(({data}) => {
        this.partQualities = data;
      })
    ;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  color: blue;
}
a {
  color: #000;
}
</style>
