const n=`# 防抖代码的实现

\`\`\`javascript
const debounce = (fn, delay) => {
  let timer = null
  return function () {
    const context = this
    const args = arguments
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(context, args)
      timer = null
    })
  }
}
\`\`\`

这个代码是一个 JavaScript 函数，用于实现防抖功能。这个函数接受两个参数：\`fn\` 是要执行的函数，\`delay\` 是延迟执行的毫秒数。
`;export{n as default};
