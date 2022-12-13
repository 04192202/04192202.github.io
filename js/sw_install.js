<script>
  ;(function () {
    if (navigator.serviceWorker) {
      navigator.serviceWorker
        .register('/sw.js')
        .then((result) => {
          // 判断是否安装了sw
          if (localStorage.getItem('installSW')) return
          localStorage.setItem('installSW', true)
          // 这里就不用清理setInterval了，因为页面刷新后就没有了
          const timer = setInterval(() => {
            // 判断sw安装后，是否处于激活状态，激活后刷新页面
            if (result.active.state === 'activated') {
              clearInterval(timer)
              fetch(window.location.href)
                .then((res) => res.text())
                .then((text) => {
                  document.open()
                  document.write(text)
                  document.close()
                })
            }
          }, 100)
        })
        .catch(console.log)
    }
  })()
</script>