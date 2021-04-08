<script>
/**
 * Loader Component
 *
 */

export default {
  name: 'Loader'
}
</script>

<template>
  <div class="loader-wrapper">
    <svg
      class="loader"
      viewBox="15 15 30 30"
    >
      <circle
        class="inner"
        fill="none"
        cx="30"
        cy="30"
        r="12"
      />
    </svg>
  </div>
</template>

<style lang="scss" scoped>
.loader {
  height: 25px;
  width: 25px;
  color: $primary-color;
  animation: rotate 2s linear infinite;

  .inner {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: 0;
    stroke-width: 2;
    stroke: $primary-color;
    stroke-linecap: round;
    animation: loading-dash 1.5s ease-in-out infinite;
  }
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes loading-dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -40px;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -120px;
  }
}
</style>