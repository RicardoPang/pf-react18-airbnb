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
