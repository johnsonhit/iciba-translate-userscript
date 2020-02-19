import { defineComponent } from '@vue/composition-api'

import mdi_baseline_radio_button_checked_24px from '~/assets/img/mdi/baseline-radio_button_checked-24px.svg'
import mdi_baseline_radio_button_unchecked_24px from '~/assets/img/mdi/baseline-radio_button_unchecked-24px.svg'

const icon = {
  checked: mdi_baseline_radio_button_checked_24px,
  unchecked: mdi_baseline_radio_button_unchecked_24px,
}

export default defineComponent({
  model: {},
  props: {
    value: null,
    label: {
      type: String,
      default: '',
    },
    checked: {
      type: Boolean,
      default: false,
    },
    updateValue: null,
  },
  setup: (props) => {
    const handleClick = () => {
      props.updateValue(props.value)
    }
    return {
      handleClick,
      icon,
      props,
    }
  },
})
