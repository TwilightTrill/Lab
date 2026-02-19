import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'เย้ๆๆๆๆๆๆๆๆๆๆ ทำได้แล้วมั้งนะ';
  }
}
