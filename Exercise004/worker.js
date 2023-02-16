const dateCount = () => {
     const date = new Date()
     postMessage(date)
     setTimeout(dateCount,1000)
}

dateCount()