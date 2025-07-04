import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [['link', { rel: 'icon', href: '/assets/logo.svg' }]],
  title: "706青年空间",
  description: "706青年空间社区门户网站",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: '706青年空间',
    logo: '/public/assets/logo.svg',

    nav: [
      { text: "首页", link: "/" },
      { text: "论坛", link: "https://706.town/" },
    ],
    footer: {
      message: 'Released by 706产品与技术小组',
      copyright: 'Copyright © 706青年空间'
    },

    sidebar: [
      {
        text: "706社区",
        items: [
          { text: "关于社区", link: "/about/" },
          { text: "如何参与", link: "/about/onboarding" },
          { text: "社交媒体", link: "/media/" },
        ],
      },
      {
        text: "社区项目",
        items: [
          { text: "项目简介", link: "/projects/" },
          { text: "城市客厅", link: "/projects/city-living" },
          { text: "客厅对话", link: "/projects/talk" },
          { text: "生活实验室", link: "/projects/living-lab" },
        ],
      },
      {
        text: "城市节点",
        items: [
          { text: "城市节点列表", link: "/city-nodes/index.md" },
          {
            text: "生活实验室",
            items: [
              {
                text: "上海1.1生活实验室",
                link: "/city-nodes/living/shanghai-1.1.md",
              },
            ],
          },
        ],
      },
      {
        text: "工具包",
        items: [{ text: "工具包下载", link: "/toolkit/" }],
      },
      {
        text: "社区治理",
        items: [
          { text: "治理机制", link: "/governance/mechanism" },
          { text: "治理小组", link: "/governance/groups" },
          { text: "节点大会", link: "/governance/meetings" },
        ],
      },
      {
        text: "财务",
        items: [
          { text: "公共基金", link: "/donate/funds" },
          { text: "捐赠", link: "/donate/" },
        ],
      },
      {
        text: "其他",
        items: [{ text: "常见问题", link: "/faq/" }],
      },
    ],

    socialLinks: [
      // { icon: "github", link: "https://github.com/vuejs/vitepress" },
      { icon: "wechat", link: "/public/assets/wechat.png" },
      { icon: {
        svg: '<svg t="1751170178567" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5119" width="200" height="200"><path d="M996.152 56.513c-7.986-10.852-17.61-20.885-28.871-28.87C944.143 10.442 916.09 0 885.377 0H138.419c-30.715 0-59.176 10.443-82.314 27.642-10.852 7.986-20.885 17.61-28.87 28.87C10.444 79.448 0.001 107.703 0.001 138.623V885.58c0 30.715 10.442 59.176 27.641 81.905 7.986 10.852 17.61 20.885 28.871 28.87 23.138 17.2 51.19 27.643 81.904 27.643h746.959c30.714 0 59.175-10.443 81.904-27.642 10.852-7.986 20.885-17.61 28.87-28.87 17.2-23.139 27.643-51.19 27.643-81.905V138.622c0-30.92-10.852-59.175-27.642-82.11z m-629.633 410.54c16.38-36.241 34.81-71.87 52.213-107.497h59.995c-14.743 29.28-31.124 57.947-41.566 85.794 24.366-1.433 46.48-2.662 72.484-4.095-13.923 27.847-26.209 52.623-38.494 77.398-1.639 3.276-3.277 6.757-4.915 10.033-12.9 25.8-12.9 26.004 15.767 26.62 3.071 0 5.938 0.41 11.466 1.022-7.985 15.767-15.152 30.1-22.728 44.228-1.229 2.253-4.71 4.915-6.962 4.915-21.09 0-42.385 0.614-63.475-1.639-15.152-1.638-21.09-13.309-15.152-27.642 7.166-17.814 15.766-35.219 23.752-52.828 2.662-6.143 5.528-12.08 9.42-21.09-11.673 0-20.272 0.206-28.872 0-24.776-1.023-33.17-12.285-22.933-35.218zM76.171 658.299c-12.695-22.114-24.16-42.59-35.832-63.065 0-2.458 22.933-72.485 17.814-151.726h63.065s2.253 148.45-45.047 214.791z m147.222-7.985c0.614 37.061-24.98 37.061-24.98 37.061H162.17l-38.085-50.37h39.928v-277.45h59.994c0 90.915-0.204 199.846-0.614 290.76z m87.227 4.71c-28.666-25.186-44.227-100.333-43.818-211.925h59.175c-4.504 58.765 14.538 137.187 14.538 137.187s-17.404 38.495-29.895 74.737z m129.817 26.004c-1.638 3.071-6.757 5.938-10.443 6.142-27.847 0.41-55.9 0.205-87.842 0.205 12.081-24.16 22.114-43.818 30.92-61.018h95.621c-10.647 20.885-19.042 38.085-28.256 54.67z m244.481 6.552h-215.2c10.442-20.68 29.075-57.537 29.075-57.537h61.428V441.87h-38.29v-58.766h138.622v57.947h-37.88v189.196h62.245v57.333z m284.615-43.409c0 43.409-42.385 42.18-42.385 42.18h-55.285l-23.138-49.756 59.995 0.205s0.614-45.047 0-60.609c-0.41-13.105-7.576-21.5-20.886-21.704-26.618-0.615-53.442-0.205-82.722-0.205v132.274h-59.38V555.1h-59.995v-61.222h58.356v-51.804h-38.7v-57.947h39.315v-24.571h59.994l0.41 24.57h47.708s44.024-1.023 44.228 41.77c0.205 12.697 0.41 54.263 0.41 68.187 50.575-0.205 72.075 10.033 72.075 45.25V644.17z m-25.39-200.46H912.2v-30.507c0-11.057 5.528-21.295 14.947-27.233 10.647-6.757 25.39-11.057 39.314 2.252 0.614 0.41 1.024 1.024 1.433 1.638 19.247 20.27 4.095 53.852-23.752 53.852z" fill="#cdcdcd" p-id="5120"></path><path d="M805.521 493.878h39.723v-52.01h-40.132z" fill="#cdcdcd" p-id="5121"></path></svg>'
      }, link: "https://www.xiaohongshu.com/user/profile/661aa5fd0000000003032610?xsec_token=ABgqKG503wpS6W2UkOlfoNyngpBL0ztI0ajyord0xISFI=&xsec_source=pc_feed" },
    ],
  },
});
