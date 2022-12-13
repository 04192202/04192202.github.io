if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .getRegistrations()
    .then((r) => {
      for (let i of r) i.unregister()
      console.log('注销成功')
    })
    .catch(() => console.log('注销失败'))
}