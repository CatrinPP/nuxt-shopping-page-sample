<template>
  <div :class="$style.form">
    <p :class="$style.form__title">
      Оформить заказ
    </p>
    <input type="text" placeholder="Ваше имя" @blur="checkInputValue">
    <input type="tel" placeholder="Телефон" @focus="telInputFormat" @input="telInputFormat" @blur="onBlur">
    <input type="text" placeholder="Адрес" @blur="checkInputValue">
    <button class="button button--big" type="submit" @click="onSubmitButtonClick">
      <span>Отправить</span>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    checkInputValue (evt) {
      if (!evt.target.value) {
        evt.target.style.border = '1px solid red'
      } else {
        evt.target.style.border = 'none'
      }
    },
    telInputFormat (evt) {
      const input = evt.target
      const matrix = '+7 ___ ___-__-__'
      let index = 0
      const newValue = matrix.replace(/\D/g, '')
      let value = input.value.replace(/\D/g, '')

      if (newValue.length >= value.length) {
        value = newValue
      }

      input.value = matrix.replace(/./g, (char) => {
        if (/[_\d]/.test(char) && index < value.length) {
          return value.charAt(index++)
        } else if (index >= value.length) {
          return ''
        }
        return char
      })

      this.setCursorPosition(input.value.length, input)
    },
    onBlur (evt) {
      if (evt.target.value.length === 2) {
        evt.target.value = ''
      }
      this.checkInputValue(evt)
    },
    setCursorPosition (position, element) {
      element.focus()
      if (element.setSelectionRange) {
        element.setSelectionRange(position, position)
      } else if (element.createTextRange) {
        const range = element.createTextRange()
        range.collapse(true)
        range.moveEnd('character', position)
        range.moveStart('character', position)
        range.select()
      }
    },
    checkFormFieldsFails () {
      const inputs = Array.from(document.querySelectorAll('input'))
      return inputs.some(it => !it.value)
    },
    onSubmitButtonClick (evt) {
      evt.preventDefault()
      if (this.checkFormFieldsFails()) {
        return
      }
      this.$store.commit('SET_SUCCESS_FORM_STATUS')
      this.$store.commit('CLEAR_SELECTED_PRODUCTS')
    }
  }
}
</script>

<style lang="scss" module>
.form {
  display: flex;
  flex-direction: column;
  padding-top: 30px;

  input {
    width: 100%;
    margin-bottom: 16px;
    padding: 14px;
    background: $grayExtraLight;
    border-radius: 8px;
    font-size: 16px;

    &::placeholder {
      color: $color-font--fade;
      font-size: 16px;
    }

    &:last-of-type {
      margin-bottom: 24px;
    }

    &:focus {
      outline: none;
    }
  }

  &__title {
    font-size: 18px;
    margin-bottom: 16px;
    color: $color-secondary;
  }
}
</style>
