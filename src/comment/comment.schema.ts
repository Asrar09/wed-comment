import * as mongoose from 'mongoose';

export const CommentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  comment: { type: String, required: true },
});

export class Comment {
  constructor(public id: string, public name: string, public comment: string) {
    console.log('TES');
  }
}
