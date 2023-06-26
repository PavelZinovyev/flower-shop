const uuid = require('uuid');
const path = require('path');
const { Item, Item_info } = require('../models/models');
const ApiError = require('../error/apiError');

class ItemController {
  async create(req, res, next) {
    try {
      let { name, price, typeId, info } = req.body;
      const { img } = req.files;

      let fileName = uuid.v4() + '.jpg';

      img.mv(path.resolve(__dirname, '..', 'static', fileName));

      if (info) {
        info = JSON.parse(info);

        info.forEach((i) =>
          Item_info.create({
            title: i.title,
            description: i.description,
            itemId: item.id,
          })
        );
      }

      const item = await Item.create({ name, price, typeId, img: fileName });

      return res.json(item);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    let { typeId, price, limit, page } = req.query;

    let items;
    page = page || 1;
    limit = limit || 9;
    const offset = page * limit - limit;

    if (!typeId && !price) {
      items = await Item.findAndCountAll({ limit, offset });
    }

    if (typeId && price) {
      items = await Item.findAndCountAll({ where: { typeId, price }, limit, offset });
    }

    if (price && !typeId) {
      items = await Item.findAndCountAll({ where: { price }, limit, offset });
    }

    if (typeId && !price) {
      items = await Item.findAndCountAll({ where: { typeId }, limit, offset });
    }

    return res.json(items);
  }

  async getOne(req, res) {
    const { id } = req.params;

    const item = await Item.findOne({
      where: { id },
      include: [{ model: Item_info, as: 'info' }],
    });

    return res.json(item);
  }
}

module.exports = new ItemController();
