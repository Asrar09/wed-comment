import { Injectable } from '@nestjs/common';
import { dummyComment } from './dummy';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
