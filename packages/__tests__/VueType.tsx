import { defineComponent, toRefs } from 'vue';
import { prop, emitType } from '..';

type Button = 'ok' | 'cancel' | 0 | true;

export default defineComponent({
  name: 'VueType',
  props: {
    string: prop.string.def('vue'),
    strNum: prop.stringNumber.def(7).valid((value) => value === 7),
    object: prop.object<{ name: 'vue' }>(),
    fun: prop.function<() => void>(),
    literal: prop.literal<Button>().isRequired,
  },
  emits: {
    click: emitType<() => void>(),
  },
  setup(props) {
    const { literal } = toRefs(props);
    return () => <button>{literal.value}</button>;
  },
});
