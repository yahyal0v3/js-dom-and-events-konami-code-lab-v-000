const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  function init() {
  let index = 0

  document.body.addEventListener('keydown', function(e) {
    if (e.key === codes[index]) {
      index++
      console.log(e.key)
      console.log(index)
      if (index === codes.length) {
        alert("Hurray!")
        index = 0
      }
    } else {
      index = 0
    }
  })
}
}