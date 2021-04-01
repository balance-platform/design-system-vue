import { action } from "@storybook/addon-actions"
import { linkTo } from "@storybook/addon-links"

import Button from "../components/Button"

export default {
  title: "Button"
}

export const withText = () => ({
  components: { Button },
  template: '<my-button @click="action">Hello Button</my-button>',
  methods: { action: action("clicked") }
})

export const withJSX = () => ({
  render() {
    return (
      <Button onClick={linkTo("Button", "With Some Emoji")}>With JSX</Button>
    )
  }
})

export const withSomeEmoji = () => ({
  components: { Button },
  template: "<button>😀 😎 👍 💯</button>"
})
