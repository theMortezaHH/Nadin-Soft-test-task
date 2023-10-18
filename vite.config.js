import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import VueI18n from "@intlify/unplugin-vue-i18n/vite"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        VueI18n({
            runtimeOnly: true,
            compositionOnly: true,
            fullInstall: true,
            include: [path.resolve(__dirname, "locales/**")],
        }),
    ],
})
