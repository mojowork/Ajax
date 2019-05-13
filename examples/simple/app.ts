import http from '../../src/http';

http({
  url: '/simple/get',
  params: {
    a: null,
    b: 2,
    c: undefined,
    d: 'undefined'
  }
})

http({
  url: '/simple/get',
  params: {
    a: [1,2,3,4,5],
    b: ['chao','shuai']
  }
})
http({
  url: '/simple/get',
  params: {
    a: 1,
    b: {
      aaaaaaa: '1',
      bbbbbbb:'2'
    }
  }
})
http({
  url: '/simple/get',
  params: {
    a: 1,
    b: new Date()
  }
})
http({
  url: '/simple/get#hash',
  params: {
    a: 1,
    b: 2
  }
})
http({
  url: '/simple/get?my=ajax#hash',
  params: {
    a: 1,
    b: 2
  }
})





