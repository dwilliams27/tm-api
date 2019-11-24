import { Request, Response } from 'express';

export function getPlayer(req: Request, res: Response) {
  res.send({
    player:[
    {id: 1, name: 'How to train your dragon' },
    {id: 2, name: 'Queen of Katwe'},
    ]
  });
}