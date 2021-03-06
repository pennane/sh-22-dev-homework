import { Character, Handler } from '../../../types/global';

export const getById: Handler<{ id: number }, Character | null> = async (
  ctx,
  { id },
) => {
  try {
    const character = await ctx.handlers.db.one<Character>(
      ctx,
      'SELECT * FROM character WHERE id = ?',
      [id],
    );
    if (!character) return null;
    return character;
  } catch (err) {
    console.error(err);
    return null;
  }
};
