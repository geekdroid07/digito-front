import type { NextApiRequest, NextApiResponse } from 'next'
import { decode, getToken } from 'next-auth/jwt';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const sessionToken = req.cookies['__Secure-next-auth.session-token'];

        const decoded = await decode({
            token: sessionToken as string,
            secret: process.env.NEXT_PUBLIC_SECRET
        });
        
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