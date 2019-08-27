const fs = require('fs');
const {join, posix, basename, extname} = require('path');
const {parse} = require('./formatMd');
/**
 *
 * @param startPath  起始目录文件夹路径
 * @returns {Array}
 */
function findSync(startPath) {
  let result=[];
  function finder(path) {
    let files=fs.readdirSync(path);
    files.forEach((val,index) => {
      let fPath=join(path,val);
      let stats=fs.statSync(fPath);
      if(stats.isDirectory()) finder(fPath);
      if(stats.isFile() && extname(fPath) === '.md') result.push({
        path: posix.join('blog', val),
        time: stats.birthtime,
        name: basename(fPath, '.md')
      });
    });

  }
  finder(startPath);
  return result;
}
const blogPath = join(__dirname, '../blogs');
const mdList = findSync(blogPath);
mdList.sort((cur, next) => {
  return next.time.getTime() - cur.time.getTime();
});
const lastArticle = getLastArticle(mdList, blogPath);
const mdListIndex = `
export const mdList = ${JSON.stringify(mdList)};
export const lastArticle = ${JSON.stringify(lastArticle)};
`;
fs.writeFileSync(join(blogPath, 'index.ts'), mdListIndex);

function getLastArticle(articles, blogPath) {
  const {path} = articles[0];
  const realPath = join(blogPath, basename(path));
  const mdContent = fs.readFileSync(realPath, {encoding: 'utf8'});
  const parseContent = parse(mdContent);
  return {...parseContent, path};
}
