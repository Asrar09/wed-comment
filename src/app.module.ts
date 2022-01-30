import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [
    CommentModule,
    MongooseModule.forRoot(
      'mongodb+srv://asrarDB:EvykJHs2MBsQl87a@thecampaign.gcmfw.mongodb.net/wed_inv?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
