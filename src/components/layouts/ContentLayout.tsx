import NextHead from 'next/head';
import favicon from '@/public/favicon.ico';
import clsx from 'clsx';
import { StaticImageData } from 'next/image';

type ContentLayoutProps = {
  children?: React.ReactNode;
  title?: string | React.ReactNode;
  description?: string;
  keywords?: string;
  image?: StaticImageData;
  container?: boolean;
  cover?: boolean;
};

export const ContentLayout = ({
  children,
  title,
  description,
  keywords,
  container
}: ContentLayoutProps) => {
  return (
    <>
      <NextHead>
        <title>{`${title ? `${title} -` : ''} DIGITO`}</title>
        <link rel="icon" href={favicon.src} />
        <meta
          name="description"
          content={description}
        />
        <meta name="keywords" content={keywords} />
      </NextHead>

      <div className={clsx(container ? 'container' : '')}>
        {children}
      </div>
    </>
  );
};

export default ContentLayout;
