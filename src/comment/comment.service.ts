/* eslint-disable prettier/prettier */
import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
// import { dummyComment } from '../dummy';
import { Comment } from './comment.model'

@Injectable()
export class CommentService {

  constructor(@InjectModel('comment_sections') private commentModel: Model<Comment>) {}

  getHello(): string {
    return 'Hello World!';
  }

  async postComment(input: Comment): Promise<any> {
    try {
    const newComment = new this.commentModel({
      name: input.name,
      comment: input.comment
    })
    const result = await newComment.save();
    const response = {
      status: 'Success',
      message: `Succesfully post comment of ${result.name}`
    }
    return response;
  } catch(err){
    throw new HttpException({
        status: 'Failed',
        message: err.message
    }, 500)
    }
  }

  async listOfComment(): Promise<any> {
    const commentList = await this.commentModel.find()
    const allComment = commentList;
    const commentLength = allComment.length;
    const secArr = [];
    let a;
    for (a = 0; a < commentLength; a += 5) {
      secArr.push(allComment.splice(0, 5));
      // secArr.push(ar.splice(a+0, a+5))
    }
    return secArr;
  }
}
