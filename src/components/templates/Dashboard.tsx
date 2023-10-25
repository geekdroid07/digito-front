import React from 'react'
import { Button } from '@/components/elements/Button';
import { axios as axiosConfig } from '@/config/axios';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';
import { signIn, useSession, getSession, signOut } from 'next-auth/react';

export default function Dashboard() {
  const { data: user } = useSession();

  const PingBackend = async () => {
    try {
        const {data} = await axiosConfig.get(`/ping`);

        if (data?.data?.ok) {
            toast.success('server responded');
        }
    } catch (ex: any) {
        toast.error(ex?.message);
    }
  }

  const signout = async () => {
    if (user.user) {
      await signOut()
    }
  }

  const CheckLoggedUser = async () => {
    if (user?.user) {
      try {
        const {data} = await axios.get(`/api/restricted`);
        if (data?.ok) {
          toast.success('server responded with logged-in user');
        }
      } catch (ex: any) {
        toast.error(ex?.message);
      }
    } else {
      signIn()
    }
  }

  return (
    <>
      <div className='flex mx-8 mt-4'>
        <Button
            size="sm"
            variant="outline-primary"
            className="w-10/12 py-3 mr-4 text-lg xl:w-full sm:w-6/12"
            onClick={PingBackend}
            >
            PING
        </Button>

        <Button
            size="sm"
            variant="outline-primary"
            className="w-10/12 py-3 text-lg xl:w-full sm:w-6/12"
            onClick={CheckLoggedUser}
            >
            RESTRICTED
        </Button>
      </div>
      {user?.user && <Button
          size="sm"
          variant="outline-secondary"
          className="w-10/12 py-3 mt-8 text-lg text-center xl:w-full sm:w-6/12"
          onClick={signout}
          >
          SIGN OUT
      </Button>}
    </>

  )
}
