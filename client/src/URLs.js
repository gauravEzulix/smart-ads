let URLs = {};

if (true) {
  URLs = {
    baseURL: '/api',
    socketURL: 'https://smartads.herokuapp.com/api',
  };
} else {
  URLs = {
    baseURL: 'http://localhost:5000/api',
    socketURL: 'http://localhost:5000/api',
  };
}

export default URLs;
