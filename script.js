console.log('Hello!');

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
};

