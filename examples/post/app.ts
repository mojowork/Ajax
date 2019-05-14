import http from '../../src/http';

// http({
//   url: '/base/post',
//   method: 'POST',
//   data: {
//     a: 1,
//     b: 2
//   }
// })


http({
    url: '/base/post',
    method: 'POST',
    headers: {
        // 'Conent-Type': 'text/html;charset=utf-8',
        'chaoshuai': 'chaos'
    },
    data: {
      a: 1,
      b: 2
    }
  })



const arr = new Int32Array([21, 31])

http({
  method: 'POST',
  url: '/base/buffer',
  data: arr
})


