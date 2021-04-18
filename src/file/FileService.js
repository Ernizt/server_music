const path = require('path');
const fs = require('fs');


class FileService {
    createFile(type, file ) {
        try {
            //  console.log(file);
            const fileExtension = file.name.split('.').pop();
            //console.log(fileExtension + ' 1');
            const fileName = Date.now() + '.' + fileExtension;
           // console.log(fileName + ' 2');
            const filePath = path.resolve(__dirname, '..', 'static', type)
          //  console.log(filePath + ' 3');
            if(!fs.existsSync(filePath)) {
                fs.mkdirSync(filePath, {recursive: true})
            }
            fs.writeFileSync(path.resolve(filePath, fileName), file.data)
            return type + '/' + fileName
        } catch (e) {
            return e;
        }
    }

}
module.exports = new FileService();