import { Body, Controller, Get, Post } from '@nestjs/common';
import { CommentService } from './comment.service';
import { Comment } from './comment.model'

@Controller('comment')
export class CommentController {
  constructor(private readonly appService: CommentService) {}

  @Get('getHello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('getListOfMessage')
  getListOfMessage(): Promise<any> {
    return this.appService.listOfComment();
  }

  @Post('postComment')
  postComment(@Body() comment: Comment): Promise<any> {
    console.log('TES POST COMMENT');
    console.log('REQUEST : ', comment);
    return this.appService.postComment(comment);
  }
}
