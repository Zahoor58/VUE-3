export default {
  template: `
<button :class="{
'bg-gray-200 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded disabled:cursor-not-allowed': true,
'bg-red-200 hover:bg-red-400': type === 'danger',
'bg-purple-200 hover:bg-purple-400': type === 'secondary',
'bg-gray-200 hover:bg-gray-400': type === 'muted',
'is-loading': processing
}" 
:disabled="processing">
    <slot/>
</button>
`,

  props: {
    type: {
      type: String,
      default: "primary",
    },
    processing: {
      type: Boolean,
      default: false,
    },
  },

  // data() {
  //   return {
  //     processing: false,
  //   };
  // },
};
