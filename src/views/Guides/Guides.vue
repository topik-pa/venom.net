<template>
  <CmpHeader />
  <div class="view guides">
    <h1>Le Guide di Venom</h1>
    <nav>
      <!--<router-link :to="{name: 'Preview', params: { id: 0 }}">Web Application da 0 al Deploy</router-link>-->
      <router-link :to="{name: 'WebAppGuide'}">Web Application da 0 al Deploy</router-link>
    </nav>
    <router-view></router-view>
  </div>
  <CmpFooter />
</template>

<script>
import CmpHeader from '@/components/shared/CmpHeader'
import CmpFooter from '@/components/shared/CmpFooter'
export default {
  name: 'Guides',
  components: {
    CmpHeader,
    CmpFooter
  },
  data () {
    return {}
  }
}
</script>

<style scoped lang="scss">
</style>
