module.exports = async function (href) {
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.type = 'text/css'
  link.href = href

  document.head.appendChild(link)

  return new Promise((resolve, reject) => {
    link.onload = () => resolve()
    link.onerror = () => reject(new Error(`Failure loading url: ${href}`))
  })
}
