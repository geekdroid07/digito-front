
import bgImage from '@/public/images/placeholders/Background.png';
import pins404 from '@/public/images/placeholders/404-pins.png';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/elements/Button';
import ContentLayout from '@/components/layouts/ContentLayout';

export default function NotFound() {
  return (
    <ContentLayout title="404" image={bgImage} cover>
      <div className="flex items-center justify-center w-full h-auto pt-10">
        <div className="flex flex-col items-center justify-center order-1 max-w-md px-2 text-sm md:text-base lg:px-0">
         

          <Link href="/" prefetch={false}>
            <Button variant="danger">VOLVER A LA PÁGINA DE INICIO</Button>
          </Link>
        </div>
      </div>
    </ContentLayout>
  );
}

