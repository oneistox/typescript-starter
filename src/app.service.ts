import { Body, Injectable } from '@nestjs/common';
import * as fs from 'node:fs/promises';

@Injectable()
export class AppService {

  async readFile(fileName): Promise<string> {
    const readText = await fs.readFile(`/Users/janavdhingra/typescript-starter/src/files/${fileName}`, 'utf8');
    return readText;
  }

  async writeFile(_body: any): Promise<string>{
    const editedFile = await fs.writeFile('/Users/janavdhingra/typescript-starter/src/files/s1.txt', _body.name);
    const readText = await fs.readFile('/Users/janavdhingra/typescript-starter/src/files/s1.txt', 'utf8');
    return readText;
  }

  async createFile(_abc: any): Promise<any>{
  await fs.writeFile('/Users/janavdhingra/typescript-starter/src/files/newFile2.txt', _abc.name);
  }

  async deleteFile(){
    await fs.unlink('/Users/janavdhingra/typescript-starter/src/files/newFile1.txt')
  }
}