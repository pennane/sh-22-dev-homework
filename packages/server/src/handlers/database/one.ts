import { DatabaseHandler } from '../../types/global';

export const one: DatabaseHandler = (ctx, sql, params) =>
  new Promise((resolve, reject) => {
    ctx.globals.db.get(sql, params, (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
