import mongoose from 'mongoose';

const connect = (config) => {
  mongoose.Promise = global.Promise;
  mongoose
    .connect(config.url, { useMongoClient: true })
    .catch((err) => {
      console.error(err);
    });
};

export default connect;
