"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    "a-row": `[antd-design-vue (栅格化系统)：https://www.antdv.com/components/grid-cn/#components-grid-demo-basic-grid](https://www.antdv.com/components/grid-cn/#components-grid-demo-basic-grid) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| align | flex 布局下的垂直对齐方式：top middle bottom | string | — | top |
| gutter | 栅格间隔，可以写成像素值或支持响应式的对象写法来设置水平间隔 { xs: 8, sm: 16, md: 24}。或者使用数组形式同时设置 [水平间距, 垂直间距]（1.5.0 后支持）。 | number/object/array | — | 0 |
| justify | flex 布局下的水平排列方式： | string | start end center space-around space-between | start |
| type | 布局模式，可选 flex，现代浏览器 下有效 | string | flex | - |`,
    "a-col": `[antd-design-vue：https://www.antdv.com/components/grid-cn/#components-grid-demo-more-responsive](https://www.antdv.com/components/grid-cn/#components-grid-demo-more-responsive) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| flex | flex | string|number | — | - |
| offset | 栅格左侧的间隔格数 | number | — | 0 |
| order | 栅格顺序，flex 布局模式下有效 | number | — | 0 |
| pull | 栅格向左移动格数 | number | — | 0 |
| push | 栅格向右移动格数 | number | — | 0 |
| span | 栅格占位格数，为 0 时相当于 display: none | number | — | - |
| xs | <576px 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | — | — |
| sm | ≥576px 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | — | — |
| md | ≥768px 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | — | — |
| lg | ≥992px 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | — | — |
| xl | ≥1200px 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | — | — |
| xl | ≥1600px 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | — | — |\n
FAQ ： \n
IE9 响应式不工作怎么办？\n
可以引入 [matchMedia polyfill](https://github.com/paulirish/matchMedia.js/) 添加支持。
`,
    "a-layout": `[antd-design-vue :https://www.antdv.com/components/layout-cn/#components-layout-demo-basic-structure](https://www.antdv.com/components/layout-cn/#components-layout-demo-basic-structure) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| class | 容器 class | string | - | - |
| style | 指定样式 | object	 | - | - |
| hasSider | 表示子元素里有 Sider，一般不用指定。可用于服务端渲染时避免样式闪动 | boolean | - | - |
`,
    "a-sider": `[antd-design-vue :https://www.antdv.com/components/layout-cn/#Layout.Sider](https://www.antdv.com/components/layout-cn/#Layout.Sider) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| breakpoint | 触发响应式布局的断点 | Enum | { 'xs', 'sm', 'md', 'lg', 'xl', 'xxl' } | 60px |
| class | 容器 class | string | - | - |
| collapsed(v-model) | 当前收起状态 | boolean | - | - |
| collapsedWidth | 收缩宽度，设置为 0 会出现特殊 trigger | number | - | 80 |
| collapsible | 是否可收起 | boolean | - | false |
| defaultCollapsed | 是否默认收起 | boolean | - | false |
| reverseArrow | 翻转折叠提示箭头的方向，当 Sider 在右边时可以使用 | boolean | - | false |
| style | 指定样式 | object/string | - | - |
| theme | 主题颜色 | string | light dark | dark |
| trigger | 自定义 trigger，设置为 null 时隐藏 trigger | string/slot | - | - |
| width | 宽度 | number/string | - | 200 |
| zeroWidthTriggerStyle | 指定当 collapsedWidth 为 0 时出现的特殊 trigger 的样式 | object | - | - | \n
事件 \n
| 事件名称 | 说明 | 回调参数
| :--- | :--- | :--- |
｜collapse	｜ 展开-收起时的回调函数，有点击 trigger 以及响应式反馈两种方式可以触发	| (collapsed, type) => {} |
｜breakpoint  |  触发响应式布局断点时的回调 | (broken) => {} | \n
breakpoint width\n
{\n
    xs: '480px',\n
    sm: '576px',\n
    md: '768px',\n
    lg: '992px',\n
    xl: '1200px',\n
    xxl: '1600px',\n
}`,
    "a-layout-header": `[antd-design-vue :https://www.antdv.com/components/layout-cn/#components-layout-demo-header-sider-2](https://www.antdv.com/components/layout-cn/#components-layout-demo-header-sider-2) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| class | 容器 class | string | - | - |
| style | 指定样式 | object	 | - | - |
| hasSider | 表示子元素里有 Sider，一般不用指定。可用于服务端渲染时避免样式闪动 | boolean | - | - |`,
    "a-layout-content": `[antd-design-vue :https://www.antdv.com/components/layout-cn/#components-layout-demo-header-sider-2](https://www.antdv.com/components/layout-cn/#components-layout-demo-header-sider-2) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| class | 容器 class | string | - | - |
| style | 指定样式 | object	 | - | - |
| hasSider | 表示子元素里有 Sider，一般不用指定。可用于服务端渲染时避免样式闪动 | boolean | - | - |`,
    "a-layout-footer": `[antd-design-vue :https://www.antdv.com/components/layout-cn/#components-layout-demo-header-sider-2](https://www.antdv.com/components/layout-cn/#components-layout-demo-header-sider-2) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| class | 容器 class | string | - | - |
| style | 指定样式 | object	 | - | - |
| hasSider | 表示子元素里有 Sider，一般不用指定。可用于服务端渲染时避免样式闪动 | boolean | - | - |`,
    "a-space": `[antd-design-vue :https://www.antdv.com/components/space-cn/#components-space-demo-basic-usage](https://www.antdv.com/components/space-cn/#components-space-demo-basic-usage) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| align | 对齐方式	 | string | start , end , center , baseline | - |
| direction | 间距方向 | string ｜ vertical , horizontal | horizontal |
| size | 间距大小	 | string | small , middle , large , number , small |`,
    "a-button": `[antd-design-vue :https://www.antdv.com/components/button-cn/](https://www.antdv.com/components/button-cn/) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| disabled | 按钮失效状态 | boolean | medium , small , mini | — |
| ghost | 幽灵属性，使按钮背景透明 | boolean | - | false |
| htmlType | 设置 button 原生的 type 值，可选值请参考[HTML 标准](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) | string | - | button |
| icon | 图标类名 | string | — | — |
| loading | 是否加载中状态 | boolean | { delay: number }  | — | false |
| shape | 设置按钮形状，可选值为 circle、 round 或者不设 | string  | circle、 round | - |
| size | 设置按钮大小 | string | small , large , default | default |
| type | 类型 | string | primary, dashed , danger , link | — |
| block | 将按钮宽度调整为其父宽度的选项 | boolean | — | false |
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| click | 点击时触发事件 | event |
FAQ ： \n
如何移除 2 个汉字之间的空格 \n
设置 ConfigProvider 的 autoInsertSpaceInButton 为 false。
`,
    "a-icon": `[antd-design-vue :https://www.antdv.com/components/icon-cn/](https://www.antdv.com/components/icon-cn/) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| type | 图标类型。遵循图标的命名规范 | string  | — | — |
| style | 设置图标的样式，例如 fontSize 和 color | CSSProperties | — | - |
| theme | 图标主题风格。可选实心、描线、双色等主题风格，适用于官方图标 | string | 'filled' | 'outlined' | 'twoTone' | 'outlined' |
| spin | 是否有旋转动画 | Boolean | - | 'false' |
| rotate | 图标旋转角度（1.4.0 后新增，IE9 无效） | number | - | — |
| component | 控制如何渲染图标，通常是一个渲染根标签为 <svg> 的 Vue 组件，会使 type 属性失效 | ComponentType<CustomIconComponentProps> | — | — |
| twoToneColor | 仅适用双色图标。设置双色图标的主要颜色 | string (十六进制颜色) | - | — |\n
>> 注意：Icon 组件中图标渲染的优先级为 component > children > type, 传入 props 时，优先级高的直接生效，优先级低的则失效\n
Icon 中的 component 组件的接受的属性如下\n
| 字段 | 说明 | 类型 | 只读值 |
| :--- | :--- | :--- |
| width | svg 元素宽 | string / number | 1em |
| height | svg 元素高度 | string / number | 1em |
| class | 计算后的 svg 类名 | string  | - |
| style | 计算后的 svg 元素样式 | CSSProperties | - |
| fill | svg 元素填充的颜色 | string | currentColor |`,
    "a-affix": `[antd-design-vue :https://www.antdv.com/components/affix-cn/#components-affix-demo-basic](https://www.antdv.com/components/affix-cn/#components-affix-demo-basic) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| offsetBottom | 距离窗口底部达到指定偏移量后触发 | number | — | — |
| offsetTop | 距离窗口顶部达到指定偏移量后触发 | number | — | false |
| target | 设置 Affix 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数 | () => HTMLElement | — | () => window |\n
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| change | 固定状态改变时触发的回调函数 | Function(affixed) |\n
注意：Affix 内的元素不要使用绝对定位，如需要绝对定位的效果，可以直接设置 Affix 为绝对定位：\n
<a-affix :style="{ position: 'absolute', top: y, left: x}">\n
  ...\n
</a-affix>`,
    "a-breadcrumb": `[antd-design-vue :https://www.antdv.com/components/breadcrumb-cn/](https://www.antdv.com/components/breadcrumb-cn/) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| itemRender | 自定义链接函数，和 vue-router 配置使用， 也可使用 slot="itemRender" 和 slot-scope="props" | ({route, params, routes, paths, h}) => vNode | — | — |
| params | 路由的参数 | object | — | - |
| routes | router 的路由栈信息 | routes[] | — | - |
| separator | 分隔符自定义 | string,slot | — | - |\n
Breadcrumb.Item\n
| 参数 | 说明 | 类型 |
| :--- | :--- | :--- |
| href | 链接的目的地 | string |
| overlay | 下拉菜单的内容 | Menu | () => Menu |\n
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| click | 单击事件 | (e:MouseEvent)=>void |`,
    "a-dropdown": `[antd-design-vue :https://www.antdv.com/components/dropdown-cn/](https://www.antdv.com/components/dropdown-cn/) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| disabled | 菜单是否禁用 | boolean | — | — |
| destroyPopupOnHide | 关闭后是否销毁 Dropdown | boolean | — | false |
| getPopupContainer | 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。 | unction(triggerNode) | — | () => document.body |
| overlay(slot-scope) | 菜单 | Menu | - | — |
| overlayClassName | 下拉根元素的类名称 | string | — | — |
| overlayStyle | 下拉根元素的样式 | object | — | — |
| placement | 菜单弹出位置 | String | bottomLeft bottomCenter bottomRight topLeft topCenter topRight | bottomLeft |
| trigger | 触发下拉的行为, 移动端不支持 hover | Array | Array<click|hover|contextmenu> | ['hover'] |
| visible(v-model) | 菜单是否显示 | boolean | — | — |
\n
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| visibleChange | 菜单显示状态改变时调用，参数为 visible | function(visible) |`,
    "a-dropdown-button": `[antd-design-vue :https://www.antdv.com/components/dropdown-cn/#components-dropdown-demo-button-with-dropdown-menu](https://www.antdv.com/components/dropdown-cn/#components-dropdown-demo-button-with-dropdown-menu) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| disabled | 菜单是否禁用 | boolean | — | — |
| icon | 右侧的 icon | VNode , slot | — | - |
| overlay(slot-scope) | 菜单 | Menu | - | — |
| placement | 菜单弹出位置 | String | bottomLeft bottomCenter bottomRight topLeft topCenter topRight | bottomLeft |
| size | 按钮大小，和 Button 一致 | string | — | default |
| trigger | 触发下拉的行为, 移动端不支持 hover | Array | Array<click|hover|contextmenu> | ['hover'] |
| type | 按钮类型，和 Button 一致 | string | — | default |
| visible(v-model) | 菜单是否显示 | boolean | — | — |\n
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| click | 点击左侧按钮的回调，和 Button 一致 | Function |
| visibleChange | 菜单显示状态改变时调用，参数为 visible | function(visible) |`,
    "a-menu": `[antd-design-vue :https://www.antdv.com/components/dropdown-cn/#components-dropdown-demo-button-with-dropdown-menu](https://www.antdv.com/components/dropdown-cn/#components-dropdown-demo-button-with-dropdown-menu) \n

为页面和功能提供导航的菜单列表。

## 何时使用

导航菜单是一个网站的灵魂，用户依赖导航在各个页面中进行跳转。一般分为顶部导航和侧边导航，顶部导航提供全局性的类目和功能，侧边导航提供多级结构来收纳和排列网站架构。

更多布局和导航的使用可以参考：[通用布局](/components/layout-cn)。

## API

'''html
<template>
    <a-menu>
    <a-menu-item>菜单项</a-menu-item>
    <a-sub-menu key="sub1" title="子菜单">
        <a-menu-item>子菜单项</a-menu-item>
    </a-sub-menu>
    </a-menu>
</template>
'''

### Menu

| 参数 | 说明 | 类型 | 默认值 |
| :-- | :-- | :-- | :-- |
| forceSubMenuRender | 在子菜单展示之前就渲染进 DOM | boolean | false |
| inlineCollapsed | inline 时菜单是否收起状态 | boolean | - |
| inlineIndent | inline 模式的菜单缩进宽度 | number | 24 |
| mode | 菜单类型，现在支持垂直、水平、和内嵌模式三种 | string: 'vertical' 'vertical-right' 'horizontal' 'inline' | 'vertical' |
| multiple | 是否允许多选 | boolean | false |
| openKeys(v-model) | 当前展开的 SubMenu 菜单项 key 数组 | string\[] |  |
| selectable | 是否允许选中 | boolean | true |
| selectedKeys(v-model) | 当前选中的菜单项 key 数组 | string\[] |  |
| subMenuCloseDelay | 用户鼠标离开子菜单后关闭延时，单位：秒 | number | 0.1 |
| subMenuOpenDelay | 用户鼠标进入子菜单后开启延时，单位：秒 | number | 0 |
| theme | 主题颜色 | string: 'light' 'dark' | 'light' |
| overflowedIndicator | 自定义 Menu 折叠时的图标 | DOM | '<span>···</span>' |

### Menu 事件

| 事件名称   | 说明                               | 回调参数                              |
| :--------- | :--------------------------------- | :------------------------------------ |
| click      | 点击 MenuItem 调用此函数           | function({ item, key, keyPath })      |
| deselect   | 取消选中时调用，仅在 multiple 生效 | function({ item, key, selectedKeys }) |
| openChange | SubMenu 展开/关闭的回调            | function(openKeys: string\[])         |
| select     | 被选中时调用                       | function({ item, key, selectedKeys }) |
`,
    "a-menu-item": `[antd-design-vue :https://www.antdv.com/components/menu-cn/#components-menu-demo-collapsed-inline-menu](https://www.antdv.com/components/menu-cn/#components-menu-demo-collapsed-inline-menu) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| disabled | 是否禁用 | boolean | — | false |
| key | item 的唯一标志 | string | — | - |
| title | 设置收缩时展示的悬浮标题 | string | - | - |`,
    "a-sub-menu": `[antd-design-vue :https://www.antdv.com/components/menu-cn/#components-menu-demo-open-current-submenu-only](https://www.antdv.com/components/menu-cn/#components-menu-demo-open-current-submenu-only) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| popupClassName | 子菜单样式 | string | — | - |
| disabled | 是否禁用 | boolean | — | false |
| title | 子菜单项值 | string slot | - | - | \n
Menu.SubMenu 的子元素必须是 MenuItem 或者 SubMenu\n
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| titleClick | 点击子菜单标题 | ({ key, domEvent }) |
`,
    "a-menu-item-group": `[antd-design-vue :https://www.antdv.com/components/menu-cn/#components-menu-demo-top-navigation](https://www.antdv.com/components/menu-cn/#components-menu-demo-top-navigation) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| title | 分组标题 | string function slot | — | - |\n
Menu.ItemGroup 的子元素必须是 MenuItem\n
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| titleClick | 点击子菜单标题 | ({ key, domEvent }) |`,
    "a-page-header": `[antd-design-vue :https://www.antdv.com/components/page-header-cn/](https://www.antdv.com/components/page-header-cn/) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| title | 自定义标题文字 | string  slot | — | — |
| subTitle | 自定义的二级标题文字 | string  slot | — | - |
| ghost | pageHeader 的类型，将会改变背景颜色 | boolean | — | ture |
| avatar | 标题栏旁的头像 | avatar props | - | — |
| backIcon | 自定义 back icon ，如果为 false 不渲染 back icon | string slot | — | <Icon type="arrow-left" /> |
| tags | title 旁的 tag 列表 | Tag[]   Tag | — | - |
| extra | 操作区，位于 title 行的行尾 | string  slot | — | - |
| breadcrumb | 面包屑的配置 | breadcrumb | — | - |
| footer | PageHeader 的页脚，一般用于渲染 TabBar | string slot | — | - |\n
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| back | 返回按钮的点击事件 | function(e) |`,
    "a-pagination": `[antd-design-vue :https://www.antdv.com/components/pagination-cn/](https://www.antdv.com/components/pagination-cn/) \n

    采用分页的形式分隔长列表，每次只加载一个页面。

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| current(v-model) | 当前页数 | number | - | — |
| defaultCurrent | 默认的当前页数 | number | — | 1 |
| defaultPageSize | 默认的每页条数 | number | — | 10 |
| disabled | 禁用分页 | boolean | — | - |
| hideOnSinglePage | 只有一页时是否隐藏分页器 | boolean | — | false |
| itemRender | 用于自定义页码的结构，可用于优化 SEO | (page, type: 'page' | 'prev' | 'next', originalElement) => vNode | — | - |
| pageSize(.sync) | 每页条数 | number | — | - |
| pageSizeOptions | 指定每页可以显示多少条 | string[] | — | ['10', '20', '30', '40'] |
| showLessItems | show less page items | boolean | — | false |
| showQuickJumper | 是否可以快速跳转至某页 | boolean | — | false |
| showSizeChanger | 是否可以改变 pageSize | boolean | — | false |
| showTotal | 用于显示数据总量和当前数据顺序 | Function(total, range) | — | - |
| simple | 当添加该属性时，显示为简单分页 | boolean | — | - |
| size | 当为「small」时，是小尺寸分页 | string | — | - |
| total | 数据总数 | number | — | 0 | \n
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| change | 页码改变的回调，参数是改变后的页码及每页条数 | Function(page, pageSize) |
| showSizeChange | pageSize 变化的回调 | Function(current, size) |`,
    "a-steps": `[antd-design-vue :https://www.antdv.com/components/steps-cn/](https://www.antdv.com/components/steps-cn/) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| type | 步骤条类型 | string | default navigation | default |
| current (v-model) | 指定当前步骤，从 0 开始记数。在子 Step 元素中，可以通过 status 属性覆盖状态, 1.5.0 后支持 v-model | number | — | 0 |
| direction | 指定步骤条方向 | string | horizontal vertical | horizontal |
| labelPlacement | 指定标签放置位置，默认水平放图标右侧，可选vertical放图标下方 | string | - | horizontal |
| progressDot | 点状步骤条，可以设置为一个 作用域插槽,labelPlacement 将强制为vertical | Boolean or slot="progressDot" slot-scope="{index, status, title, description, prefixCls})" | - | false |
| size | 指定大小 | string | default small | default |
| status | 指定当前步骤的状态 | string | wait process finish error | process |
| initial | 起始序号，从 0 开始记数 | number | - | 0 |\n
Steps 事件\n
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| change | 点击切换步骤时触发 | (current) => void |`,
    "a-step": `[antd-design-vue :https://www.antdv.com/components/steps-cn/#Steps.Step](https://www.antdv.com/components/steps-cn/#Steps.Step) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| description | 步骤的详情描述，可选 | string , slot | — | — |
| icon | 步骤图标的类型，可选 | string , slot | — | — |
| status | 指定状态。当不配置该属性时，会使用 Steps 的 current 来自动指定状态 | string  | wait process finish error | — |
| title | 标题 | string ,slot | — | - |
| subTitle | 子标题 | string ,slot | — | - |
| disabled | 禁用点击 | boolean | — | false |`,
    "a-auto-complete": `[antd-design-vue :https://www.antdv.com/components/auto-complete-cn/](https://www.antdv.com/components/auto-complete-cn/) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| allowClear | 支持清除, 单选模式有效 | boolean | - | false |
| autoFocus | 自动获取焦点 | boolean | — | false |
| backfill | 使用键盘选择选项的时候把选中项回填到输入框中 | boolean | — | false |
| slot="default" (自定义输入框) | 自定义输入框 | HTMLInputElement / HTMLTextAreaElement | — | <Input /> |
| dataSource | 自动完成的数据源 | slot , DataSourceItemType[] | — | - |
| dropdownMenuStyle | dropdown 菜单自定义样式 | object | — | - |
| defaultActiveFirstOption | 是否默认高亮第一个选项。 | boolean | — | true |
| defaultValue | 指定默认选中的条目 | string string[]  无 | — | - |
| disabled | 是否禁用 | boolean | — | false |
| filterOption | 是否根据输入项进行筛选。当其为一个函数时，会接收 inputValue option 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false | boolean or function(inputValue, option) | — | true |
| optionLabelProp | 回填到选择框的 Option 的属性值，默认是 Option 的子元素。比如在子元素需要高亮效果时，此值可以设为 value | string | — | children |
| placeholder | 输入框提示 | string , slot | — | - |
| value(v-model) | 指定当前选中的条目 | string string[] { key: string, label: string|vNodes } Array<{ key: string, label: string,vNodes }> | — | - |
| defaultOpen | 是否默认展开下拉菜单 | boolean | — | - |
| open | 是否展开下拉菜单 | boolean | — | - |\n
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| change | 选中 option，或 input 的 value 变化时，调用此函数 | function(value) |
| blur | 失去焦点时的回调 | function() |
| focus | 获得焦点时的回调 | function() |
| search | 搜索补全项的时候调用 | function(value) |
| select | 被选中时调用，参数为选中项的 value 值 | function(value, option) |
| dropdownVisibleChange | 展开下拉菜单的回调 | function(open) |\n
方法\n
| 名称 | 说明 |
| :--- | :--- |
| blur() | 移除焦点 |
| focus() | 获取焦点 |`,
    "a-cascader": `[antd-design-vue :https://www.antdv.com/components/cascader-cn/](https://www.antdv.com/components/cascader-cn/) \n
Cascader 级联选择\n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| allowClear | 是否支持清除 | boolean | — | true |
| autoFocus | 自动获取焦点 | boolean | — | false |
| changeOnSelect | 当此项为 true 时，点选每级菜单选项值都会发生变化 | boolean | — | false |
| defaultValue | 默认的选中项 | string[]   number[] | — | [] |
| disabled | 禁用 | boolean | — | false |
| displayRender | 选择后展示的渲染函数 | ({labels, selectedOptions}) => vNode | slot="displayRender" 和 slot-scope="{labels, selectedOptions}" | labels => labels.join(' / ') |
| expandTrigger | 次级菜单的展开方式 | string | 'click' 和 'hover' | click |
| fieldNames | 自定义 options 中 label name children 的字段 | object | — | { label: 'label', value: 'value', children: 'children' } |
| getPopupContainer | 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位 | Function(triggerNode) | — | () => document.body |
| loadData | 用于动态加载选项，无法与 showSearch 一起使用 | (selectedOptions) => void | — | - |
| notFoundContent | 当下拉列表为空时显示的内容 | string | — | - |
| options | 可选项数据源 | object | — | - |
| placeholder | 输入框占位文本 | string | — | '请选择' |
| popupClassName | 自定义浮层类名 | string | — | - |
| popupStyle | 自定义浮层样式 | object | — | - |
| popupPlacement | 浮层预设位置 | string | bottomLeft bottomRight topLeft topRight | bottomLeft |
| popupVisible | 控制浮层显隐 | boolean | - | - |
| showSearch | 在选择框中显示搜索框 | boolean | - | - |
| size | 输入框大小 | string | large default small | - |
| suffixIcon | 自定义的选择框后缀图标 | string , VNode , slot | - | - |
| size | 输入框大小 | string | large default small | - |
| value(v-model) | 指定选中项 | string[] , number[] | — | - |\n
showSearch 为对象时，其中的字段\n
| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- | 
| filter | 接收 inputValue path 两个参数，当 path 符合筛选条件时，应返回 true，反之则返回 false | function(inputValue, path): boolean | - |
| limit | 搜索结果展示数量 | number , false | 50 |
| matchInputWidth | 搜索结果列表是否与输入框同宽 | boolean | - |
| render | 用于渲染 filter 后的选项,可使用 slot="showSearchRender" 和 slot-scope="{inputValue, path}" | function({inputValue, path}): vNode | - |
| sort | 用于排序 filter 后的选项 | function(a, b, inputValue) | - |
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| change | 选择完成后的回调 | (value, selectedOptions) => void |
| popupVisibleChange | 显示/隐藏浮层的回调 | (value) => void |
| search | 输入框变化时的回调 | (value) => void |\n
方法\n
| 名称 | 说明 |
| :--- | :--- |
| blur() | 移除焦点 |
| focus() | 获取焦点 |\n
注意，如果需要获得中国省市区数据，可以参考 react 组件的实现[china-division](https://gist.github.com/afc163/7582f35654fd03d5be7009444345ea17)
`,
    "a-checkbox": `[antd-design-vue :https://www.antdv.com/components/checkbox-cn/](https://www.antdv.com/components/checkbox-cn/) \n
Checkbox 多选框\n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| autoFocus | 自动获取焦点 | boolean | — | false |
| checked | 指定当前是否选中 | boolean | — | false |
| defaultChecked | 初始是否选中 | boolean | — | false |
| disabled | 失效状态 | boolean | — | false |
| indeterminate | 设置 indeterminate 状态，只负责样式控制 | boolean | — | false |\n

| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| change | 变化时回调函数 | Function(e:Event) |\n`,
    "a-checkbox-group": `[antd-design-vue :https://www.antdv.com/components/checkbox-cn/](https://www.antdv.com/components/checkbox-cn/) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| defaultValue | 默认选中的选项 | string[] | — | [] |
| disabled | 整组失效 | boolean | — | false |
| name | CheckboxGroup 下所有 input[type="checkbox"] 的 name 属性 | string | — | - |
| options | 指定可选项，可以通过 slot="label" slot-scope="option" 定制label | string[]   Array<{ label: string value: string disabled?: boolean, indeterminate?: boolean, onChange?: function }> | — | [] |
| value | 指定选中的选项 | string[] | — | [] |\n

| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| change | 变化时回调函数 | Function(checkedValue) |\n
方法\n
| 名称 | 说明 |
| :--- | :--- |
| blur() | 移除焦点 |
| focus() | 获取焦点 |`,

    "a-date-picker": `[antd-design-vue :https://www.antdv.com/components/date-picker-cn/#API](https://www.antdv.com/components/date-picker-cn/#API) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| allowClear | 是否显示清除按钮 | boolean | — | true |
| autoFocus | 自动获取焦点 | boolean | — | false |
| dateRender | 作用域插槽，自定义日期单元格的内容 | slot="dateRender" slot-scope="current, today" | — | - |
| disabled | 禁用 | boolean | - | false |
| disabledDate | 不可选择的日期 | (currentDate: moment) => boolean | - | - |
| getCalendarContainer | 定义浮层的容器，默认为 body 上新建 div | function(trigger) | - | - |
| locale | 国际化配置 | object | - | - |
| mode | 日期面板的状态 | string | time date month year decade | date |
| open | 控制弹层是否展开 | boolean | - | - |
| placeholder | 输入框提示文字 | string RangePicker[] | — | — |
| popupStyle | 额外的弹出日历样式 | object | — | {} |
| dropdownClassName | 额外的弹出日历 className | string | — | — |
| size | 输入框大小，large 高度为 40px，small 为 24px，默认是 32px | string | - | - |
| suffixIcon | 自定义的选择框后缀图标 | VNode   slot | - | - |
| inputReadOnly | 设置输入框为只读（避免在移动设备上打开虚拟键盘） | boolean | - | - |
| align | 该值将合并到 placement 的配置中 | Object | — | — |
| valueFormat | 可选，绑定值的格式，对 value、defaultValue、defaultPickerValue 起作用。不指定则绑定值为 moment 对象 | string | 见日期格式 | — |
| defaultValue | 默认面板日期 | moment | - | — |
| defaultPickerValue | 默认面板日期 | moment | - | — |
| disabledTime | 不可选择的时间 | function(date) | - | — |
| format | 设置日期格式，为数组时支持多格式匹配，展示以第一个为准。配置参考 moment.js | string ，string[] | - | "YYYY-MM-DD" |
| renderExtraFooter | 在面板中添加额外的页脚 | slot="renderExtraFooter" slot-scope="mode" | - | - |
| showTime | 增加时间选择功能 | Object boolean | - | "YYYY-MM-DD" |
| showTime.defaultValue | 设置用户选择日期时默认的时分秒 | moment | - | moment() |
| showToday | 是否展示“今天”按钮 | boolean | - | true |
| value(v-model) | 日期 | moment | - | - |\n
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| openChange | 弹出日历和关闭日历的回调 | function(status) |
| panelChange | 日期面板变化时的回调 | function(value, mode) |
| change | 时间发生变化的回调 | function(date: moment | string, dateString: string) |
| ok | 点击确定按钮的回调 | function() |`,
    "a-month-picker": `[antd-design-vue :https://www.antdv.com/components/date-picker-cn/#API](https://www.antdv.com/components/date-picker-cn/#API) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| allowClear | 是否显示清除按钮 | boolean | — | true |
| autoFocus | 自动获取焦点 | boolean | — | false |
| dateRender | 作用域插槽，自定义日期单元格的内容 | slot="dateRender" slot-scope="current, today" | — | - |
| disabled | 禁用 | boolean | - | false |
| disabledDate | 不可选择的日期 | (currentDate: moment) => boolean | - | - |
| getCalendarContainer | 定义浮层的容器，默认为 body 上新建 div | function(trigger) | - | - |
| locale | 国际化配置 | object | - | - |
| mode | 日期面板的状态 | string | time date month year decade | date |
| open | 控制弹层是否展开 | boolean | - | - |
| placeholder | 输入框提示文字 | string RangePicker[] | — | — |
| popupStyle | 额外的弹出日历样式 | object | — | {} |
| dropdownClassName | 额外的弹出日历 className | string | — | — |
| size | 输入框大小，large 高度为 40px，small 为 24px，默认是 32px | string | - | - |
| suffixIcon | 自定义的选择框后缀图标 | VNode   slot | - | - |
| inputReadOnly | 设置输入框为只读（避免在移动设备上打开虚拟键盘） | boolean | - | - |
| align | 该值将合并到 placement 的配置中 | Object | — | — |
| valueFormat | 可选，绑定值的格式，对 value、defaultValue、defaultPickerValue 起作用。不指定则绑定值为 moment 对象 | string | 见日期格式 | — |
| defaultValue | 默认面板日期 | moment | - | — |
| defaultPickerValue | 默认面板日期 | moment | - | — |
| format | 设置日期格式，配置参考 moment.js | string | - | "YYYY-MM-DD" |
| monthCellContentRender | 自定义的月份内容渲染方法 | slot="monthCellContentRender" slot-scope="date, locale" | - | - |
| renderExtraFooter | 在面板中添加额外的页脚 | slot="renderExtraFooter" slot-scope="mode" | - | - |
| value(v-model) | 日期 | moment | - | - |\n
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| openChange | 弹出日历和关闭日历的回调 | function(status) |
| panelChange | 日期面板变化时的回调 | function(value, mode) |
| change | 时间发生变化的回调 | function(date: moment | string, dateString: string) |`,
    "a-week-picker": `[antd-design-vue :https://www.antdv.com/components/date-picker-cn/#API](https://www.antdv.com/components/date-picker-cn/#API) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| allowClear | 是否显示清除按钮 | boolean | — | true |
| autoFocus | 自动获取焦点 | boolean | — | false |
| dateRender | 作用域插槽，自定义日期单元格的内容 | slot="dateRender" slot-scope="current, today" | — | - |
| disabled | 禁用 | boolean | - | false |
| disabledDate | 不可选择的日期 | (currentDate: moment) => boolean | - | - |
| getCalendarContainer | 定义浮层的容器，默认为 body 上新建 div | function(trigger) | - | - |
| locale | 国际化配置 | object | - | - |
| mode | 日期面板的状态 | string | time date month year decade | date |
| open | 控制弹层是否展开 | boolean | - | - |
| placeholder | 输入框提示文字 | string RangePicker[] | — | — |
| popupStyle | 额外的弹出日历样式 | object | — | {} |
| dropdownClassName | 额外的弹出日历 className | string | — | — |
| size | 输入框大小，large 高度为 40px，small 为 24px，默认是 32px | string | - | - |
| suffixIcon | 自定义的选择框后缀图标 | VNode   slot | - | - |
| inputReadOnly | 设置输入框为只读（避免在移动设备上打开虚拟键盘） | boolean | - | - |
| align | 该值将合并到 placement 的配置中 | Object | — | — |
| valueFormat | 可选，绑定值的格式，对 value、defaultValue、defaultPickerValue 起作用。不指定则绑定值为 moment 对象 | string | 见日期格式 | — |
| defaultValue | 默认面板日期 | moment | - | — |
| defaultPickerValue | 默认面板日期 | moment | - | — |
| format | 设置日期格式，配置参考 moment.js | string | - | "YYYY-wo" |
| renderExtraFooter | 在面板中添加额外的页脚 | slot="renderExtraFooter" slot-scope="mode" | - | - |
| value(v-model) | 日期 | moment | - | - |\n
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| openChange | 弹出日历和关闭日历的回调 | function(status) |
| panelChange | 日期面板变化时的回调 | function(value, mode) |
| change | 时间发生变化的回调 | function(date: moment | string, dateString: string) |`,
    "a-range-picker": `[antd-design-vue :https://www.antdv.com/components/date-picker-cn/#API](https://www.antdv.com/components/date-picker-cn/#API) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| allowClear | 是否显示清除按钮 | boolean | — | true |
| autoFocus | 自动获取焦点 | boolean | — | false |
| dateRender | 作用域插槽，自定义日期单元格的内容 | slot="dateRender" slot-scope="current, today" | — | - |
| disabled | 禁用 | boolean | - | false |
| disabledDate | 不可选择的日期 | (currentDate: moment) => boolean | - | - |
| getCalendarContainer | 定义浮层的容器，默认为 body 上新建 div | function(trigger) | - | - |
| locale | 国际化配置 | object | - | - |
| mode | 日期面板的状态 | string | time date month year decade | date |
| open | 控制弹层是否展开 | boolean | - | - |
| placeholder | 输入框提示文字 | string RangePicker[] | — | — |
| popupStyle | 额外的弹出日历样式 | object | — | {} |
| dropdownClassName | 额外的弹出日历 className | string | — | — |
| size | 输入框大小，large 高度为 40px，small 为 24px，默认是 32px | string | - | - |
| suffixIcon | 自定义的选择框后缀图标 | VNode   slot | - | - |
| inputReadOnly | 设置输入框为只读（避免在移动设备上打开虚拟键盘） | boolean | - | - |
| align | 该值将合并到 placement 的配置中 | Object | — | — |
| valueFormat | 可选，绑定值的格式，对 value、defaultValue、defaultPickerValue 起作用。不指定则绑定值为 moment 对象 | string | 见日期格式 | — |
| defaultValue | 默认面板日期 | moment | - | — |
| defaultPickerValue | 默认面板日期 | moment | - | — |
| disabledTime | 不可选择的时间 | function(dates: [moment, moment], partial: 'start'|'end') | - | — |
| format | 设置日期格式| string | - | "YYYY-MM-DD HH:mm:ss" |
| ranges | 预设时间范围快捷选择| { [range: string]: moment[] } , { [range: string]: () => moment[] } | - | - |
| renderExtraFooter | 在面板中添加额外的页脚 | slot="renderExtraFooter" slot-scope="mode" | - | - |
| separator | 设置分隔符 | string | - | ~ |
| showTime | 增加时间选择功能 | Object boolean | - | TimePicker Options |
| showTime.defaultValue | 设置用户选择日期时默认的时分秒 | moment[] | - | [moment(), moment()] |
| value(v-model) | 日期 | moment | - | - |\n
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| openChange | 弹出日历和关闭日历的回调 | function(status) |
| panelChange | 日期面板变化时的回调 | function(value, mode) |
| change | 日期范围发生变化的回调 | function(dates: [moment, moment]  [string, string], dateStrings: [string, string]) |
| ok | 点击确定按钮的回调 | function(dates: [moment, moment]   [string, string]) |
| calendarChange | 待选日期发生变化的回调 | function(dates: [moment, moment]   [string, string], dateStrings: [string, string]) |`,

    "a-form": `[antd-design-vue :https://www.antdv.com/components/form-cn/](https://www.antdv.com/components/form-cn/) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| form | 经 Form.create() 包装过的组件会自带 this.form 属性，如果使用 template 语法，可以使用 this.$form.createForm(this, options) | object | — | - |
| hideRequiredMark | 隐藏所有表单项的必选标记 | Boolean | — | false |
| labelAlign | label 标签的文本对齐方式 | string | 'left' 'right' | right |
| layout | 表单布局 | string | 'horizontal','vertical','inline' | horizontal |
| labelCol | label 标签布局，同 <Col> 组件，设置 span offset 值，如 {span: 3, offset: 12} 或 sm: {span: 3, offset: 12} | Object | — | — |
| wrapperCol | 需要为输入控件设置布局样式时，使用该属性，用法同 labelCol | Object | — | — |
| selfUpdate | 自定义字段更新逻辑 | boolean | — | false |
| colon | 配置 Form.Item 的 colon 的默认值 (只有在属性 layout 为 horizontal 时有效) | boolean | — | true |\n
Options配置 \n
| 参数 | 说明 | 类型 |
| :--- | :--- | :--- |
| props | 仅仅支持 Form.create({})(CustomizedForm)的使用方式，父组件需要映射到表单项上的属性声明(和vue 组件 props 一致) | {} |
| mapPropsToFields | 把父组件的属性映射到表单项上（如：把 Redux store 中的值读出），需要对返回值中的表单域数据用 Form.createFormField 标记，如果使用$form.createForm 创建收集器，你可以将任何数据映射到 Field 中，不受父组件约束 | (props) => ({ [fieldName]: FormField { value } }) |
| name | 设置表单域内字段 id 的前缀 | - |
| validateMessages | 默认校验信息，可用于把默认错误信息改为中文等，格式与 newMessages 返回值一致 | Object { [nested.path]: String } |
| onFieldsChange | 当 Form.Item 子节点的值发生改变时触发，可以把对应的值转存到 Redux store | Function(props, fields) |
| onValuesChange | 任一表单域的值发生改变时的回调 | (props, values) => void |
方法\n
| 方法 | 说明 | 类型 |
| :--- | :--- | :--- |
| getFieldDecorator | 用于和表单进行双向绑定，单文件 template 可以使用指令v-decorator进行绑定 | - |
| getFieldError | 获取某个输入控件的 Error | Function(name) |
| getFieldsError | 获取一组输入控件的 Error ，如不传入参数，则获取全部组件的 Error | Function([names: string[]]) |
| getFieldsValue | 获取一组输入控件的值，如不传入参数，则获取全部组件的值 | Function([fieldNames: string[]]) |
| getFieldValue | 获取一个输入控件的值 | Function(fieldName: string) |
| isFieldsTouched | 判断是否任一输入控件经历过 getFieldDecorator 或 v-decorator 的值收集时机 options.trigger | (names?: string[]) => boolean |
| isFieldTouched | 判断一个输入控件是否经历过 getFieldDecorator 或 v-decorator 的值收集时机 options.trigger | (name: string) => boolean |
| isFieldValidating | 判断一个输入控件是否在校验状态 | Function(name) |
| resetFields | 重置一组输入控件的值（为 initialValue）与状态，如不传入参数，则重置所有组件 | Function([names: string[]]) |
| setFields | 设置一组输入控件的值与错误状态。 | Function({ [fieldName]: { value: any, errors: [Error] } }) |
| setFieldsValue | 设置一组输入控件的值 | Function({ [fieldName]: value }) |
| validateFields | 校验并获取一组输入域的值与 Error，若 fieldNames 参数为空，则校验全部组件 | Function([fieldNames: string[]], [options: object], callback: Function(errors, values)) |
| validateFieldsAndScroll | 与 validateFields 相似，但校验完后，如果校验不通过的菜单域不在可见范围内，则自动滚动进可见范围 | 参考 validateFields |
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| submit | 数据验证成功后回调事件 | Function(e:Event) |`,

    "a-form-item": `[antd-design-vue :https://www.antdv.com/components/form-cn/#Form.Item](https://www.antdv.com/components/form-cn/#Form.Item) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| colon | 配合 label 属性使用，表示是否显示 label 后面的冒号 | boolean | — | true |
| extra | 额外的提示信息，和 help 类似，当需要错误信息和提示文案同时出现时，可以使用这个 | string,slot | — | false |
| hasFeedback | 配合 validateStatus 属性使用，展示校验状态图标，建议只配合 Input 组件使用 | boolean | - | false |
| help | 提示信息，如不设置，则会根据校验规则自动生成 | string slot | - | - |
| htmlFor | 设置子元素 label htmlFor 属性 | string | — | — |
| label | label 标签的文本 | string slot | — | — |
| labelCol | label 标签布局，同 <Col> 组件，设置 span offset 值，如 {span: 3, offset: 12} 或 sm: {span: 3, offset: 12} | Object | — | - |
| labelAlign | 标签文本对齐方式 | string | left , right | right |
| required | 是否必填，如不设置，则会根据校验规则自动生成 | boolean | — | false |
| validateStatus | 校验状态，如不设置，则会根据校验规则自动生成 | string | success 'warning' 'error' 'validating' | - |
| wrapperCol | 需要为输入控件设置布局样式时，使用该属性，用法同 labelCol | Object | - | - |
| selfUpdate | 自定义字段更新逻辑 | boolean | — | false |\n
校验规则 \n
| 参数 | 说明 | 类型 |
| :--- | :--- | :--- |
| enum | 枚举类型 | string |
| len | 字段长度 | number |
| max | 最大长度 | number |
| message | 校验文案 | string |
| min | 最小长度 | number |
| pattern | 正则表达式校验 | RegExp |
| required | 是否必选 | Boolean |
| transform | 校验前转换字段值 | function(value) => transformedValue:any |
| type | 内建校验类型 | string |
| validator | 自定义校验 | function(rule, value, callback) |
| whitespace | 必选时，空格是否会被视为错误 | boolean |
示例 ：v-decorator='['price',{initialValue: { number: 0, currency: 'rmb' },rules: [{ validator: checkPrice }]}]\n
`,
    "a-form-model": `[antd-design-vue :https://www.antdv.com/components/form-model-cn/](https://www.antdv.com/components/form-model-cn/) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| model | 表单数据对象 | object | — | - |
| rules | 表单验证规则 | object | — | - |
| hideRequiredMark | 隐藏所有表单项的必选标记 | Boolean | — | false |
| labelAlign | label 标签的文本对齐方式 | string | 'left' 'right' | right |
| layout | 表单布局 | string | 'horizontal','vertical','inline' | horizontal |
| labelCol | label 标签布局，同 <Col> 组件，设置 span offset 值，如 {span: 3, offset: 12} 或 sm: {span: 3, offset: 12} | Object | — | — |
| wrapperCol | 需要为输入控件设置布局样式时，使用该属性，用法同 labelCol | Object | — | — |
| colon | 配置 Form.Item 的 colon 的默认值 (只有在属性 layout 为 horizontal 时有效) | boolean | — | true |\n
| validateOnRuleChange | 是否在 rules 属性改变后立即触发一次验证 | boolean | — | false |
Options配置 \n
| 参数 | 说明 | 类型 |
| :--- | :--- | :--- |
| props | 仅仅支持 Form.create({})(CustomizedForm)的使用方式，父组件需要映射到表单项上的属性声明(和vue 组件 props 一致) | {} |
| mapPropsToFields | 把父组件的属性映射到表单项上（如：把 Redux store 中的值读出），需要对返回值中的表单域数据用 Form.createFormField 标记，如果使用$form.createForm 创建收集器，你可以将任何数据映射到 Field 中，不受父组件约束 | (props) => ({ [fieldName]: FormField { value } }) |
| name | 设置表单域内字段 id 的前缀 | - |
| validateMessages | 默认校验信息，可用于把默认错误信息改为中文等，格式与 newMessages 返回值一致 | Object { [nested.path]: String } |
| onFieldsChange | 当 Form.Item 子节点的值发生改变时触发，可以把对应的值转存到 Redux store | Function(props, fields) |
| onValuesChange | 任一表单域的值发生改变时的回调 | (props, values) => void |
方法\n
| 方法 | 说明 | 类型 |
| :--- | :--- | :--- |
| validate | 对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 promise | Function(callback: Function(boolean, object)) |
| validateField | 对部分表单字段进行校验的方法 | Function(props: array | string, callback: Function(errorMessage: string)) |
| resetFields | 对整个表单进行重置，将所有字段值重置为初始值并移除校验结果 | - |
| clearValidate | 移除表单项的校验结果。传入待移除的表单项的 prop 属性或者 prop 组成的数组，如不传则移除整个表单的校验结果 | Function(props: array | string) |

| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| submit | 数据验证成功后回调事件 | Function(e:Event) |
| validate | 任一表单项被校验后触发 | 被校验的表单项 prop 值，校验是否通过，错误消息（如果存在） |`,

    "a-form-model-item": `[antd-design-vue :https://www.antdv.com/components/form-cn/#Form.Item](https://www.antdv.com/components/form-cn/#Form.Item) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| prop | 表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的 | string | — | - |
| rules | 表单验证规则 | object , array | — | - |
| autoLink | 是否自动关联表单域，对于大部分情况都可以使用自动关联，如果不满足自动关联的条件，可以手动关联，参见下方注意事项 | boolean | — | true |
| colon | 配合 label 属性使用，表示是否显示 label 后面的冒号 | boolean | — | true |
| extra | 额外的提示信息，和 help 类似，当需要错误信息和提示文案同时出现时，可以使用这个 | string,slot | — | false |
| hasFeedback | 配合 validateStatus 属性使用，展示校验状态图标，建议只配合 Input 组件使用 | boolean | - | false |
| help | 提示信息，如不设置，则会根据校验规则自动生成 | string slot | - | - |
| htmlFor | 设置子元素 label htmlFor 属性 | string | — | — |
| label | label 标签的文本 | string slot | — | — |
| labelCol | label 标签布局，同 <Col> 组件，设置 span offset 值，如 {span: 3, offset: 12} 或 sm: {span: 3, offset: 12} | Object | — | - |
| labelAlign | 标签文本对齐方式 | string | left , right | right |
| required | 是否必填，如不设置，则会根据校验规则自动生成 | boolean | — | false |
| validateStatus | 校验状态，如不设置，则会根据校验规则自动生成 | string | success 'warning' 'error' 'validating' | - |
| wrapperCol | 需要为输入控件设置布局样式时，使用该属性，用法同 labelCol | Object | - | - |\n
校验规则 \n
| 参数 | 说明 | 类型 |
| :--- | :--- | :--- |
| enum | 枚举类型 | string |
| len | 字段长度 | number |
| max | 最大长度 | number |
| message | 校验文案 | string |
| min | 最小长度 | number |
| pattern | 正则表达式校验 | RegExp |
| required | 是否必选 | Boolean |
| transform | 校验前转换字段值 | function(value) => transformedValue:any |
| type | 内建校验类型 | string |
| validator | 自定义校验 | function(rule, value, callback) |
| whitespace | 必选时，空格是否会被视为错误 | boolean |`,
    "a-input": `[antd-design-vue :https://www.antdv.com/components/input-cn/](https://www.antdv.com/components/input-cn/) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| addonAfter | 带标签的 input，设置后置标签 | string,slot | - | - |
| addonBefore | 带标签的 input，设置前置标签 | string,slot | - | - |
| defaultValue | 输入框默认内容 | string | - | - |
| disabled | 禁用 | boolean | — | false |
| id | 输入框的 id | string | — | - |
| maxLength | 最大长度 | string | — | - |
| prefix | 带有前缀图标的 input | string，slot | — | - |
| suffix | 带有后缀图标的 input | string，slot | — | - |
| size | 控件大小。注：标准表单内的输入框大小限制为 large | string | large default small | default |
| type | 类型 | string | text和其他 原生 input 的 type 值 | text |
| value(v-model) | 绑定值 | string / number | — | — |
| allowClear | 可以点击清除图标删除内容 | boolean | — | — |\n
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| change | 输入框内容变化时的回调 | function(e) |
| pressEnter | 按下回车的回调 | function(e) |`,
    "a-textarea": `[antd-design-vue :https://www.antdv.com/components/input-cn/#Input.TextArea](https://www.antdv.com/components/input-cn/#Input.TextArea) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| autosize | 自适应内容高度，可设置为 true|false 或对象：{ minRows: 2, maxRows: 6 } | boolean,object | - | false |
| defaultValue | 输入框默认内容 | string | - | - |
| value(v-model) | 输入框内容 | string | - | - |
| allowClear | 可以点击清除图标删除内容 | boolean | — | — |\n
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| pressEnter | 按下回车的回调 | function(e) |\n
`,
    "a-input-search": `[antd-design-vue :https://www.antdv.com/components/input-cn/#Input.Search](https://www.antdv.com/components/input-cn/#Input.Search) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| enterButton | 是否有确认按钮，可设为按钮文字。该属性会与 addon 冲突。 | boolean,slot | - | false |
| loading | 搜索 loading | boolean | - | - |\n
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| search | 点击搜索或按下回车键时的回调 | function(value, event) |`,
    "a-input-group": `[antd-design-vue :https://www.antdv.com/components/input-cn/#Input.Group](https://www.antdv.com/components/input-cn/#Input.Group) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| compact | 是否用紧凑模式。 | boolean | - | false |
| size | Input.Group 中所有的 Input 的大小 | string | large default small | default |\n
<a-input-group>\n
  <a-input />\n
  <a-input />\n
</a-input-group>\n
`,
    "a-input-password": `[antd-design-vue :https://www.antdv.com/components/input-cn/#Input.Password-(1.14.0-中新增)](https://www.antdv.com/components/input-cn/#Input.Password-(1.14.0-中新增)) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| visibilityToggle | 是否显示切换按钮 | boolean | - | true |\n
`,
    "a-input-number": `[antd-design-vue :https://www.antdv.com/components/input-number-cn/](https://www.antdv.com/components/input-number-cn/) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| autoFocus | 自动获取焦点 | boolean | — | false |
| defaultValue | 初始值 | number | — | - |
| disabled | 是否禁用计数器 | boolean | — | false |
| formatter | 指定输入框展示值的格式 | function(value: number , string): string | — | false |
| max | 最大值 | number | — | Infinity |
| min | 最小值 | number | — | -Infinity |
| parser | 指定从 formatter 里转换回数字的方式，和 formatter 搭配使用 | function( string): number | — | - |
| precision | 数值精度 | number | — | — |
| decimalSeparator | 小数点 | string | — | — |
| size | 计数器尺寸 | string | - | — |
| step | 计数器步长 | number,string | — | 1 |
| value(v-model) | 当前值 | number | — | - |\n
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| change | 变化回调 | Function(value: number , string) |
| pressEnter | 按下回车的回调 | function(e) |\n
| 方法名 | 说明 | 参数 |
| :--- | :--- | :--- |
| blur | 使 input 移除焦点 | - |
| focus | 使 input 获取焦点 | - |`,
    "a-mentions": `[antd-design-vue :https://www.antdv.com/components/mentions-cn/](https://www.antdv.com/components/mentions-cn/) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| autoFocus | 自动获取焦点 | boolean | — | false |
| defaultValue | 初始值 | number | — | - |
| filterOption | 自定义过滤逻辑 | (input: string, option: OptionProps) => boolean | — | - |
| notFoundContent | 当下拉列表为空时显示的内容 | false | - | — | - |
| placement | 弹出层展示位置 | string | top , bottom | bottom |
| prefix | 设置触发关键字 | string | — | '@' |
| split | 设置选中项前后分隔符 | string | — | - |
| validateSearch | 自定义触发验证逻辑 | (text: string, props: MentionsProps) => void | — | - |
| value(v-model) | 设置值 | string | — | - |
| getPopupContainer | 指定建议框挂载的 HTML 节点 | () => HTMLElement | — | — |\n
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| blur | 失去焦点的时回调 | function |
| change | 变化回调 | Function(value) |
| focus | 获得焦点时回调 | function |
| search | 文本框值变化时回调 | function(value: string, prefix: string) |
| select | 选择选项时触发 | function(option: OptionProps, prefix: string) |\n
| 方法名 | 说明 | 参数 |
| :--- | :--- | :--- |
| blur | 使 input 移除焦点 | - |
| focus | 使 input 获取焦点 | - |`,
    "a-mentions-option": `[antd-design-vue :https://www.antdv.com/components/mentions-cn/#API](https://www.antdv.com/components/mentions-cn/#API) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| value | 选择时填充的值。 | string | - | - |\n
`,
    "a-radio": `[antd-design-vue :https://www.antdv.com/components/radio-cn/](https://www.antdv.com/components/radio-cn/) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| autoFocus | 自动获取焦点 | boolean | - | false |
| checked | 指定当前是否选中 | boolean | - | false |
| defaultChecked | 初始是否选中 | boolean | - | false |
| value | 根据 value 进行比较，判断是否选中 | string | - | - |
\n
`,
    "a-radio-group": `[antd-design-vue :https://www.antdv.com/components/radio-cn/](https://www.antdv.com/components/radio-cn/) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| defaultValue | 默认选中的值 | any | - | false |
| disabled | 禁选所有子单选器 | boolean | - | false |
| name | RadioGroup 下所有 input[type="radio"] 的 name 属性 | string | - | - |
| options | 以配置形式设置子元素 | string[] , Array<{ label: string value: string disabled?: boolean }> | - | - |
| size | 大小，只对按钮样式生效 | string | large , default , small | default |
| value(v-model) | 用于设置当前选中的值 | any | - | - |
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| change | 变化回调 | Function(e) |\n
| 方法名 | 说明 | 参数 |
| :--- | :--- | :--- |
| blur | 使 input 移除焦点 | - |
| focus | 使 input 获取焦点 | - |
\n
`,
    "a-rate": `[antd-design-vue :https://www.antdv.com/components/rate-cn/](https://www.antdv.com/components/rate-cn/) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| allowClear | 是否允许再次点击后清除 | boolean | - | true |
| allowHalf | 是否允许半选 | boolean | - | false |
| autoFocus | 自动获取焦点 | boolean | - | false |
| character | 自定义字符 | String or slot="character" | - | <Icon type="star" /> |
| count | star 总数 | number | - | 5 |
| defaultValue | 默认值 | number | - | 0 |
| disabled | 只读，无法进行交互 | boolean | - | false |
| tooltips | 自定义每项的提示信息 | string[] | - | - |
| value(v-model) | 当前数，受控值 | number | - | - |
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| blur | 失去焦点时的回调 | Function() |
| change | 选择时的回调 | Function(value: number) |
| focus | 获取焦点时的回调 | Function() |
| hoverChange | 鼠标经过时数值变化的回调 | Function(value: number) |
| keydown | 按键回调 | Function(event) |\n
| 方法名 | 说明 | 参数 |
| :--- | :--- | :--- |
| blur | 使 input 移除焦点 | - |
| focus | 使 input 获取焦点 | - |
\n
`,
    "a-select": `[antd-design-vue :https://www.antdv.com/components/select-cn/](https://www.antdv.com/components/select-cn/) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| allowClear | 支持清除 | boolean | — | false |
| autoClearSearchValue | 是否在选中项后清空搜索框，只在 mode 为 multiple 或 tags 时有效 | boolean | — | true |
| autoFocus | 默认获取焦点 | boolean | — | false |
| defaultActiveFirstOption | 是否默认高亮第一个选项 | boolean | — | true |
| defaultValue | 指定默认选中的条目 | string,string[],number,number[] | — | - |
| disabled | 是否禁用 | boolean | — | false |
| dropdownClassName | 下拉菜单的 className 属性 | string | — | - |
| dropdownMatchSelectWidth | 下拉菜单和选择器同宽 | boolean | — | true |
| dropdownRender | 自定义下拉框内容 | (menuNode: VNode, props) => VNode | — | - |
| dropdownStyle | 下拉菜单的 style 属性 | Object | — | - |
| dropdownMenuStyle | dropdown 菜单自定义样式 | Object | — | - |
| filterOption | 是否根据输入项进行筛选。当其为一个函数时，会接收 inputValue option 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false | boolean or function(inputValue, option) | — | - |
| firstActiveValue | 默认高亮的选项 | string,string[] | — | - |
| getPopupContainer | 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位 | Function(triggerNode) | — | () => document.body |
| labelInValue | 是否把每个选项的 label 包装到 value 中，会把 Select 的 value 类型从 string 变为 {key: string, label: vNodes} 的格式 | boolean | — | false |
| maxTagCount | 最多显示多少个 tag | number | — | - |
| maxTagPlaceholder | 隐藏 tag 时显示的内容 | slot/function(omittedValues) | — | - |
| maxTagTextLength | 最多显示多少个 tag | number | — | - |
| maxTagCount | 最大显示的 tag 文本长度 | number | — | - |
| mode | 设置 Select 的模式为多选或标签 | default/multiple/tags/combobox | — | - |
| notFoundContent | 当下拉列表为空时显示的内容 | string/slot | — | 'Not Found' |
| optionFilterProp | 搜索时过滤对应的 option 属性，如设置为 children 表示对内嵌内容进行搜索 | string | — | - |
| optionLabelProp | 回填到选择框的 Option 的属性值，默认是 Option 的子元素。比如在子元素需要高亮效果时，此值可以设为 value | string | — | - |
| placeholder | 占位符 | string/slot | — | 请选择 |
| showSearch | 使单选模式可搜索 | boolean | — | false |
| showArrow | 是否显示下拉小箭头 | boolean | — | false |
| size | 输入框尺寸 | string | large/small | — |
| suffixIcon | 自定义的选择框后缀图标 | VNode/slot | — | - |
| removeIcon | 自定义的多选框清除图标 | VNode/slot | — | - |
| clearIcon | 当下拉列表为空时显示的内容 | VNode/slot | — | - |
| menuItemSelectedIcon | 自定义当前选中的条目图标 | VNode/slot | — | - |
| tokenSeparators | 在 tags 和 multiple 模式下自动分词的分隔符 | string[] | — | - |
| value(v-model) | 指定当前选中的条目 | string/string[]/number/number[] | — | - |
| options | options 数据，如果设置则不需要手动构造 selectOption 节点 | array<{value, label, [disabled, key, title]}> | — | - |
| defaultOpen | 是否默认展开下拉菜单 | boolean | — | - |
| open | 是否展开下拉菜单 | boolean | — | — |\n
>> 注意，如果发现下拉菜单跟随页面滚动，或者需要在其他弹层中触发 Select，请尝试使用 getPopupContainer={triggerNode => triggerNode.parentNode} 将下拉弹层渲染节点固定在触发器的父元素中 \n
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| change | 选中 option，或 input 的 value 变化（combobox 模式下）时，调用此函数 | function(value, option:Option/Array<Option>) |
| blur | 失去焦点的时回调 | function |
| deselect | 取消选中时调用，参数为选中项的 value (或 key) 值，仅在 multiple 或 tags 模式下生效 | function(value，option:Option) |
| focus | 获得焦点时回调 | function |
| inputKeydown | 键盘按下时回调 | function |
| mouseenter | 鼠标移入时回调 | function |
| mouseleave | 鼠标移出时回调 | function |
| popupScroll | 下拉列表滚动时的回调 | function |
| search | 文本框值变化时回调 | function(value: string) |
| select | 被选中时调用，参数为选中项的 value (或 key)值  | function(value, option:Option) |
| dropdownVisibleChange | 展开下拉菜单的回调 | function(open) |\n`,
    "a-option-group": `[antd-design-vue :https://www.antdv.com/components/select-cn/](https://www.antdv.com/components/select-cn/) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| key | - | string | — | — |
| label | 名 | string/function(h)/slot | — | - |`,
    "a-option": `[antd-design-vue :https://www.antdv.com/components/select-cn/](https://www.antdv.com/components/select-cn/) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| disabled | 是否禁用 | boolean | false |
| key | 和 value 含义一致。如果 Vue 需要你设置此项，此项值与 value 的值相同，然后可以省略 value 设置 | string | - |
| title | 选中该 Option 后，Select 的 title | string | - |
| value | 默认根据此属性值进行筛选 | string/number | - |
| class | Option 器类名 | string | - |`,
    "a-slider": `[antd-design-vue :https://www.antdv.com/components/slider-cn/](https://www.antdv.com/components/slider-cn/) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| autoFocus | 自动获取焦点 | boolean | false |
| defaultValue | 设置初始取值。当 range 为 false 时，使用 number，否则用 [number, number] | number/number[] | 0 or [0, 0] |
| disabled | 值为 true 时，滑块为禁用状态 | boolean | false |
| dots | 是否只能拖拽到刻度上 | boolean | false |
| included | marks 不为空对象时有效，值为 true 时表示值为包含关系，false 表示并列 | boolean | true | 
| marks | 刻度标记，key 的类型必须为 number 且取值在闭区间 [min, max] 内，每个标签可以单独设置样式 | object | { number: string|VNode }/{ number: { style: object, label: string|VNode } }/{ number: () => VNode } | 
| max | 最大值 | number | 100 | 
| min | 最小值 | number | 0 | 
| range | 双滑块模式 | boolean | false | 
| reverse | 反向坐标轴 | boolean | false | 
| step | 步长，取值必须大于 0，并且可被 (max - min) 整除。当 marks 不为空对象时，可以设置 step 为 null，此时 Slider 的可选值仅有 marks 标出来的部分 | number/null | 1 | 
| tipFormatter | Slider 会把当前值传给 tipFormatter，并在 Tooltip 中显示 tipFormatter 的返回值，若为 null，则隐藏 Tooltip。 | Function/null | IDENTITY | 
| value(v-model) | 设置当前取值。当 range 为 false 时，使用 number，否则用 [number, number] | number/number[] | - | 
| vertical | 值为 true 时，Slider 为垂直方向 | Boolean | false | 
| tooltipPlacement | 设置 Tooltip 展示位置 | string | - | 
| tooltipVisible | 值为true时，Tooltip 将会始终显示；否则始终不显示，哪怕在拖拽及移入时 | boolean | - | 
| getTooltipPopupContainer | Tooltip 渲染父节点，默认渲染到 body 上 | Function | () => document.body |\n
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| afterChange | 与 mouseup 触发时机一致，把当前值作为参数传入。 | Function(value) |
| change | 当 Slider 的值发生改变时，会触发 change 事件，并把改变后的值作为参数传入 | Function(value) |
`,

    "a-switch": `[antd-design-vue :https://www.antdv.com/components/switch-cn/](https://www.antdv.com/components/switch-cn/) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| autoFocus | 组件自动获取焦点 | boolean | — | false |
| checked(v-model) | 指定当前是否选中 | boolean | — | false |
| checkedChildren | 选中时的内容 | string/slot | — | false |
| defaultChecked | 初始是否选中 | boolean | — | false |
| disabled | 是否禁用 | boolean | — | false |
| loading | 加载中的开关 | string/slot | — | false |
| size | 开关大小 | string | default small | default |
| unCheckedChildren | 非选中时的内容 | string/slot | — | — |\n
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| change | switch 状态发生变化时的回调函数 | (checked:Boolean, event: Event) |
| click | 点击时回调函数 | (checked: boolean, event: Event) |\n
| 方法名 | 说明 | 参数 |
| :--- | :--- | :--- |
| blur | 使 Switch 移除焦点 | - |
| focus | 使 Switch 获取焦点 | - |`,
    "a-time-picker": `[antd-design-vue :https://www.antdv.com/components/time-picker-cn/](https://www.antdv.com/components/time-picker-cn/) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| addon | 选择框底部显示自定义的内容 | slot/slot-scope | — | - |
| allowClear | 是否展示清除按钮 | boolean | — | true |
| autoFocus | 自动获取焦点 | boolean | — | false |
| clearText | 清除按钮的提示文案 | string | — | - |
| defaultOpenValue | 当 defaultValue/value 不存在时，可以设置面板打开时默认选中的值 | moment | — | moment() |
| defaultValue | 默认时间 | moment | — | - |
| disabled | 是否禁用 | boolean | — | false |
| disabledHours | 禁止选择部分小时选项 | function() | — | - |
| disabledMinutes | 禁止选择部分分钟选项 | function(selectedHour) | — | - |
| disabledSeconds | 禁止选择部分秒选项 | function(selectedHour, selectedMinute) | — | - |
| format | 展示的时间格式 | string | — | "HH:mm:ss"	 |
| getPopupContainer | 定义浮层的容器，默认为 body 上新建 div | function(trigger) | — | - |
| hideDisabledOptions | 隐藏禁止选择的选项 | boolean | — | false |
| hourStep | 小时选项间隔 | number | — | 1 |
| inputReadOnly | 设置输入框为只读（避免在移动设备上打开虚拟键盘） | boolean | - | - |
| minuteStep | 分钟选项间隔 | number | - | 1 |
| open(.sync) | 面板是否打开 | boolean | - | false |
| placeholder | 没有值的时候显示的内容 | string | - | "请选择时间" |
| popupClassName | 弹出层类名 | string | — | - |
| popupStyle | 弹出层样式对象 | object | — | - |
| secondStep | 秒选项间隔 | number | — | 1 |
| suffixIcon | 自定义的选择框后缀图标 | string/VNode/slot | — | - |
| clearIcon | 自定义的清除图标 | string/VNode/slot | — | - |
| use12Hours | 使用 12 小时制，为 true 时 format 默认为 h:mm:ss a | boolean | — | false |
| value(v-model) | 当前时间 | moment | — | — |
| valueFormat | 可选，绑定值的格式，对 value、defaultValue 起作用。不指定则绑定值为 moment 对象 | string | — | — |\n
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| change | 时间发生变化的回调 | function(time: moment | string, timeString: string) |
| openChange | 面板打开/关闭时的回调 | (open: boolean): void |`,

    "a-transfer": `[antd-design-vue :https://www.antdv.com/components/transfer-cn/](https://www.antdv.com/components/transfer-cn/) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| dataSource | 数据源，其中的数据将会被渲染到左边一栏中，targetKeys 中指定的除外 | [{key: string.isRequired,title: string.isRequired,description: string,disabled: bool}][] | — | [ ] |
| disabled | 是否禁用 | boolean | — | false |
| filterOption | 接收 inputValue option 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false。 | (inputValue, option): boolean | — | false |
| footer | 可以设置为一个 作用域插槽 | slot="footer" slot-scope="props" | — | - |
| lazy | Transfer 使用了 [vc-lazy-load]优化性能，这里可以设置相关参数。设为 false 可以关闭懒加载 | object/boolean | — | { height: 32, offset: 32 } |
| listStyle | 两个穿梭框的自定义样式 | object | — | - |
| locale | 各种语言 | object | — | { itemUnit: '项', itemsUnit: '项', notFoundContent: '列表为空', searchPlaceholder: '请输入搜索内容' } |
| operations | 操作文案集合，顺序从上至下 | string[] | — | ['>', '<'] |
| render | 每行数据渲染函数，该函数的入参为 dataSource 中的项，返回值为 element。或者返回一个普通对象，其中 label 字段为 element，value 字段为 title | Function(record) | — | - |
| selectedKeys | 设置哪些项应该被选中 | string[] | — | [] |
| showSearch | 是否显示搜索框 | boolean | — | false |
| showSelectAll | 是否展示全选勾选框 | boolean | — | false |
| targetKeys | 自定义搜索方法 | function | — | — |
| titles | 标题集合，顺序从左至右 | array | — | ['', ''] |\n
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| change | 选项在两栏之间转移时的回调函数 | (targetKeys, direction, moveKeys) |
| scroll | 选项列表滚动时的回调函数 | (direction, event) |
| search | 搜索框内容时改变时的回调函数 | (direction: 'left'|'right', value: string) |
| selectChange | 选中项发生改变时的回调函数 | (sourceSelectedKeys, targetSelectedKeys) |\n
Render Props \n
| 参数 | 说明 | 类型 |
| :--- | :--- | :--- |
| direction | 渲染列表的方向 | left/right |
| disabled | 是否禁用列表 | boolean |
| filteredItems | 过滤后的数据 | TransferItem[] |
| selectedKeys | 选中的条目 | string[] |
| itemSelect | 勾选条目 | (key: string, selected: boolean) |
| itemSelectAll | 勾选一组条目 | (keys: string[], selected: boolean) |\n
参考示例\n
<a-transfer>\n
  <template\n
    slot="children"\n
    slot-scope="{\n
      props: {\n
        direction,\n
        filteredItems,\n
        selectedKeys,\n
        disabled: listDisabled\n
      }, on: {\n
        itemSelectAll,\n
        itemSelect,\n
      }\n
    }"\n
  >\n
    <your-component />\n
  <template>\n
</a-transfer>\n
`,
    "a-tree-select": `[antd-design-vue :https://www.antdv.com/components/tree-select-cn/](https://www.antdv.com/components/tree-select-cn/) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |   
| allowClear | 显示清除按钮 | boolean | — | — |  
| defaultValue | 指定默认选中的条目 | string/string[] | — | — |  
| disabled | 是否禁用 | boolean | — | false |  
| dropdownClassName | 下拉菜单的 className 属性 | string | — | — |  
| dropdownMatchSelectWidth | 下拉菜单和选择器同宽 | boolean | — | true |  
| dropdownStyle | 下拉菜单的样式 | object | — | — |  
| filterTreeNode | 是否根据输入项进行筛选，默认用 treeNodeFilterProp 的值作为要筛选的 TreeNode 的属性值 | boolean/Function(inputValue: string, treeNode: TreeNode) (函数需要返回 bool 值) | — | Function |  
| getPopupContainer | 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位 | Function(triggerNode) | — | () => document.body |  
| labelInValue | 是否把每个选项的 label 包装到 value 中，会把 value 类型从 string 变为 {value: string, label: VNode, halfChecked(treeCheckStrictly 时有效): string[] } 的格式 | boolean | — | false |  
| loadData | 异步加载数据 | function(node) | — | — |  
| maxTagCount | 最多显示多少个 tag | number | — | — |  
| maxTagPlaceholder | 隐藏 tag 时显示的内容 | slot/function(omittedValues) | — | — |  
| multiple | 支持多选（当设置 treeCheckable 时自动变为 true） | boolean | — | false |  
| placeholder | 选择框默认文字 | string/slot | — | — |  
| searchPlaceholder | 搜索框默认文字 | string/slot | — | — |  
| searchValue(.sync) | 搜索框的值，可以通过 search 事件获取用户输入 | string | — | — |  
| treeIcon | 是否展示 TreeNode title 前的图标，没有默认样式，如设置为 true，需要自行定义图标相关样式 | boolean | — | false |  
| showCheckedStrategy | 定义选中项回填的方式 | string | SHOW_ALL: 显示所有选中节点(包括父节点) SHOW_PARENT: 只显示父节点(当父节点下所有子节点都选中时)| SHOW_CHILD |  
| showSearch | 在下拉中显示搜索框(仅在单选模式下生效) | boolean | - | false |  
| size | 选择框大小 | string | large small | default |  
| suffixIcon | 自定义的选择框后缀图标 | VNode/slot | - | - |     
| treeCheckable | 显示 checkbox | boolean | - | false |     
| treeCheckStrictly | checkable 状态下节点选择完全受控（父子节点选中状态不再关联），会使得 labelInValue 强制为 true | boolean | - | false |     
| treeData | treeNodes 数据，如果设置则不需要手动构造 TreeNode 节点（value 在整个树范围内唯一） | array | - | [] |     
| replaceFields | 替换 treeNode 中 title,value,key,children 字段为 treeData 中对应的字段 | object | - | {children:'children', title:'title', key:'key', value: 'value' } |
| treeDataSimpleMode | 使用简单格式的 treeData，具体设置参考可设置的类型 (此时 treeData 应变为这样的数据结构: [{id:1, pId:0, value:'1', label:"test1",...},...], pId 是父节点的 id) | false/Array<{ id: string, pId: string, rootPId: null }> | - | false | 
| treeDefaultExpandAll | 默认展开所有树节点 | boolean | - | false |   
| treeDefaultExpandedKeys | 默认展开的树节点 | string[] / number[] | - | - |   
| treeExpandedKeys(.sync) | 设置展开的树节点 | string | - | value |   
| treeNodeFilterProp | 输入项过滤对应的 treeNode 属性 | VNode/slot | - | - |   
| treeNodeLabelProp | 作为显示的 prop 设置 | string | - | title |   
| value(v-model) | 指定当前选中的条目 | string/string[] | - | - |\n
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| change | 选中树节点时调用此函数 | (value, label, extra) |
| search | 文本框值变化时回调 | (value) |
| select | 被选中时调用 | (value, node, extra) |
| treeExpand | 展开节点时调用 | (expandedKeys) |`,
    "a-upload": `[antd-design-vue :https://www.antdv.com/components/upload-cn/](https://www.antdv.com/components/upload-cn/) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| accept | 接受上传的文件类型 | string | — | — |
| action | 必选参数，上传的地址 | string/(file) => Promise | — | — |
| method | 上传请求的 http method | string| — | — |
| directory | 支持上传文件夹 | boolean| — | false |
| before-upload | 上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。 | (file, fileList)=> boolean | Promise | — | — |
| customRequest | 通过覆盖默认的上传行为，可以自定义自己的上传实现 | Function| — | - |
| data | 上传时附带的额外参数 | object | — | — |
| defaultFileList | 默认已经上传的文件列表 | object[] | — | — |
| disabled | 是否禁用 | boolean | — | false |
| fileList | 已经上传的文件列表（受控） | object[] | — | — |
| headers | 设置上传的请求头部 | object | — | — |
| listType | 上传列表的内建样式 | string | text, picture 和 picture-card | text |
| multiple | 是否支持多选文件 | boolean | — | false |
| name | 上传的文件字段名 | string | — | file |
| previewFile | 自定义文件预览逻辑 | (file: File | Blob) => Promise<dataURL: string> | — | - |
| showUploadList | 是否展示 uploadList, 可设为一个对象，用于单独设定 showPreviewIcon 和 showRemoveIcon | Boolean or { showPreviewIcon?: boolean, showRemoveIcon?: boolean } | — | true |
| supportServerRender | 服务端渲染时需要打开这个 | boolean | — | false |
| withCredentials | 上传请求时是否携带 cookie | boolean | — | false |
| openFileDialogOnClick | 点击打开文件对话框 | boolean | — | true |
| remove | 点击移除文件时的回调，返回值为 false 时不移除。支持返回一个 Promise 对象，Promise 对象 resolve(false) 或 reject 时不移除 | Function(file): boolean / Promise | — | — |
| transformFile | 在上传之前转换文件。支持返回一个 Promise 对象 | Function(file): string/Blob/File/Promise<string/Blob/File> | — | — |\n
| 事件 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| change | 上传文件改变时的状态 | Function |
| preview | 点击文件链接或预览图标时的回调 | Function(file) |
| download | 点击下载文件时的回调，如果没有指定，则默认跳转到文件 url 对应的标签页。 | Function(file) |
| reject | 拖拽文件不符合 accept 类型时的回调 | Function(fileList) |\n`,
    "a-upload-dragger": `[antd-design-vue :https://www.antdv.com/components/upload-cn/#components-upload-demo-drag-and-drop](https://www.antdv.com/components/upload-cn/#components-upload-demo-drag-and-drop) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| accept | 接受上传的文件类型 | string | — | — |
| action | 必选参数，上传的地址 | string/(file) => Promise | — | — |
| method | 上传请求的 http method | string| — | — |
| directory | 支持上传文件夹 | boolean| — | false |
| before-upload | 上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。 | (file, fileList)=> boolean | Promise | — | — |
| customRequest | 通过覆盖默认的上传行为，可以自定义自己的上传实现 | Function| — | - |
| data | 上传时附带的额外参数 | object | — | — |
| defaultFileList | 默认已经上传的文件列表 | object[] | — | — |
| disabled | 是否禁用 | boolean | — | false |
| fileList | 已经上传的文件列表（受控） | object[] | — | — |
| headers | 设置上传的请求头部 | object | — | — |
| listType | 上传列表的内建样式 | string | text, picture 和 picture-card | text |
| multiple | 是否支持多选文件 | boolean | — | false |
| name | 上传的文件字段名 | string | — | file |
| previewFile | 自定义文件预览逻辑 | (file: File | Blob) => Promise<dataURL: string> | — | - |
| showUploadList | 是否展示 uploadList, 可设为一个对象，用于单独设定 showPreviewIcon 和 showRemoveIcon | Boolean or { showPreviewIcon?: boolean, showRemoveIcon?: boolean } | — | true |
| supportServerRender | 服务端渲染时需要打开这个 | boolean | — | false |
| withCredentials | 上传请求时是否携带 cookie | boolean | — | false |
| openFileDialogOnClick | 点击打开文件对话框 | boolean | — | true |
| remove | 点击移除文件时的回调，返回值为 false 时不移除。支持返回一个 Promise 对象，Promise 对象 resolve(false) 或 reject 时不移除 | Function(file): boolean / Promise | — | — |
| transformFile | 在上传之前转换文件。支持返回一个 Promise 对象 | Function(file): string/Blob/File/Promise<string/Blob/File> | — | — |\n
| 事件 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| change | 上传文件改变时的状态 | Function |
| preview | 点击文件链接或预览图标时的回调 | Function(file) |
| download | 点击下载文件时的回调，如果没有指定，则默认跳转到文件 url 对应的标签页。 | Function(file) |
| reject | 拖拽文件不符合 accept 类型时的回调 | Function(fileList) |\n`,
    "a-avatar": `[antd-design-vue :https://www.antdv.com/components/avatar-cn/](https://www.antdv.com/components/avatar-cn/) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| icon | 设置头像的图标类型 | string/VNode/slot | — | — |
| shape | 指定头像的形状 | string | circle/square | circle |
| size | 设置头像的大小 | number | large/small/default | default |
| src | 图片类头像的资源地址 | string | — | - |
| srcSet | 设置图片类头像响应式资源地址 | string | — | - |
| alt | 图像无法显示时的替代文本 | string | — | — |
| loadError | 图片加载失败的事件，返回 false 会关闭组件默认的 fallback 行为 | () => boolean | — | - |`,
    "a-avatar": `[antd-design-vue :https://www.antdv.com/components/badge-cn/](https://www.antdv.com/components/badge-cn/) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| color | 自定义小圆点的颜色 | string | — | — |
| count |  展示的数字，大于 overflowCount 时显示为 overflowCount +，为 0 时隐藏 | number/string/slot | - | - |
| dot | 不展示数字，只有一个小红点 | boolean | - | - |
| offset | 设置状态点的位置偏移，格式为 [x, y] | [number/string, number/string] | — | - |
| overflowCount | 展示封顶的数字值 | number | — | 99 |
| showZero | 当数值为 0 时，是否展示 Badge | boolean | — | false |
| status | 设置 Badge 为状态点 | string | success/processing/default/error/warning | - |
| text | 在设置了 status 的前提下有效，设置状态点的文本 | string | — | - |
| numberStyle | 设置状态点的样式 | object | — | - |
| title | 设置鼠标放在状态点上时显示的文字 | string | — | - |`,
    "a-calendar": `[antd-design-vue :https://www.antdv.com/components/calendar-cn/](https://www.antdv.com/components/calendar-cn/) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| dateCellRender | 作用域插槽，用来自定义渲染日期单元格，返回内容会被追加到单元格 | function(date: moment) | — | — |
| dateFullCellRender | 作用域插槽，自定义渲染日期单元格，返回内容覆盖单元格 | function(date: moment) | - | - |
| defaultValue | ƒ默认展示的日期 | moment | - | - |
| disabledDate | 不可选择的日期| (currentDate: moment) => boolean | — | - |
| fullscreen | 是否全屏显示 | boolean | — | true |
| locale | 国际化配置 | Object | — | - |
| mode | 初始模式，month/year | string | - | - |
| monthCellRender | 作用域插槽，自定义渲染月单元格，返回内容会被追加到单元格 | function(date: moment) | — | - |
| monthCellRender | 作用域插槽，自定义渲染月单元格，返回内容覆盖单元格 | function(date: moment) | — | - |
| validRange | 设置可以显示的日期 | [moment, moment] | — | - |
| value(v-model) | 展示日期 | moment | — | - |
| headerRender | 自定义头部内容 | function(object:{value: moment, type: string, onChange: f(), onTypeChange: f()})/ slot-scope | — | - |
| valueFormat | 可选，绑定值的格式，对 value、defaultValue 起作用。不指定则绑定值为 moment 对象 | string | — | - |\n
| 事件 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| panelChange | 日期面板变化回调 | function(date: moment | string, mode: string) |
| select | 点击选择日期回调 | function(date: moment | string） |
| change | 日期变化时的回调, 面板变化有可能导致日期变化。 | function(date: moment | string） |\n
`,
    "a-card": `[antd-design-vue :https://www.antdv.com/components/card-cn/](https://www.antdv.com/components/card-cn/) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| actions | 卡片操作组，位置在卡片底部 | slots | — | — |
| activeTabKey | 当前激活页签的 key | string | - | - |
| headStyle | 自定义标题区域样式 | Object | - | - |
| bodyStyle | 内容区域自定义样式 | Object | — | - |
| bordered | 是否有边框 | boolean | — | true |
| cover | 卡片封面 | slot | — | - |
| defaultActiveTabKey | 初始化选中页签的 key，如果没有设置 activeTabKey | string | - | 第一个页签 |
| extra | 卡片右上角的操作区域 | string/slot | — | - |
| hoverable | 鼠标移过时可浮起 | boolean | — | false |
| loading | 当卡片内容还在加载中时，可以用 loading 展示一个占位 | boolean | — | false |
| tabList | 页签标题列表, 可以通过 scopedSlots 属性自定义 tab | Array<{key: string, tab: any, scopedSlots: {tab: 'XXX'}}> | — | - |
| tabBarExtraContent | tab bar 上额外的元素 | slot | — | - |
| size | card 的尺寸 | string | default/small | default |
| title | 卡片标题 | string/slot | — | - |
| type | 卡片类型 | string | inner | - |\n
| 事件 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| tabChange | 页签切换的回调 | (key) => void |\n
`,
    "a-card-meta": `[antd-design-vue :https://www.antdv.com/components/card-cn/#components-card-demo-grid-card](https://www.antdv.com/components/card-cn/#components-card-demo-grid-card) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| avatar | 头像/图标 | slot | — | — |
| description | 描述内容 | string/slot | - | - |
| title | 标题内容 | string/slot | - | - |`,
    "a-carousel": `[antd-design-vue :https://www.antdv.com/components/carousel-cn/](https://www.antdv.com/components/carousel-cn/) \n
carousel旋转木马，一组轮播的区域。\n
## 何时使用\n
- 当有一组平级的内容。\n
- 当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。\n
- 常用于一组图片或卡片轮播。\n

## API\n

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| afterChange | 切换面板的回调 | function(current) | 无 |  |
| autoplay | 是否自动切换 | boolean | false |  |
| beforeChange | 切换面板的回调 | function(from, to) | 无 |  |
| dotPosition | 面板指示点位置，可选 'top' bottom left right | string | bottom | 1.5.0 |
| dots | 是否显示面板指示点 | boolean | true |  |
| dotsClass | 面板指示点类名 | string | slick - dots |  |
| easing | 动画效果 | string | linear |  |
| effect | 动画效果函数，可取 scrollx, fade | string | scrollx |  |

## 方法\n

| 名称                           | 描述                                              | 版本 |
| :----------------------------- | :------------------------------------------------ | :--- |
| goTo(slideNumber, dontAnimate) | 切换到指定面板, dontAnimate = true 时，不使用动画 |      |
| next()                         | 切换到下一面板                                    |      |
| prev()                         | 切换到上一面板                                    |      |
`,
    "a-collapse": `[antd-design-vue :https://www.antdv.com/components/collapse-cn/](https://www.antdv.com/components/collapse-cn/) \n
可以折叠/展开的内容区域。\n

## 何时使用\n

- 对复杂区域进行分组和隐藏，保持页面的整洁。\n
- '手风琴' 是一种特殊的折叠面板，只允许单个内容区域展开。\n

## API

### Collapse

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| activeKey(v-model) | 当前激活 tab 面板的 key | string\[],string | 默认无，accordion 模式下默认第一个元素 |  |
| bordered | 带边框风格的折叠面板 | boolean | 'true' |  |
| collapsible | 所有子面板是否可折叠或指定可折叠触发区域 | 'header' , 'disabled' | - | 3.0 |
| accordion | 手风琴模式 | boolean | 'false' |  |
| expandIcon | 自定义切换图标 | Function(props):VNode , slot="expandIcon" slot-scope="props",#expandIcon="props" |  |
| expandIconPosition | 设置图标位置： 'left', 'right' | 'left' | - | 1.5.0 |
| ghost | 使折叠面板透明且无边框 | boolean | false | 3.0 |
| destroyInactivePanel | 销毁折叠隐藏的面板 | boolean | 'false' |  |

### 事件

| 事件名称 | 说明           | 回调参数      | 版本 |
| :------- | :------------- | :------------ | :--- |
| change   | 切换面板的回调 | function(key) |      |
`,
    "a-collapse-panel": `[antd-design-vue :https://www.antdv.com/components/collapse-cn/](https://www.antdv.com/components/collapse-cn/) \n
| 参数        | 说明                           | 类型                   | 默认值 | 版本  |
| :---------- | :----------------------------- | :--------------------- | :----- | :---- |
| collapsible | 是否可折叠或指定可折叠触发区域 | 'header' , 'disabled' | -      | 3.0   |
| forceRender | 被隐藏时是否渲染 DOM 结构      | boolean                | false  |       |
| header      | 面板头内容                     | string,slot           | 无     |       |
| key         | 对应 activeKey                 | string , number       | 无     |       |
| showArrow   | 是否展示当前面板上的箭头       | boolean                | 'true' |       |
| extra       | 自定义渲染每个面板右上角的内容 | VNode , slot          | -      | 1.5.0 |
`,
    "a-comment": `[antd-design-vue :https://www.antdv.com/components/comment-cn//](https://www.antdv.com/components/comment-cn/) \n
对网站内容的反馈、评价和讨论。

## 何时使用

评论组件可用于对事物的讨论，例如页面、博客文章、问题等等。

## API

| Property | Description                                            | Type         | Default |
| :------- | :----------------------------------------------------- | :----------- | :------ |
| actions  | 在评论内容下面呈现的操作项列表                         | Array,slot  | -       |
| author   | 要显示为注释作者的元素                                 | string,slot | -       |
| avatar   | 要显示为评论头像的元素 - 通常是 antd 'Avatar' 或者 src | string,slot | -       |
| content  | 评论的主要内容                                         | string,slot | -       |
| datetime | 展示时间描述   
`,
    "a-descriptions": `[antd-design-vue :https://www.antdv.com/components/descriptions-cn/](https://www.antdv.com/components/descriptions-cn/) \n
成组展示多个只读字段。

## 何时使用

常见于详情页的信息展示。

## API

### Descriptions props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :--- | :--- | :--- | :--- | :--- | :-- | :-- |
| bordered | 是否展示边框 | boolean | false |  |
| colon | 配置 'Descriptions.Item' 的 'colon' 的默认值 | boolean | true |  |
| column | 一行的 'DescriptionItems' 数量，可以写成像素值或支持响应式的对象写法 '{ xs: 8, sm: 16, md: 24}' | number | 3 |  |
| layout | 描述布局 | 'horizontal | vertical' | 'horizontal' |  |
| size | 设置列表的大小。可以设置为 'middle' 、'small', 或不填（只有设置 'bordered={true}' 生效） | 'default | middle | small' | 'default' |  |
| title | 描述列表的标题，显示在最顶部 | string , VNode , slot | - |  |
`,
    "a-descriptions-item": `[antd-design-vue :https://www.antdv.com/components/descriptions-cn/](https://www.antdv.com/components/descriptions-cn/) \n
| 参数         | 说明           | 类型                    | 默认值 | 版本  |
| :------------ | :------------- | :---------------------- | :----- | :---- |
| label        | 内容的描述     | string , VNode , slot | -      |
| span         | 包含列的数量   | number                  | 1      |

> span 是 Descriptions.Item 的数量。 span={2} 会占用两个 DescriptionsItem 的宽度。
`,
    "a-empty": `[antd-design-vue :https://www.antdv.com/components/empty-cn/](https://www.antdv.com/components/empty-cn/) \n

## 何时使用

- 当目前没有数据时，用于显式的用户提示。
- 初始化场景时的引导创建流程。

## API

| 参数        | 说明                                         | 类型             | 默认值 | 版本 |
| :----------- | :-------------------------------------------- | :---------------- | :------ | :--- |
| description | 自定义描述内容                               | string , v-slot | -      |      |
| imageStyle  | 图片样式                                     | CSSProperties    | -      |      |
| image       | 设置显示图片，为 string 时表示自定义图片地址 | string , v-slot | false  |      |
`,
    "a-list": `[antd-design-vue :https://www.antdv.com/components/list-cn/](https://www.antdv.com/components/list-cn/) \n
通用列表。

## 何时使用

最基础的列表展示，可承载文字、列表、图片、段落，常用于后台数据展示页面。

## API

### List

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| bordered | 是否展示边框 | boolean | false |  |
| footer | 列表底部 | string,slot | - |  |
| grid | 列表栅格配置 | object | - |  |
| header | 列表头部 | string,slot | - |  |
| itemLayout | 设置 'List.Item' 布局, 设置成 'vertical' 则竖直样式显示, 默认横排 | string | - |  |
| loading | 当卡片内容还在加载中时，可以用 'loading' 展示一个占位 | boolean,[object](https://www.antdv.com/components/spin-cn/#API) | false |  |
| loadMore | 加载更多 | string,slot | - |  |
| locale | 默认文案设置，目前包括空数据文案 | object | emptyText: '暂无数据' |  |
| pagination | 对应的 'pagination' [配置](https://www.antdv.com/components/pagination-cn/#API), 设置 'false' 不显示 | boolean,object | false |  |
| size | list 的尺寸 | 'default' , 'middle' , 'small' | 'default' |  |
| split | 是否展示分割线 | boolean | true |  |
| dataSource | 列表数据源 | any[] | - | 1.5.0 |
| renderItem | 自定义'Item'函数，也可使用 #renderItem="{item, index}" | ({item, index}) => vNode |  | - |  |
| rowKey | 各项 key 的取值，可以是字符串或一个函数 | item => string,number |  |  |

### pagination

分页的配置项。

| 参数     | 说明               | 类型                        | 默认值   |
| :------- | :----------------- | :-------------------------- | :------- |
| position | 指定分页显示的位置 | 'top' , 'bottom' , 'both' | 'bottom' |

更多配置项，请查看 ['Pagination'](https://www.antdv.com/components/pagination-cn/#API)。 
### List grid
| 参数   | 说明                 | 类型                                     | 默认值 | 版本 |
| :----- | :------------------- | :--------------------------------------- | :----- | :--- |
| column | 列数                 | number oneOf [ 1, 2, 3, 4, 6, 8, 12, 24] | -      |      |
| gutter | 栅格间隔             | number                                   | 0      |      |
| xs     | '<576px' 展示的列数  | number                                   | -      |      |
| sm     | '≥576px' 展示的列数  | number                                   | -      |      |
| md     | '≥768px' 展示的列数  | number                                   | -      |      |
| lg     | '≥992px' 展示的列数  | number                                   | -      |      |
| xl     | '≥1200px' 展示的列数 | number                                   | -      |      |
| xxl    | '≥1600px' 展示的列数 | number                                   | -      |      |
| xxxl   | '≥2000px' 展示的列数 | number                                   | -      | 3.0  |

`,
    "a-list-item": `[antd-design-vue :https://www.antdv.com/components/list-cn/](https://www.antdv.com/components/list-cn/) \n
| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| actions | 列表操作组，根据 'itemLayout' 的不同, 位置在卡片底部或者最右侧 | Array\<vNode>/ | slot | - |
| extra | 额外内容, 通常用在 'itemLayout' 为 'vertical' 的情况下, 展示右侧内容; 'horizontal' 展示在列表元素最右侧 | string,slot | - |    
`,
    "a-list-item-meta": `[antd-design-vue :https://www.antdv.com/components/list-cn/](https://www.antdv.com/components/list-cn/) \n
| 参数        | 说明               | 类型         | 默认值 |
| :---------- | :----------------- | :----------- | :----- |
| avatar      | 列表元素的图标     | slot         | -      |
| description | 列表元素的描述内容 | string,slot | -      |
| title       | 列表元素的标题     | string,slot | -      | 
`,
    "a-popover": `[antd-design-vue :https://www.antdv.com/components/popover-cn/](https://www.antdv.com/components/popover-cn/) \n

点击/鼠标移入元素，弹出气泡式的卡片浮层。

## 何时使用

当目标元素有进一步的描述和相关操作时，可以收纳到卡片中，根据用户的操作行为进行展现。

和 'Tooltip' 的区别是，用户可以对浮层上的元素进行操作，因此它可以承载更复杂的内容，比如链接或按钮等。

## API

| 参数    | 说明     | 类型                | 默认值 | 版本 |
| :------ | :------- | :------------------ | :----- | :--- |
| content | 卡片内容 | string,slot,VNode | -      |      |
| title   | 卡片标题 | string,slot,VNode | -      |      |

更多属性请参考 [Tooltip](/components/tooltip-cn/#API)。

## 注意

请确保 'Popover' 的子元素能接受 'mouseenter'、'mouseleave'、'focus'、'click' 事件。
`,
    "a-statistic": `[antd-design-vue :https://www.antdv.com/components/statistic-cn/](https://www.antdv.com/components/statistic-cn/) \n
展示统计数值。

## 何时使用

- 当需要突出某个或某组数字时
- 当需要展示带描述的统计类数据时使用

## API

### Statistic

| 参数             | 说明             | 类型                         | 默认值 |
| :--------------- | :--------------- | :--------------------------- | :----- |
| decimalSeparator | 设置小数点       | string                       | .      |
| formatter        | 自定义数值展示   | v-slot , ({value}) => VNode | -      |
| groupSeparator   | 设置千分位标识符 | string                       | ,      |
| precision        | 数值精度         | number                       | -      |
| prefix           | 设置数值的前缀   | string , v-slot             | -      |
| suffix           | 设置数值的后缀   | string , v-slot             | -      |
| title            | 数值的标题       | string , v-slot             | -      |
| value            | 数值内容         | string , number             | -      |
| valueStyle       | 设置数值的样式   | style                        | -      | 
`,
    "a-statistic-countdown": `[antd-design-vue :https://www.antdv.com/components/statistic-cn/](https://www.antdv.com/components/statistic-cn/) \n
   
| 参数       | 说明                                                | 类型             | 默认值     |
| :--------- | :-------------------------------------------------- | :--------------- | :--------- |
| format     | 格式化倒计时展示，参考 [dayjs](https://day.js.org/) | string           | 'HH:mm:ss' |
| prefix     | 设置数值的前缀                                      | string , v-slot | -          |
| suffix     | 设置数值的后缀                                      | string , v-slot | -          |
| title      | 数值的标题                                          | string , v-slot | -          |
| value      | 数值内容                                            | number , dayjs  | -          |
| valueStyle | 设置数值的样式                                      | style            | -          |
#### Statistic.Countdown 事件

| 事件名称 | 说明             | 回调参数   |
| :------- | :--------------- | :--------- |
| finish   | 倒计时完成时触发 | () => void |
`,
    "a-table": `[antd-design-vue :https://www.antdv.com/components/table-cn/](https://www.antdv.com/components/table-cn/) \n

    展示行列数据。
  
    ## 何时使用
    
    - 当有大量结构化的数据需要展现时；
    - 当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时。
    ### Table
    
    | 参数 | 说明 | 类型 | 默认值 | 版本 |
    | :--- | :--- | :--- | :--- | :--- |
    | bordered | 是否展示外边框和列边框 | boolean | false |  |
    | columns | 表格列的配置描述，具体项见[下表](#Column) | array | - |  |
    | components | 覆盖默认的 table 元素 | object | - |  |
    | childrenColumnName | 指定树形结构的列名 | string | 'children' |  |
    | dataSource | 数据数组 | object\[] |  |  |
    | defaultExpandAllRows | 初始时，是否展开所有行 | boolean | false |  |
    | defaultExpandedRowKeys | 默认展开的行 | string\[] | - |  |
    | expandedRowKeys | 展开的行，控制属性 | string\[] | - |  |
    | expandedRowRender | 额外的展开行 | Function(record, index, indent, expanded):VNode , v-slot:expandedRowRender="{record, index, indent, expanded}" | - |  |
    | expandIcon | 自定义展开图标 | Function(props):VNode , v-slot:expandIcon="props" | - |  |
    | expandRowByClick | 通过点击行来展开子行 | boolean | 'false' |  |
    | expandIconColumnIndex | 自定义展开按钮的列顺序，'-1' 时不展示 | number | - |  |
    | footer | 表格尾部 | Function(currentPageData),v-slot:footer="currentPageData" |  |  |
    | getPopupContainer | 设置表格内各类浮层的渲染节点，如筛选菜单 | (triggerNode) => HTMLElement | '() => TableHtmlElement' | 1.5.0 |
    | loading | 页面是否加载中 | boolean,[object](/components/spin-cn) | false |  |
    | locale | 默认文案设置，目前包括排序、过滤、空数据文案 | object | filterConfirm: '确定' <br> filterReset: '重置' <br> emptyText: '暂无数据' |  |
    | pagination | 分页器，参考[配置项](#pagination)或 [pagination](/components/pagination-cn/)文档，设为 false 时不展示和进行分页 | object |  |  |
    | rowClassName | 表格行的类名 | Function(record, index):string | - |  |
    | rowKey | 表格行 key 的取值，可以是字符串或一个函数 | string,Function(record):string | 'key' |  |
    | rowSelection | 列表项是否可选择，[配置项](#rowSelection) | object | null |  |
    | scroll | 表格是否可滚动，也可以指定滚动区域的宽、高，[配置项](#scroll) | object | - |  |
    | showHeader | 是否显示表头 | boolean | true |  |
    | size | 表格大小 | default , middle , small | default |  |
    | sortDirections | 支持的排序方式，取值为 'ascend' 'descend' | Array | \['ascend', 'descend'] |  |
    | tableLayout | 表格元素的 [table-layout](https://developer.mozilla.org/zh-CN/docs/Web/CSS/table-layout) 属性，设为 'fixed' 表示内容不会影响列的布局 | - , 'auto' , 'fixed' | 无<hr />固定表头/列或使用了 'column.ellipsis' 时，默认值为 'fixed' | 1.5.0 |
    | title | 表格标题 | Function(currentPageData),v-slot:title="currentPageData" |  |  |
    | indentSize | 展示树形数据时，每层缩进的宽度，以 px 为单位 | number | 15 |  |
    | customHeaderRow | 设置头部行属性 | Function(columns, index) | - |  |
    | customRow | 设置行属性 | Function(record, index) | - |  |
    | transformCellText | 数据渲染前可以再次改变，一般用于空数据的默认配置，可以通过 [ConfigProvider](/components/config-provider-cn/) 全局统一配置 | Function({ text, column, record, index }) => any，此处的 text 是经过其它定义单元格 api 处理后的数据，有可能是 VNode , string , number 类型 | - | 1.5.4 |
    
    - 'expandFixed'
      - 当设置为 true 或 'left' 且 'expandIconColumnIndex' 未设置或为 0 时，开启固定
      - 当设置为 true 或 'right' 且 'expandIconColumnIndex' 设置为表格列数时，开启固定

      ### rowSelection

      选择功能的配置。
      
      | 参数 | 说明 | 类型 | 默认值 | 版本 |
      | :--- | :--- | :--- | :--- | :--- |
      | columnWidth | 自定义列表选择框宽度 | string,number | - |  |
      | columnTitle | 自定义列表选择框标题 | string,VNode | - |  |
      | fixed | 把选择框列固定在左边 | boolean | - |  |
      | getCheckboxProps | 选择框的默认属性配置 | Function(record) | - |  |
      | hideDefaultSelections | 去掉『全选』『反选』两个默认选项 | boolean | false |
      | selectedRowKeys | 指定选中项的 key 数组，需要和 onChange 进行配合 | string\[] | \[] |
      | selections | 自定义选择项 [配置项](#selection), 设为 'true' 时使用默认选择项 | object\[] , boolean | true |  |
      | type | 多选/单选，'checkbox' or 'radio' | string | 'checkbox' |
      | onChange | 选中项发生变化时的回调 | Function(selectedRowKeys, selectedRows) | - |
      | onSelect | 用户手动选择/取消选择某列的回调 | Function(record, selected, selectedRows, nativeEvent) | - |
      | onSelectAll | 用户手动选择/取消选择所有列的回调 | Function(selected, selectedRows, changeRows) | - |
      | onSelectInvert | 用户手动选择反选的回调 | Function(selectedRows) | - |
        ### scroll

        | 参数 | 说明 | 类型 | 默认值 |
        | :-- | :-- | :-- | :-- |
        | scrollToFirstRowOnChange | 当分页、排序、筛选变化后是否滚动到表格顶部 | boolean | - |
        | x | 设置横向滚动，也可用于指定滚动区域的宽，可以设置为像素值，百分比，true 和 ['max-content'](https://developer.mozilla.org/zh-CN/docs/Web/CSS/width#max-content) | string , number , true | - |
        | y | 设置纵向滚动，也可用于指定滚动区域的高，可以设置为像素值 | string , number | - |

        ### selection

        自定义选择配置项

        | 参数     | 说明                     | 类型                        | 默认值 |
        | :------- | :----------------------- | :-------------------------- | :----- |
        | key      | Vue 需要的 key，建议设置 | string                      | -      |
        | text     | 选择项显示的文字         | string,VNode               | -      |
        | onSelect | 选择项点击回调           | Function(changeableRowKeys) | -      |
            
    ### 事件
    
    | 事件名称 | 说明 | 回调参数 |
    | :-- | :-- | :-- |
    | expandedRowsChange | 展开的行变化时触发 | Function(expandedRows) |
    | change | 分页、排序、筛选变化时触发 | Function(pagination, filters, sorter, { currentDataSource }) |
    | expand | 点击展开图标时触发 | Function(expanded, record) |
    | resizeColumn | 拖动列时触发 | Function(width, column) |
       
    ## 如何使用
    
    指定表格的数据源 'dataSource' 为一个数组。
    
    '''html
    <template>
      <a-table :dataSource="dataSource" :columns="columns" />
    </template>
    <script>
      export default {
        setup() {
          return {
            dataSource: [
              {
                key: '1',
                name: '胡彦斌',
                age: 32,
                address: '西湖区湖底公园1号',
              },
              {
                key: '2',
                name: '胡彦祖',
                age: 42,
                address: '西湖区湖底公园1号',
              },
            ],
    
            columns: [
              {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
              },
              {
                title: '年龄',
                dataIndex: 'age',
                key: 'age',
              },
              {
                title: '住址',
                dataIndex: 'address',
                key: 'address',
              },
            ],
          };
        },
      };
    </script>
    '''
    #### customRow 用法

适用于 'customRow' 'customHeaderRow' 'customCell' 'customHeaderCell'。遵循[Vue jsx](https://github.com/vuejs/babel-plugin-transform-vue-jsx)语法。

'''jsx
<Table
  customRow={(record) => {
    return {
      xxx... //属性
      onClick: (event) => {},       // 点击行
      onDblclick: (event) => {},
      onContextmenu: (event) => {},
      onMouseenter: (event) => {},  // 鼠标移入行
      onMouseleave: (event) => {}
    };
  }}
  customHeaderRow={(columns, index) => {
    return {
      onClick: () => {},        // 点击表头行
    };
  }}
/>
'''
    `,
    "a-table-column": `[antd-design-vue :https://www.antdv.com/components/table-cn/#Column](https://www.antdv.com/components/table-cn/#Column) \n

    列描述数据对象，是 columns 中的一项，Column 使用相同的 API。

    | 参数 | 说明 | 类型 | 默认值 | 版本 |
    | :--- | :--- | :--- | :--- | :--- |
    | align | 设置列的对齐方式 | 'left' , 'right' , 'center' | 'left' |  |
    | colSpan | 表头列合并,设置为 0 时，不渲染 | number |  |  |
    | dataIndex | 列数据在数据项中对应的路径，支持通过数组查询嵌套路径 | string , string\[] | - |  |
    | defaultFilteredValue | 默认筛选值 | string\[] | - | 1.5.0 |
    | defaultSortOrder | 默认排序顺序 | 'ascend' , 'descend' | - |  |
    | filterDropdown | 可以自定义筛选菜单，此函数只负责渲染图层，需要自行编写各种交互 | VNode | - |  | 
    | filterDropdownVisible | 用于控制自定义筛选菜单是否可见 | boolean | - |  |
    | filtered | 标识数据是否经过过滤，筛选图标会高亮 | boolean | false |  |
    | filteredValue | 筛选的受控属性，外界可用此控制列的筛选状态，值为已筛选的 value 数组 | string\[] | - |  |
    | filterIcon | 自定义 filter 图标。 | VNode , ({filtered: boolean, column: Column}) => vNode | false |  |
    | filterMultiple | 是否多选 | boolean | true |  |
    | filters | 表头的筛选菜单项 | object\[] | - |  |
    | fixed | 列是否固定，可选 'true'(等效于 left) ''left'' ''right'' | boolean,string | false |  |
    | key | Vue 需要的 key，如果已经设置了唯一的 'dataIndex'，可以忽略这个属性 | string | - |  |
    | customRender | 生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引，@return 里面可以设置表格行/列合并,可参考 demo 表格行/列合并 | Function({text, record, index, column}) {} | - |  |
    | showSorterTooltip | 表头显示下一次排序的 tooltip 提示, 覆盖 table 中 'showSorterTooltip' | boolean , [Tooltip props](/components/tooltip/#API) | true |  |
    | sorter | 排序函数，本地排序使用一个函数(参考 [Array.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) 的 compareFunction)，需要服务端排序可设为 true | Function,boolean | - |  |
    | sortOrder | 排序的受控属性，外界可用此控制列的排序，可设置为 ''ascend'' ''descend'' 'false' | boolean,string | - |  |
    | sortDirections | 支持的排序方式，取值为 ''ascend'' ''descend'' | Array | '['ascend', 'descend']' | 1.5.0 |
    | title | 列头显示文字 | string | - |  |
    | width | 列宽度 | string,number | - |  |
    | customHeaderCell | 设置头部单元格属性 | Function(column) | - |  |
    | onFilter | 本地模式下，确定筛选的运行函数, 使用 template 或 jsx 时作为'filter'事件使用 | Function | - |  |
    | onFilterDropdownVisibleChange | 自定义筛选菜单可见变化时调用，使用 template 或 jsx 时作为'filterDropdownVisibleChange'事件使用 | function(visible) {} | - |  |
    | slots | 使用 columns 时，可以通过该属性配置支持 slot 的属性，如 slots: { filterIcon: 'XXX'} | object | - |  |
    | scopedSlots | 使用 columns 时，可以通过该属性配置支持 slot-scope 的属性，如 scopedSlots: { customRender: 'XXX'} | object | - |  |
`,
    "a-tabs": `[antd-design-vue :https://www.antdv.com/components/tabs-cn/](https://www.antdv.com/components/tabs-cn/) \n

选项卡切换组件。

## 何时使用

提供平级的区域将大块内容进行收纳和展现，保持界面整洁。

Ant Design 依次提供了三级选项卡，分别用于不同的场景。

- 卡片式的页签，提供可关闭的样式，常用于容器顶部。
- 标准线条式页签，用于容器内部的主功能切换，这是最常用的 Tabs。
- [RadioButton](/ant-design/components/radio-cn/) 可作为更次级的页签来使用。

## API

### Tabs

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :--- | :--- | :--- | :--- | :--- | :-- |
| activeKey(v-model) | 当前激活 tab 面板的 key | string | 无 |  |
| animated | 是否使用动画切换 Tabs，在 'tabPosition=top | bottom' 时有效 | boolean , {inkBar:boolean, tabPane:boolean} | true, 当 type="card" 时为 false |  |
| hideAdd | 是否隐藏加号图标，在 'type="editable-card"' 时有效 | boolean | false |  |
| size | 大小，提供 'large' 'default' 和 'small' 三种大小 | string | 'default' |  |
| tabBarStyle | tab bar 的样式对象 | object | - |  |
| tabPosition | 页签位置，可选值有 'top' 'right' 'bottom' 'left' | string | 'top' |  |
| type | 页签的基本样式，可选 'line'、'card' 'editable-card' 类型 | string | 'line' |  |
| tabBarGutter | tabs 之间的间隙 | number | 无 |  |

### Tabs 插槽

| 插槽名称     | 说明                            | 参数              |
| :----------- | :------------------------------ | :---------------- | :-- |
| renderTabBar | 替换 TabBar，用于二次封装标签头 | { DefaultTabBar } |     |
| leftExtra    | tab bar 上左侧额外的元素        | -                 | -   |
| rightExtra   | tab bar 上右侧额外的元素        | -                 | -   |
| addIcon      | 自定义添加按钮                  | -                 | -   |
| moreIcon     | 自定义折叠 icon                 | -                 | -   |

### Tabs 事件

| 事件名称 | 说明 | 回调参数 |
| :-- | :-- | :-- |
| change | 切换面板的回调 | Function(activeKey) {} |
| edit | 新增和删除页签的回调，在 'type="editable-card"' 时有效 | (targetKey, action): void |
| tabScroll | 滚动 TabBar 是触发 | { direction: 'left' , 'right' , 'top' , 'bottom' } |
| tabClick | tab 被点击的回调 | Function |

`,
    "a-tab-pane": `[antd-design-vue :https://www.antdv.com/components/tabs-cn/](https://www.antdv.com/components/tabs-cn/) \n

| 参数        | 说明                      | 类型         | 默认值 |
| :---------- | :------------------------ | :----------- | :----- |
| forceRender | 被隐藏时是否渲染 DOM 结构 | boolean      | false  |
| key         | 对应 activeKey            | string       | 无     |
| tab         | 选项卡头显示文字          | string,slot | 无     |

### Tabs.TabPane 插槽

| 插槽名称  | 说明                                            | 参数 |
| :-------- | :---------------------------------------------- | :--- |
| closeIcon | 自定义关闭图标，'在 type="editable-card"'时有效 | -    |
| tab       | 选项卡头显示文字                                | -    |

`,
    "a-tag": `[antd-design-vue :https://www.antdv.com/components/tag-cn/](https://www.antdv.com/components/tag-cn/) \n

进行标记和分类的小标签。

## 何时使用

- 用于标记事物的属性和维度。
- 进行分类。

## API

### Tag

| 参数             | 说明             | 类型                | 默认值 | 版本  |
| :--------------- | :--------------- | :------------------ | :----- | :---- |
| closable         | 标签是否可以关闭 | boolean             | false  |       |
| color            | 标签色           | string              | -      |       |
| visible(v-model) | 是否显示标签     | boolean             | 'true' |       |

### 事件

| 事件名称 | 说明         | 回调参数    |
| :------- | :----------- | :---------- |
| close    | 关闭时的回调 | (e) => void |
`,
    "a-checkable-tag": `[antd-design-vue :https://www.antdv.com/components/tag-cn/#components-tag-demo-basic-usage](https://www.antdv.com/components/tag-cn/#components-tag-demo-basic-usage) \n

| 参数             | 说明               | 类型    | 默认值 |
| :--------------- | :----------------- | :------ | :----- |
| checked(v-model) | 设置标签的选中状态 | boolean | false  |

### 事件

| 事件名称 | 说明                 | 回调参数          |
| :------- | :------------------- | :---------------- |
| change   | 点击标签时触发的回调 | (checked) => void |
`,
    "a-timeline": `[antd-design-vue :https://www.antdv.com/components/timeline-cn/](https://www.antdv.com/components/timeline-cn/) \n

垂直展示的时间流信息。

## 何时使用

- 当有一系列信息需按时间排列时，可正序和倒序。
- 需要有一条时间轴进行视觉上的串联时。

## API
时间轴。

| 参数 | 说明 | 类型 | 默认值 |
| :-- | :-- | :-- | :-- |
| pending | 指定最后一个幽灵节点是否存在或内容 | boolean,string,slot | false |
| pendingDot | 当最后一个幽灵节点存在時，指定其时间图点 | string,slot | '<LoadingOutlined />' |
| reverse | 节点排序 | boolean | false |
| mode | 通过设置 'mode' 可以改变时间轴和内容的相对位置 | 'left' , 'alternate' , 'right' |

'''html
<a-timeline>
  <a-timeline-item>创建服务现场 2015-09-01</a-timeline-item>
  <a-timeline-item>初步排除网络异常 2015-09-01</a-timeline-item>
  <a-timeline-item>技术测试异常 2015-09-01</a-timeline-item>
  <a-timeline-item>网络异常正在修复 2015-09-01</a-timeline-item>
</a-timeline>
'''

`,
    "a-timeline-item": `[antd-design-vue :https://www.antdv.com/components/timeline-cn/](https://www.antdv.com/components/timeline-cn/) \n

| 参数     | 说明                                            | 类型              | 默认值 | 版本 |
| :------- | :---------------------------------------------- | :---------------- | :----- | :--- |
| color    | 指定圆圈颜色 'blue, red, green'，或自定义的色值 | string            | blue   |      |
| dot      | 自定义时间轴点                                  | string,slot      | -      |      |
| position | 自定义节点位置                                  | 'left' , 'right' | -      |      |

`,
    "a-tooltip": `[antd-design-vue :https://www.antdv.com/components/tooltip-cn/](https://www.antdv.com/components/tooltip-cn/) \n

警告提示，展现需要关注的信息。

## 何时使用

- 当某个页面需要向用户显示警告的信息时。
- 非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。

## API

| 参数  | 说明     | 类型         | 默认值 |
| :---- | :------- | :----------- | :----- |
| title | 提示文字 | string,slot | 无     |

### 共同的 API

以下 API 为 Tooltip、Popconfirm、Popover 共享的 API。

| 参数 | 说明 | 类型 | 默认值 |
| :-- | :-- | :-- | :-- |
| arrowPointAtCenter | 箭头是否指向目标元素中心 | boolean | 'false' |
| autoAdjustOverflow | 气泡被遮挡时自动调整位置 | boolean | 'true' |
| color | 背景颜色 | string | 无 |
| defaultVisible | 默认是否显隐 | boolean | false |
| getPopupContainer | 浮层渲染父节点，默认渲染到 body 上 | Function(triggerNode) | () => document.body |
| mouseEnterDelay | 鼠标移入后延时多少才显示 Tooltip，单位：秒 | number | 0.1 |
| mouseLeaveDelay | 鼠标移出后延时多少才隐藏 Tooltip，单位：秒 | number | 0.1 |
| overlayClassName | 卡片类名 | string | 无 |
| overlayStyle | 卡片样式 | object | 无 |
| placement | 气泡框位置，可选 'top' 'left' 'right' 'bottom' 'topLeft' 'topRight' 'bottomLeft' 'bottomRight' 'leftTop' 'leftBottom' 'rightTop' 'rightBottom' | string | top |
| trigger | 触发行为，可选 'hover/focus/click/contextmenu' | string | hover |
| visible(v-model) | 用于手动控制浮层显隐 | boolean | false |
| destroyTooltipOnHide | 隐藏后是否销毁 tooltip | boolean | false |
| align | 该值将合并到 placement 的配置中，设置参考 [dom-align](https://github.com/yiminghe/dom-align) | Object | 无 |

### 事件

| 事件名称      | 说明           | 回调参数          |
| :------------ | :------------- | :---------------- |
| visibleChange | 显示隐藏的回调 | (visible) => void |

## 注意

请确保 'Tooltip' 的子元素能接受 'mouseenter'、'mouseleave'、'focus'、'click' 事件。

`,
    "a-tree": `[antd-design-vue :https://www.antdv.com/components/tree-cn/](https://www.antdv.com/components/tree-cn/) \n

多层次的结构列表。

## 何时使用

文件夹、组织架构、生物分类、国家地区等等，世间万物的大多数结构都是树形结构。使用'树控件'可以完整展现其中的层级关系，并具有展开收起选择等交互功能。

## API

### Tree props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :--- | :--- | :--- | :--- | :--- | :-- |
| blockNode | 是否节点占据一行 | boolean | false |  |
| treeData | treeNodes 数据，如果设置则不需要手动构造 TreeNode 节点（key 在整个树范围内唯一） | [TreeNode[]](#TreeNode) | -- |  |
| replaceFields | 替换 treeNode 中 title,key,children 字段为 treeData 中对应的字段 | object | {children:'children', title:'title', key:'key' } | - |
| autoExpandParent | 是否自动展开父节点 | boolean | true |  |
| checkable | 节点前添加 Checkbox 复选框 | boolean | false |  |
| checkedKeys(v-model) | （受控）选中复选框的树节点（注意：父子节点有关联，如果传入父节点 key，则子节点自动选中；相应当子节点 key 都传入，父节点也自动选中。当设置'checkable'和'checkStrictly'，它是一个有'checked'和'halfChecked'属性的对象，并且父子节点的选中与否不再关联 | string\[] , number\[] , {checked: string\[] , number\[], halfChecked: string\[] , number\[]} | \[] |  |
| checkStrictly | checkable 状态下节点选择完全受控（父子节点选中状态不再关联） | boolean | false |  |
| defaultExpandAll | 默认展开所有树节点, 如果是异步数据，需要在数据返回后再实例化，建议用 v-if="data.length"；当有 expandedKeys 时，defaultExpandAll 将失效 | boolean | false |  |
| disabled | 将树禁用 | bool | false |  |
| draggable | 设置节点可拖拽 | boolean | false |  |
| expandedKeys(v-model) | （受控）展开指定的树节点 | string\[] , number\[] | \[] |  |
| filterTreeNode | 按需筛选树节点（高亮），返回 true | function(node) | - |  |
| loadData | 异步加载数据 | function(node) | - |  |
| loadedKeys | （受控）已经加载的节点，需要配合 'loadData' 使用 | string\[] , number\[] | \[] |  |
| multiple | 支持点选多个节点（节点本身） | boolean | false |  |
| selectable | 是否可选中 | boolean | true |  |  |
| selectedKeys(v-model) | （受控）设置选中的树节点 | string\[] , number\[] | - |  |
| showIcon | 是否展示 TreeNode title 前的图标，没有默认样式，如设置为 true，需要自行定义图标相关样式 | boolean | false |  |
| switcherIcon | 自定义树节点的展开/折叠图标 | slot | - |  |
| showLine | 是否展示连接线 | boolean | false |  |
| title | 自定义标题 | slot |  | - |

### 事件

| 事件名称 | 说明 | 回调参数 |
| :-- | :-- | :-- |
| check | 点击复选框触发 | function(checkedKeys, e:{checked: bool, checkedNodes, node, event}) |
| dragend | dragend 触发时调用 | function({event, node}) |
| dragenter | dragenter 触发时调用 | function({event, node, expandedKeys}) |
| dragleave | dragleave 触发时调用 | function({event, node}) |
| dragover | dragover 触发时调用 | function({event, node}) |
| dragstart | 开始拖拽时调用 | function({event, node}) |
| drop | drop 触发时调用 | function({event, node, dragNode, dragNodesKeys}) |
| expand | 展开/收起节点时触发 | function(expandedKeys, {expanded: bool, node}) |
| load | 节点加载完毕时触发 | function(loadedKeys, {event, node}) |
| rightClick | 响应右键点击 | function({event, node}) |
| select | 点击树节点触发 | function(selectedKeys, e:{selected: bool, selectedNodes, node, event}) |

### TreeNode

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| class | 节点的 class | string | - |  |
| style | 节点的 style | string,object | - |  |
| checkable | 当树为 checkable 时，设置独立节点是否展示 Checkbox | boolean | - |  |
| disableCheckbox | 禁掉 checkbox | boolean | false |  |
| disabled | 禁掉响应 | boolean | false |  |
| icon | 自定义图标。可接收组件，props 为当前节点 props | slot,slot-scope | - |  |
| isLeaf | 设置为叶子节点(设置了'loadData'时有效) | boolean | false |  |
| key | 被树的 (default)ExpandedKeys / (default)CheckedKeys / (default)SelectedKeys 属性所用。注意：整个树范围内的所有节点的 key 值不能重复！ | string , number | 内部计算出的节点位置 |  |
| selectable | 设置节点是否可被选中 | boolean | true |  |
| title | 标题 | string | '---' |  |

### DirectoryTree props

| 参数         | 说明                                              | 类型   | 默认值 |
| :----------- | :------------------------------------------------ | :----- | :----- |
| expandAction | 目录展开逻辑，可选 'false' ''click'' ''dblclick'' | string | click  |

## FAQ

### 在 showLine 时，如何隐藏子节点图标？

文件图标通过 switcherIcon 来实现，如果不需要你可以覆盖对应的样式
`,
    "a-alert": `[antd-design-vue :https://www.antdv.com/components/alert-cn/](https://www.antdv.com/components/alert-cn/) \n
警告提示，展现需要关注的信息。

## 何时使用

- 当某个页面需要向用户显示警告的信息时。
- 非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| afterClose | 关闭动画结束后触发的回调函数 | () => void | - |  |
| banner | 是否用作顶部公告 | boolean | false |  |
| closable | 默认不显示关闭按钮 | boolean | 无 |  |
| closeText | 自定义关闭按钮 | string,slot | 无 |  |
| description | 警告提示的辅助性文字介绍 | string,slot | 无 |  |
| icon | 自定义图标，'showIcon' 为 'true' 时有效 | vnode,slot | - |  |
| message | 警告提示内容 | string,slot | 无 |  |
| showIcon | 是否显示辅助图标 | boolean | false,'banner' 模式下默认值为 true |  |
| type | 指定警告提示的样式，有四种选择 'success'、'info'、'warning'、'error' | string | 'info','banner' 模式下默认值为 'warning' |  |

### 事件

| 事件名称 | 说明                 | 回调参数                | 版本 |
| :------- | :------------------- | :---------------------- | :--- |
| close    | 关闭时触发的回调函数 | (e: MouseEvent) => void | -    |
`,
    "a-drawer": `[antd-design-vue :https://www.antdv.com/components/drawer-cn/](https://www.antdv.com/components/drawer-cn/) \n

    屏幕边缘滑出的浮层面板。

    ## 何时使用
    
    抽屉从父窗体边缘滑入，覆盖住部分父窗体内容。用户在抽屉内操作时不必离开当前任务，操作完成后，可以平滑地回到原任务。
    
    - 当需要一个附加的面板来控制父窗体内容，这个面板在需要时呼出。比如，控制界面展示样式，往界面中添加内容。
    - 当需要在当前任务流中插入临时任务，创建或预览附加内容。比如展示协议条款，创建子对象。
    
    ## API
    
    | 参数 | 说明 | 类型 | 默认值 | 版本 |
    | :--- | :--- | :--- | :--- | :--- |
    | closable | 是否显示右上角的关闭按钮 | boolean | true |  |
    | destroyOnClose | 关闭时销毁 Drawer 里的子元素 | boolean | false |  |
    | bodyStyle | 可用于设置 Drawer 内容部分的样式 | CSSProperties | - |  |
    | getContainer | 指定 Drawer 挂载的 HTML 节点 | HTMLElement , '() => HTMLElement' , Selectors | 'body' |  |
    | maskClosable | 点击蒙层是否允许关闭 | boolean | true |  |
    | mask | 是否展示遮罩 | Boolean | true |  |
    | maskStyle | 遮罩样式 | CSSProperties | {} |  |
    | title | 标题 | string , slot | - |  |
    | visible(v-model) | Drawer 是否可见 | boolean | - |  |
    | wrapClassName | 对话框外层容器的类名 | string | - |  |
    | wrapStyle | 可用于设置 Drawer 最外层容器的样式，和 drawerStyle 的区别是作用节点包括 mask | Object | - |  |
    | drawerStyle | 用于设置 Drawer 弹出层的样式 | object | - |  |
    | headerStyle | 用于设置 Drawer 头部的样式 | object | - |  |
    | bodyStyle | 可用于设置 Drawer 内容部分的样式 | object | - |  |
    | width | 宽度 | string , number | 378 |  |
    | height | 高度, 在 'placement' 为 'top' 或 'bottom' 时使用 | string , number | 378 |  |
    | zIndex | 设置 Drawer 的 'z-index' | Number | 1000 |  |
    | placement | 抽屉的方向 | 'top' , 'right' , 'bottom' , 'left' | 'right' |  |
    | handle | 设置后抽屉直接挂载到 DOM 上，你可以通过该 handle 控制抽屉打开关闭 | VNode , slot| - |  |
    | keyboard | 是否支持键盘 esc 关闭 | boolean | true |  |
    | afterVisibleChange | 切换抽屉时动画结束后的回调 | function(visible) | - |  |
    
    ## 事件
    
    | 名称               | 描述                                 | 类型              | 默认值 | 版本 |
    | :----------------- | :----------------------------------- | :---------------- | :----- | :--- |
    | close              | 点击遮罩层或右上角叉或取消按钮的回调 | function(e)       | 无     |      |
`,
    "a-modal": `[antd-design-vue :https://www.antdv.com/components/modal-cn/](https://www.antdv.com/components/modal-cn/) \n

模态对话框。

## 何时使用

需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 'Modal' 在当前页面正中打开一个浮层，承载相应的操作。

另外当需要一个简洁的确认框询问用户时，可以使用 'Modal.confirm()' 等语法糖方法。

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| afterClose | Modal 完全关闭后的回调 | function | 无 | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; |
| bodyStyle | Modal body 样式 | object | {} |  |
| cancelText | 取消按钮文字 | string, slot | 取消 |  |
| centered | 垂直居中展示 Modal | Boolean | 'false' |  |
| closable | 是否显示右上角的关闭按钮 | boolean | true |  |
| closeIcon | 自定义关闭图标 | VNode , slot | - |  |
| confirmLoading | 确定按钮 loading | boolean | 无 |  |
| destroyOnClose | 关闭时销毁 Modal 里的子元素 | boolean | false |  |
| footer | 底部内容，当不需要默认底部按钮时，可以设为 ':footer="null"' | string,slot | 确定取消按钮 |  |
| forceRender | 强制渲染 Modal | boolean | false |  |
| getContainer | 指定 Modal 挂载的 HTML 节点 | (instance): HTMLElement | () => document.body |  |
| keyboard | 是否支持键盘 esc 关闭 | boolean | true |  |
| mask | 是否展示遮罩 | Boolean | true |  |
| maskClosable | 点击蒙层是否允许关闭 | boolean | true |  |
| maskStyle | 遮罩样式 | object | {} |  |
| okText | 确认按钮文字 | string,slot | 确定 |  |
| okType | 确认按钮类型 | string | primary |  |
| okButtonProps | ok 按钮 props | [ButtonProps](/components/button/#API) | - |  |
| cancelButtonProps | cancel 按钮 props | [ButtonProps](/components/button/#API) | - |  |
| title | 标题 | string,slot | 无 |  |
| visible(v-model) | 对话框是否可见 | boolean | 无 |  |
| width | 宽度 | string,number | 520 |  |
| wrapClassName | 对话框外层容器的类名 | string | - |  |
| zIndex | 设置 Modal 的 'z-index' | Number | 1000 |  |
| dialogStyle | 可用于设置浮层的样式，调整浮层位置等 | object | - |  |
| dialogClass | 可用于设置浮层的类名 | string | - |  |

### 事件

| 事件名称 | 说明                                 | 回调参数    |
| :------- | :----------------------------------- | :---------- |
| cancel   | 点击遮罩层或右上角叉或取消按钮的回调 | function(e) |
| ok       | 点击确定回调                         | function(e) |
`,
    "a-popconfirm": `[antd-design-vue :https://www.antdv.com/components/popconfirm-cn/](https://www.antdv.com/components/popconfirm-cn/) \n

点击元素，弹出气泡式的确认框。

## 何时使用

目标元素的操作需要用户进一步的确认时，在目标元素附近弹出浮层提示，询问用户。和 'confirm' 弹出的全屏居中模态对话框相比，交互形式更轻量。

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| cancelButtonProps | cancel 按钮 props | [ButtonProps](/components/button/#API) | - |
| cancelText | 取消按钮文字 | string,slot | 取消 |  |
| okButtonProps | ok 按钮 props | [ButtonProps](/components/button/#API) | - |
| okText | 确认按钮文字 | string,slot | 确定 |  |
| okType | 确认按钮类型 | string | primary |  |
| title | 确认框的描述 | string,slot | 无 |  |
| visible (v-model) | 是否显示 | boolean | - |  |
| icon | 自定义弹出气泡 Icon 图标 | vNode | &lt;Icon type="exclamation-circle" /&gt; |  |
| disabled | 点击 Popconfirm 子元素是否弹出气泡确认框 | boolean | false |  |

### 事件

| 事件名称      | 说明           | 回调参数          |
| :------------ | :------------- | :---------------- |
| cancel        | 点击取消的回调 | function(e)       |
| confirm       | 点击确认的回调 | function(e)       |
| visibleChange | 显示隐藏的回调 | function(visible) |

更多属性请参考 [Tooltip](/components/tooltip-cn/#API)。

## 注意

请确保 'Popconfirm' 的子元素能接受 'mouseenter'、'mouseleave'、'focus'、'click' 事件。
`,
    "a-progress": `[antd-design-vue :https://www.antdv.com/components/progress-cn/](https://www.antdv.com/components/progress-cn/) \n

    展示操作的当前进度。

    ## 何时使用
    
    在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。
    
    - 当一个操作会打断当前界面，或者需要在后台运行，且耗时可能超过 2 秒时；
    - 当需要显示一个操作完成的百分比时。
    
    ## API
    
    各类型共用的属性。
    
    | 属性 | 说明 | 类型 | 默认值 |
    | :-- | :-- | :-- | :-- |
    | format | 内容的模板函数 | function(percent, successPercent) | (percent) => percent + '%' |
    | percent | 百分比 | number | 0 |
    | showInfo | 是否显示进度数值或状态图标 | boolean | true |
    | status | 状态，可选：'success' 'exception' 'normal' 'active'(仅限 line) | string | - |
    | strokeColor | 进度条的色彩 | string | - |
    | strokeLinecap | 进度条的样式 | 'round' , 'square' | 'round' |
    | success | 成功进度条相关配置 | { percent: number, strokeColor: string } | - |
    | trailColor | 未完成的分段的颜色 | string | - |
    | type | 类型，可选 'line' 'circle' 'dashboard' | string | 'line' |
    
    ### 'type="line"'
    
    | 属性 | 说明 | 类型 | 默认值 |
    | :-- | :-- | :-- | :-- |
    | steps | 进度条总共步数 | number | - |
    | strokeColor | 进度条的色彩，传入 object 时为渐变 | string , { from: string; to: string; direction: string } | - |
    | strokeWidth | 进度条线的宽度，单位 px | number | 10 |
    
    ### 'type="circle"'
    
    | 属性        | 说明                                             | 类型             | 默认值 |
    | :---------- | :----------------------------------------------- | :--------------- | :----- |
    | strokeColor | 圆形进度条线的色彩，传入 object 时为渐变         | string , object | -      |
    | strokeWidth | 圆形进度条线的宽度，单位是进度条画布宽度的百分比 | number           | 6      |
    | width       | 圆形进度条画布宽度，单位 px                      | number           | 132    |
    
    ### 'type="dashboard"'
    
    | 属性 | 说明 | 类型 | 默认值 |
    | :-- | :-- | :-- | :-- |
    | gapDegree | 仪表盘进度条缺口角度，可取值 0 ~ 295 | number | 75 |
    | gapPosition | 仪表盘进度条缺口位置 | 'top' , 'bottom' , 'left' , 'right' | 'bottom' |
    | strokeWidth | 仪表盘进度条线的宽度，单位是进度条画布宽度的百分比 | number | 6 |
    | width | 仪表盘进度条画布宽度，单位 px | number | 132 |
`,
    "a-result": `[antd-design-vue :https://www.antdv.com/components/result-cn/](https://www.antdv.com/components/result-cn/) \n

    用于反馈一系列操作任务的处理结果。

    ## 何时使用
    
    当有重要操作需告知用户处理结果，且反馈内容较为复杂时使用。
    
    ## API
    
    | 参数     | 说明                      | 类型                         | 默认值  |
    | :------- | :------------------------ | :--------------------------- | :------ | :----- | :-------- | :---- | :---- | :----- | :----- |
    | title    | title 文字                | string , VNode , #title    | -       |
    | subTitle | subTitle 文字             | string , VNode , #subTitle | -       |
    | status   | 结果的状态,决定图标和颜色 | ''success'                   | 'error' | 'info' | 'warning' | '404' | '403' | '500'' | 'info' |
    | icon     | 自定义 icon               | #icon                        | -       |
    | extra    | 操作区                    | #extra                       | -       | 
`,
    "a-skeleton": `[antd-design-vue :https://www.antdv.com/components/skeleton-cn/](https://www.antdv.com/components/skeleton-cn/) \n

在需要等待加载内容的位置提供一个占位图形组合。

## 何时使用

- 网络较慢，需要长时间等待加载处理的情况下。
- 图文信息内容较多的列表/卡片中。
- 只在第一次加载数据的时候使用。
- 可以被 Spin 完全代替，但是在可用的场景下可以比 Spin 提供更好的视觉效果和用户体验。

## API

### Skeleton

| 属性 | 说明 | 类型 | 默认值 |
| :-- | :-- | :-- | :-- |
| active | 是否展示动画效果 | boolean | false |
| avatar | 是否显示头像占位图 | boolean , [SkeletonAvatarProps](#SkeletonAvatarProps) | false |
| loading | 为 'true' 时，显示占位图。反之则直接展示子组件 | boolean | - |
| paragraph | 是否显示段落占位图 | boolean , [SkeletonParagraphProps](#SkeletonParagraphProps) | true |
| title | 是否显示标题占位图 | boolean , [SkeletonTitleProps](#SkeletonTitleProps) | true |

### SkeletonAvatarProps

| 属性  | 说明                 | 类型                                      | 默认值 |
| :---- | :------------------- | :---------------------------------------- | :----- |
| size  | 设置头像占位图的大小 | number , 'large' , 'small' , 'default' | -      |
| shape | 指定头像的形状       | 'circle' , 'square'                      | -      |

### SkeletonTitleProps

| 属性  | 说明                 | 类型             | 默认值 |
| :---- | :------------------- | :--------------- | :----- |
| width | 设置标题占位图的宽度 | number , string | -      |

### SkeletonParagraphProps

| 属性 | 说明 | 类型 | 默认值 |
| :-- | :-- | :-- | :-- |
| rows | 设置段落占位图的行数 | number | - |
| width | 设置段落占位图的宽度，若为数组时则为对应的每行宽度，反之则是最后一行的宽度 | number , string , Array<number , string> | - |
`,

    "a-spin": `[antd-design-vue :https://www.antdv.com/components/spin-cn/](https://www.antdv.com/components/spin-cn/) \n
  
用于页面和区块的加载中状态。

## 何时使用

页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。

## API

| 参数             | 说明                                         | 类型          | 默认值    |
| :--------------- | :------------------------------------------- | :------------ | :-------- |
| delay            | 延迟显示加载效果的时间（防止闪烁）           | number (毫秒) | -         |
| indicator        | 加载指示符                                   | vNode , slot | -         |
| size             | 组件大小，可选值为 'small' 'default' 'large' | string        | 'default' |
| spinning         | 是否为加载中状态                             | boolean       | true      |
| tip              | 当作为包裹元素时，可以自定义描述文案         | string        | -         |
| wrapperClassName | 包装器的类属性                               | string        | -         |
    `,
    "a-anchor": `[antd-design-vue :https://www.antdv.com/components/anchor-cn/](https://www.antdv.com/components/anchor-cn/) \n
  
用于跳转到页面指定位置。

## 何时使用

需要展现当前页面上可供跳转的锚点链接，以及快速在锚点之间跳转。

## API

### Anchor Props

| 成员 | 说明 | 类型 | 默认值 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| affix | 固定模式 | boolean | true |  |
| bounds | 锚点区域边界 | number | 5(px) |  |
| getContainer | 指定滚动的容器 | () => HTMLElement | () => window |  |
| offsetBottom | 距离窗口底部达到指定偏移量后触发 | number |  |  |
| offsetTop | 距离窗口顶部达到指定偏移量后触发 | number |  |  |
| showInkInFixed | ':affix="false"' 时是否显示小圆点 | boolean | false |  |
| wrapperClass | 容器的类名 | string | - |  |
| wrapperStyle | 容器样式 | object | - |  |
| getCurrentAnchor | 自定义高亮的锚点 | () => string | - | 1.5.0 |
| targetOffset | 锚点滚动偏移量，默认与 offsetTop 相同，[例子](#components-anchor-demo-targetOffset) | number | 'offsetTop' | 1.5.0 |

### 事件

| 事件名称 | 说明                   | 回调参数                            | 版本 |
| :------- | :--------------------- | :---------------------------------- | :--- | :---- |
| click    | 'click' 事件的 handler | Function(e: Event, link: Object)    |      |
| change   | 监听锚点链接改变       | (currentActiveLink: string) => void |      | 1.5.0 |`,
    "a-anchor-link": `[antd-design-vue :https://www.antdv.com/components/anchor-cn/](https://www.antdv.com/components/anchor-cn/) \n
  
| 成员   | 说明                             | 类型         | 默认值 | 版本  |
| :----- | :------------------------------- | :----------- | :----- | :---- |
| href   | 锚点链接                         | string       |        |       |
| title  | 文字内容                         | string,slot |        |       |
| target | 该属性指定在何处显示链接的资源。 | string       |        | 1.5.0 |`,
    "a-back-top": `[antd-design-vue :https://www.antdv.com/components/back-top-cn/](https://www.antdv.com/components/back-top-cn/) \n
返回页面顶部的操作按钮。

## 何时使用

- 当页面内容区域比较长时；
- 当用户需要频繁返回顶部查看相关内容时。

## API

> 有默认样式，距离底部 '50px'，可覆盖。
>
> 自定义样式宽高不大于 40px \* 40px。

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| target | 设置需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数 | Function | () => window |  |
| visibilityHeight | 滚动高度达到此参数值才出现 'BackTop' | number | 400 |  |

### 事件

| 事件名称 | 说明               | 回调参数 | 版本 |
| :------- | :----------------- | :------- | :--- |
| click    | 点击按钮的回调函数 | Function |      |
    `,
    "a-config-provider": `[antd-design-vue :https://www.antdv.com/components/config-provider-cn/](https://www.antdv.com/components/config-provider-cn/) \n

为组件提供统一的全局化配置。

## 使用

ConfigProvider 使用 Vue 的 [provide / inject](https://vuejs.org/v2/api/#provide-inject) 特性，只需在应用外围包裹一次即可全局生效。

'''html
<template>
    <a-config-provider :getPopupContainer="getPopupContainer">
    <app />
    </a-config-provider>
</template>
<script>
    export default {
    methods: {
        getPopupContainer(el, dialogContext) {
        if (dialogContext) {
            return dialogContext.getDialogWrap();
        } else {
            return document.body;
        }
        },
    },
    };
</script>
'''

### Content Security Policy

部分组件为了支持波纹效果，使用了动态样式。如果开启了 Content Security Policy (CSP)，你可以通过 'csp' 属性来进行配置：

'''html
<a-config-provider :csp="{ nonce: 'YourNonceCode' }">
    <a-button>My Button</a-button>
</a-config-provider>
'''

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| autoInsertSpaceInButton | 设置为 'false' 时，移除按钮中 2 个汉字之间的空格 | boolean | true |  |
| csp | 设置 [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) 配置 | { nonce: string } | - |  |
| renderEmpty | 自定义组件空状态。参考 [空状态](/components/empty/) | slot-scope , Function(componentName: string): VNode | - |  |
| getPopupContainer | 弹出框（Select, Tooltip, Menu 等等）渲染父节点，默认渲染到 body 上。 | Function(triggerNode, dialogContext) | () => document.body |  |
| locale | 语言包配置，语言包可到 [ant-design-vue/es/locale](http://unpkg.com/ant-design-vue/es/locale/) 目录下寻找 | object | - | 1.5.0 |
| pageHeader | 统一设置 pageHeader 的 ghost，参考 [pageHeader](<(/components/page-header)>) | { ghost: boolean } | 'true' | 1.5.0 |
| transformCellText | Table 数据渲染前可以再次改变，一般用户空数据的默认配置 | Function({ text, column, record, index }) => any | - | 1.5.4 ｜ |`,
    "a-divider": `[antd-design-vue :https://www.antdv.com/components/divider-cn/](https://www.antdv.com/components/divider-cn/) \n

区隔内容的分割线。

## 何时使用

- 对不同章节的文本段落进行分割。
- 对行内文字/链接进行分割，例如表格的操作列。

## API

| 参数        | 说明                       | 类型                          | 默认值       | 版本  |
| :---------- | :------------------------- | :---------------------------- | :----------- | :---- |
| dashed      | 是否虚线                   | Boolean                       | false        |       |
| orientation | 分割线标题的位置           | enum: 'left' 'right'          | 'center'     |       |
| type        | 水平还是垂直类型           | enum: 'horizontal' 'vertical' | 'horizontal' |       |
`,
    "a-locale-provider": `[antd-design-vue :https://www.antdv.com/components/locale-provider-cn/](https://www.antdv.com/components/locale-provider-cn/) \n
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| locale | 语言包配置，语言包可到 ant-design-vue/lib/locale-provider/ 目录下寻找 | object | - | — |`
};