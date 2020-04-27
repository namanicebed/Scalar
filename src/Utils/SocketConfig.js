import io from 'socket.io-client';

export const socket = io.connect('http://localhost:5000', {
  query: {
    token:
      'eyJhbGciOiJIUzI1NiJ9.NDQ1ZGRkZ2dnZ2RhZGNlZQ.Zop0GxbkAfMDkec5LAia8qRaaGl_QUJ1ZuRr_jyIFfM',
  },
});

// export const socket = io.connect('http://localhost:5000', {
//   query: {
//     token:
//       'eyJhbGciOiJIUzI1NiJ9.MTIzNDUwMGFkZmFmZGY.SUlkERTMgfdkHX-QEUPn5tF2zEos4BfEwGMR_eD2IBM',
//   },
// });