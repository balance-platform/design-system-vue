<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="@/assets/images/logo.png"
    >

    <Button color="primary">
      Sign In
    </Button>
  </div>
</template>

<script>
import Button from '@/components/Button'

export default {
  name: 'Home',

  components: {
    Button
  }
}
</script>
