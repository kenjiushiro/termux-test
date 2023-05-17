const api = require('termux')

if (!api.hasTermux) process.exit(1)

api.vibrate()
   .duration(1000)
   .run()


api.notification()
  .content('hola')
  // .image('./test.jpg')


console.log(api.location().provider('gps').once())
