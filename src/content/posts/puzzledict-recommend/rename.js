import fs from 'fs';
import path from 'path';

const dir = './';

fs.readdirSync(dir).forEach((file) => {
  // 过滤掉隐藏文件、脚本自身，以及不含下划线的文件
  if (!file.startsWith('.') && file !== 'rename.js' && file.includes('_')) {
    const newName = file.replace(/_/g, '-');
    fs.renameSync(path.join(dir, file), path.join(dir, newName));
    console.log(`Renamed: ${file} -> ${newName}`);
  }
});
