import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">

      <div>
        <Image
          src="/Logo_mobilewholesaler.pro1.png"
          width={300}
          height={100}
          className="hidden md:block"
        />
      </div>

      
      
    </main>
  );
}
