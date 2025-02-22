const n=`# 节流代码的实现

\`\`\`javascript
async function throttle(fn, delay) {
  let timer = null
  return function () {
    const context = this
    const args = arguments
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(context, args)
        timer = null
      })
    }
  }
}
\`\`\`

节流代码的实现，通过设置一个定时器，在定时器结束后才执行真正的函数。
`;export{n as default};
