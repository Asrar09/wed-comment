import * as mongoose from 'mongoose';

export const CommentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  comment: { type: String, required: true },
});

export interface Comment {
  id: string;
  name: string;
  comment: string;
}
