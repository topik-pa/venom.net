<template>
  <CmpHeader />
  <div class="view home">
    <h1>*venom.net*</h1>
    <h2>*Costruire una applicazione Web attraverso lo stack Vue Express NOde e MongoDB*</h2>
    <section>*Descrizione*</section>
    <section>*Lezioni*</section>
    <section>*Widget*</section>
    <section>*Concetti*</section>
    <section>*Lo stack Venom*</section>
    <section>*Patreon*</section>
  </div>
  <CmpFooter />
</template>

<script>
import CmpHeader from '@/components/shared/CmpHeader'
import CmpFooter from '@/components/shared/CmpFooter'
export default {
  name: 'Home',
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
