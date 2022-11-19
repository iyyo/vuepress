import { defineUserConfig } from 'vuepress'
import { getDirname, path } from '@vuepress/utils'
const __dirname = getDirname(import.meta.url)

// import {path} from '@/vuepress/utils'
export default defineUserConfig({
  lang: 'zh-CN',
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点',
  // pagePatterns:['**/*.md', '!.vuepress', '!node_modules','!MyBlog/*.md'],
  // public:path.resolve(__dirname,'./static'),
  base:'/bar/',
  markdown:{
    anchor:false,
    // emoji:false,
    // importCode:{
    //   handleImportPath:(str)=>{
    //     return str.replace(/^@vuepress/, path.resolve(__dirname, '/'))
    //   }
    // }
    alias: {
      '@alias': path.resolve(__dirname, './path/to/some/dir'),
    },
  }
})