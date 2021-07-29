<template>
  <CmpHeader />
  <div class="view widgets">
    <h1>This is Widget page</h1>
  </div>
  <CmpFooter />
</template>

<script>
import CmpHeader from '@/components/shared/CmpHeader'
import CmpFooter from '@/components/shared/CmpFooter'
export default {
  name: 'Widgets',
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
