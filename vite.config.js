import { defineConfig } from "vite";
import UniApp from "@dcloudio/vite-plugin-uni";
import Components from "@uni-helper/vite-plugin-uni-components";
import { NutResolver } from "nutui-uniapp";

// https://vitejs.dev/config
export default defineConfig({
  // ...
  plugins: [
    // ...
    Components({
      resolvers: [NutResolver()],
    }),
    // 注意，UniApp插件一定要放到后面！
    UniApp()
  ]
});