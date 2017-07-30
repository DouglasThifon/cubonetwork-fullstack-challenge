let url = 'mongodb://localhost/cubo_dev';

switch (process.env.NODE_ENV) {
  case 'production':
    url = 'mongodb://localhost/cubo';
    break;

  case 'test':
    url = 'mongodb://localhost/cubo_test';
    break;

  case 'development':
  default:
    url = 'mongodb://localhost/cubo_dev';
    break;
}

export default {
  url,
};
