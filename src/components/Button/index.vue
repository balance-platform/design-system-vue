<script>
import Loader from '@/components/Loader'

export default {
  name: 'Button',

  components: {
    Loader
  },

  props: {
    color: {
      type: String,
      default: 'default',
      validator(value) {
        return ['default', 'primary', 'secondary', 'link'].includes(value)
      }
    },

    size: {
      type: String,
      default: 'm',
      validator(value) {
        return ['xs', 's', 'm', 'l', 'xl', 'xxl'].includes(value)
      }
    },

    tag: {
      type: String,
      default: 'button',
      validator(value) {
        return ['a', 'div', 'button'].includes(value)
      }
    },

    block: {
      type: Boolean,
      default: false
    },

    circle: {
      type: Boolean,
      default: false
    },

    rounded: {
      type: Boolean,
      default: false
    },

    disabled: {
      type: Boolean,
      default: false
    },

    processing: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    btnClass() {
      return [
        'button',
        this.color ? 'button_' + this.color : '',
        {
          'button_disabled': this.disabled,
          'button_processing': this.processing
        }
      ]
    },

    isDisabled() {
      return this.disabled || this.processing
    }
  },

  methods: {
    onClick(event) {
      this.$emit('click', event)
    }
  }
}
</script>

<template>
  <button
    :class="btnClass"
    :disabled="isDisabled"
    @click="onClick"
  >
    <Loader
      v-if="processing"
      class="button__loader"
    />
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.button {
  @extend %no-select;

  display: inline-block;
  margin: 0;
  padding: 15px 25px;
  color: $base-color;
  font-size: $font-size-base;
  font-weight: bold;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  background-color: white;
  border: none;
  border-radius: $border-radus;
  outline: 0;
  cursor: pointer;
  box-sizing: border-box;
  transition: 0.1s;

  &:focus,
  &:hover {
    color: $primary-color;
    background-color: $primary-color-light;
  }

  &_primary {
    color: white;
    background-color: $primary-color;

    &:hover {
      color: white;
      background-color: $primary-color-hover;
    }

    &:focus {
      color: white;
      background-color: $primary-color-focus;
    }
  }

  &_processing {
    position: relative;
    pointer-events: none;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(white, 0.6);
      border-radius: inherit;
      pointer-events: none;
    }
  }

  &_disabled {
    &,
    &:hover,
    &:focus {
      color: white;
      background: $gray-color-light;
      cursor: default;
    }
  }

  &__loader {
    @extend %centered-self;
  }
}
</style>
