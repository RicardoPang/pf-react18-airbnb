# React18 实现爱彼迎项目

### 在本地运行以进行开发

```shell
npm install
npm start
```

### 项目规范

1. 文件夹、文件名称统一小写、多个单词以连接符 - 连接
2. JavaScrip 变了名称采用小驼峰标识，常量全部使用大写字母，组件采用大驼峰
3. CSS 采用普通 CSS 和 styled-component 结合来编写（全局采用普通 CSS、局部采用 styled-component）
4. 整个项目不再使用 class 组件，统一使用函数式组件，并且全面拥抱 Hooks
5. 所有的函数式组件，为了避免不必要的渲染，全部使用 memo 进行包裹
6. 组件内部的状态，使用 useState、useReducer，业务数据全部放在 redux 中管理
7. 函数组件内部基本按照如下顺序编写代码：
   - 组件内部 state 管理
   - redux 的 hooks 代码
   - 其他 hooks 相关代码（如自定义 hooks）
   - 其他逻辑代码
   - 返回 JSX 代码
8. redux 代码规范
   - 每个模块有自己独立的 reducer 或者 slice，之后合并在一起
   - redux 中会存在共享的状态、从服务器获取到的数据状态
9. 网络请求采用 axios
   - 对 axios 进行二次封装
   - 所欲的模块请求会放到一个请求文件中单独管理
10. 项目使用 AntDesign、MUI，但是多部分组件还是自己进行编写、封装、实现

---

## 项目总结

### ● 使用了什么技术

- **React 18**：核心前端框架，全部使用函数式组件与 Hooks。
- **Redux Toolkit**：全局状态管理，分模块 reducer，业务数据集中管理。
- **react-redux**：组件与 Redux 连接，使用 useSelector/useDispatch。
- **styled-components**：CSS-in-JS，局部样式灵活可控。
- **react-router-dom**：路由管理，SPA 页面切换。
- **axios**：网络请求，统一封装。
- **AntDesign/MUI**：部分 UI 组件，提升开发效率。
- **react-transition-group**：动画过渡效果。

### ● 系统关键设计说明

1. **页面结构**：
   - 顶部 Header（含搜索、导航等）
   - 主体内容区（首页、列表页、详情页等）
   - 底部 Footer
2. **状态管理**：
   - 每个业务模块（如 home、entire、detail、main）有独立 reducer，统一合并到 store。
   - 组件内部状态用 useState，业务数据用 Redux。
3. **样式方案**：
   - 全局样式用普通 CSS，局部用 styled-components，支持主题切换。
4. **自定义 Hooks**：
   - `useScrollPosition`、`useScrollTop` 等，提升复用性和代码可读性。
5. **性能优化**：
   - 全部组件用 React.memo 包裹，避免不必要的渲染。
   - Redux useSelector 返回对象时配合 shallowEqual，防止无效刷新。
6. **动画与交互**：
   - 搜索框、图片浏览等核心交互均有平滑动画。

### ● 关键流程图（文本描述）

```
[用户访问页面]
     ↓
[App 组件初始化] → [useScrollTop Hook 监听滚动]
     ↓
[Header 组件加载] → [Redux 获取 headerConfig 控制是否吸顶/透明]
     ↓
[页面内容区渲染] → [根据路由切换不同页面组件]
     ↓
[组件内部通过 Redux 获取/提交数据]
     ↓
[如有异步请求，统一用 axios 封装处理]
     ↓
[页面交互（如搜索、图片浏览）通过本地 state + Redux 协同]
```

### ● 过程中遇到什么问题（及解决方案）

1. **Redux useSelector 警告：Selector 返回新对象**
   - 问题：每次 useSelector 返回新对象，导致组件频繁刷新并出现警告。
   - 解决：单字段直接返回，多字段配合 shallowEqual，或用 reselect/memoization。
2. **动画组件 findDOMNode 警告**
   - 问题：react-transition-group 内部用 findDOMNode，React 18+ 下警告。
   - 解决：关注第三方库升级，当前层面可忽略。
3. **滚动监听与副作用处理**
   - 问题：直接在渲染体内 setState，导致 React 渲染流程异常。
   - 解决：副作用逻辑全部放到 useEffect 内。
4. **自定义 Hook 返回值结构不一致**
   - 问题：自定义 Hook 返回数组时用对象解构，导致 undefined。
   - 解决：统一返回对象，组件用对象解构。
5. **页面样式错位/吸顶逻辑混乱**
   - 问题：Header、Filter 等吸顶样式与页面内容间距冲突。
   - 解决：合理设置 margin-top、z-index，吸顶时动态调整页面结构。
6. **路由未来特性警告**
   - 问题：React Router v7 未来行为警告。
   - 解决：提前加 future flag 适配。

## 部署注意事项

- **生产环境（如 Vercel 部署）必须保证所有接口为 HTTPS，否则浏览器会拦截接口请求，页面无法正常显示。**
- 本项目已自动根据环境切换接口协议，开发环境用 HTTP，生产环境用 HTTPS。

---

如需了解更多细节或有新问题，欢迎随时反馈！
