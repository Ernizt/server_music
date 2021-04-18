const FileType = require("../types/type");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


const {Track} = require('../track/schemas/module');
const {Comment} = require('../track/schemas/module')
const ApiError = require('../error/ApiError')
const FileService= require('../file/FileService')

class TrackController {

   async craete ( req, res, next) {
        try {
            console.log(req.body);
            let {name, text, artist, } = req.body;
            const listens = 0;
            const audio = FileService.createFile(FileType.AUDIO, req.files.audio);
            const picture = FileService.createFile(FileType.IMAGE, req.files.picture);
            const track = await Track.create({name, artist, text, listens, picture, audio});
            return  res.json(track)
        }
        catch (e) {
            next(ApiError.badRequest(e))
        }

    }

  async searchName(req, res) {
        const query = req.query.query;
        console.log(req);
         const track = await  Track.findAll({limit: 10, where: {name:{[Op.iLike]: '%' + query +'%'}}});
        return res.json(track);
    }
     async saveFile (req, res, next) {
       const audioPath = FileService.createFile(FileType.AUDIO, req.files.audio);
      const imagePath = FileService.createFile(FileType.IMAGE, req.files.picture);
       // console.log(req.files);
        return  res.json(imagePath);
    }
    async getAll( req, res) {
          let {limit, page} = req.query;
          page = page || 1;
        limit = limit || 9;
        let offset = page * limit - limit;

        const track = await Track.findAndCountAll({limit, offset});
        return res.json(track);
    }

        async getOne( req, res) {
        const {id} = req.params;
        const track = await Track.findOne({where: {id:id}});
        return  res.json(track)
            }

    async deleta(req, res) {
        const {id} = req.params;
        const track = await Track.destroy({ where: {
            id: id
            }});
                return  res.json(track)
            }
     async addComment(req, res ){
         let {track_id, username, text} = req.body;
         const track = await Comment.create(
             {track_id, username, text});
         return  res.json(track)

     }
     async listen(req, res) {
       console.log(req)
         const {id} = req.params;
       const track = await Track.findByPk(id);
       track.listens += 1;
       track.save();
       return res.json(1);
     }

}

module.exports = new TrackController();