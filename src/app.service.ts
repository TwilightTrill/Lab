import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `
    <div style="text-align:center; margin-top: 50px; font-family: Arial;">
      <h1 style="color: #e0234e;">ยินดีด้วย! ระบบ CI/CD ทำงานแล้ว</h1>
      <p style="font-size: 20px;">ข้อความจากโค้ด: <b>เย้ๆๆๆๆๆๆ ทำได้แล้ว!</b></p>
      <img src="https://nestjs.com/img/logo-small.svg" width="100">
    </div>
  `;
  }
}
