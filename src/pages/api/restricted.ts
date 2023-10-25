import type { NextApiRequest, NextApiResponse } from 'next'
import { decode } from 'next-auth/jwt';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const sessionToken = req.cookies['next-auth.session-token'];
        console.log(process.env.NEXT_PUBLIC_SECRET);
        console.log({sessionToken});
        
        const decoded = await decode({
            token: sessionToken as string,
            secret: process.env.NEXT_PUBLIC_SECRET
        });
        console.log(decoded);
        
        if (decoded?.email) {
            res.send({ok: true});
        } else {
            res.send({ok: false});
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
}