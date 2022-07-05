import { Body, Injectable } from '@nestjs/common';
import * as fs from 'node:fs/promises';

@Injectable()
export class AppService {

  async readFile(fileName: string): Promise<string> {
    const readText = await fs.readFile(`/Users/janavdhingra/typescript-starter/src/files/${fileName}`, 'utf8');
    return readText;
  }

  async writeFile(fileName:string , _body: any ): Promise<string>{
    const editedFile = await fs.writeFile(`/Users/janavdhingra/typescript-starter/src/files/${fileName}`, _body.name);
    const readText = await fs.readFile(`/Users/janavdhingra/typescript-starter/src/files/${fileName}`, 'utf8');
    return readText;
  }

  async createFile( fileName:string, _body2: any): Promise<any>{
  await fs.appendFile(`/Users/janavdhingra/typescript-starter/src/files/${fileName}`, _body2.name);
  }

  async deleteFile(fileName: string){
    await fs.unlink(`/Users/janavdhingra/typescript-starter/src/files/${fileName}`)
    return 1;
  }
}