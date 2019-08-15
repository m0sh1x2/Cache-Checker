import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import Vue from 'vue'
import Vuetify, {
    VRow,
    VImg,
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
    VSheet,
    VNavigationDrawer,
    VList,
    VContainer,
    VListItem,
    VListItemContent,
    VListItemTitle,
    VListItemIcon,
    VListItemAvatar,
    VDivider
} from 'vuetify/lib'

Vue.use(Vuetify, {
    components: {
        VRow,
        VImg,
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
        VSheet,
        VNavigationDrawer,
        VList,
        VContainer,
        VListItem,
        VListItemContent,
        VListItemTitle,
        VListItemIcon,
        VListItemAvatar,
        VDivider
    }
})

export default new Vuetify({
    icons: {
        iconfont: 'mdi', // default - only for display purposes
    },
})