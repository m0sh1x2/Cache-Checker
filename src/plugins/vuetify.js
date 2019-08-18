import '@fortawesome/fontawesome-free/css/all.css'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import Vue from 'vue'
import Vuetify, {
    VApp,
    VRow,
    VCol,
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
    VListItemAction,
    VListItemSubtitle,
    VContainer,
    VListItem,
    VListItemContent,
    VListItemTitle,
    VListItemIcon,
    VListItemAvatar,
    VDivider,
} from 'vuetify/lib'

Vue.use(Vuetify, {
    components: {
        VApp,
        VRow,
        VCol,
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
        VListItemAction,
        VListItemSubtitle,
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
        iconfont: 'fa',
    },
})