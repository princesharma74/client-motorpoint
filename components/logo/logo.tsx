import React from 'react'
import Link from "next/link"
import Image from 'next/image';

export const Logo = () => {
  return (
    <Link href="/" className="flex items-center space-x-2">
        <div className='flex gap-2 justify-center items-center'>
            <div>
            <Image src="/logo.png" alt="Motorpoint" width={40} height={40} />
            </div>
            <div className='flex flex-col'>
              <div>
                    <span className="text-xl font-bold">Motorpoint</span>
              </div>
              <div className='text-md text-primary font-bold'>Van Rentals</div>
            </div>
        </div>
    </Link>
  );
}
