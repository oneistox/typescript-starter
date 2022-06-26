import { Injectable } from '@nestjs/common';
import { promises as fs, writeFile,  } from 'fs';

@Injectable()
export class AppService {

  async readFile(): Promise<string> {
    const readText = await fs.readFile('../files/s1.txt', 'utf8');
    return readText;
  }

  async writeFile(): Promise<string>{
    const editedFile = await fs.writeFile('../files/s1.txt', 'hey');
    const readText = await fs.readFile('../files/s1.txt', 'utf8');
    return readText;
  }

  async createFile(): Promise<File>{
    var file = new File(["s2"], "s2.txt", {type: "text/plain",});
    return file;
  }

}


