import { Injectable } from '@nestjs/common';
import { promises as fs, writeFile,  } from 'fs';

@Injectable()
export class AppService {

  async readFile(): Promise<string> {
    const readText = await fs.readFile('/Users/janavdhingra/typescript-starter/src/files/s1.txt', 'utf8');
    return readText;
  }

  async writeFile(): Promise<string>{
    const editedFile = await fs.writeFile('/Users/janavdhingra/typescript-starter/src/files/s1.txt', 'hey');
    const readText = await fs.readFile('/Users/janavdhingra/typescript-starter/src/files/s1.txt', 'utf8');
    return readText;
  }

  createFile(){
    var fs = require("fs");

    var createFile = fs.createFile("s2.txt");
    createFile.end();
    

  }
}


