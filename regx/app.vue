<template>
  <div></div>
</template>

<script>
import {camelCase} from './utils/conclude';
import {print} from '../utils';
export default {
  created() {
    print(
      camelCase('Moz-moz')
    )
  },
  methods: {
  }
}
</script>

<style>

</style>