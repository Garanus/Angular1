'use strict';

import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

import mongoConverter from '../service/mongoConverter';

const postSchema = new mongoose.Schema({
  title: {type: String},
  url: {type: String},
  content: {type: String}
}, {
  collection: 'post'
});
postSchema.plugin(uniqueValidator);

const PostModel = mongoose.model('post', postSchema);

async function query() {
  const result = await PostModel.find({});
  {
    if (result) {
      return mongoConverter(result);
    }
  }
}

export default {
  query: query,

  model: PostModel
};
