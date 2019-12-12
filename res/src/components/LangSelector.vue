<template>
  <div class="langselector">
    <v-select :items="langs"
              item-value="code"
              :hide-details=true
              v-model="$i18n.locale">
      <template v-slot:selection="{ item, index }">
        <v-avatar size="20">
          <img :src="item.img">
        </v-avatar>
      </template>
      <template v-slot:item="{ item, index }">
        <v-avatar size="20">
          <img :src="item.img">
        </v-avatar>
      </template>
    </v-select>
  </div>
</template>

<script>
import spain from '@/assets/img/spain.svg'
import england from '@/assets/img/england.svg'

export default {
  name: 'TLangSelector',
  data() {
    return {
      langs: [
        { code: 'es', img: spain },
        { code: 'en', img: england }
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.langselector {
  width: 50px;
}
</style>