import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import Vue from 'vue'
import Vuetify, {
    VToolbar,
    VSpacer,
    VBtn,
    VIcon,
    VFooter,
    VFlex,
    VToolbarTitle,
    VToolbarItems,
    VCard,
    VTextField,
} from 'vuetify/lib'

Vue.use(Vuetify, {
    components: {
        VToolbar,
        VSpacer,
        VBtn,
        VIcon,
        VFooter,
        VFlex,
        VToolbarTitle,
        VToolbarItems,
        VTextField,
        VCard,
    }
})

export default new Vuetify({
    icons: {
        iconfont: 'mdi', // default - only for display purposes
    },
})