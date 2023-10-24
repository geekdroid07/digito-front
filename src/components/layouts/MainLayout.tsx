import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
// import { MobileSidebar, Footer, UserNavigation } from '@/components/modules';
import { Button } from '@/components/elements';
import clsx from 'clsx';
import { FaRegUserCircle } from 'react-icons/fa';
import { RiFileDownloadLine } from 'react-icons/ri';
import { useAuth } from '@/lib/auth';
// import { AuthFlow, ModalType } from '../modals';
// import { useHasMounted } from '@/hooks/useHasMounted';
// import { useTranslation } from 'next-i18next';

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const { user } = useAuth();
  // const [currentModal, setCurrentModal] = useState<ModalType>(undefined);
  // const { hasMounted } = useHasMounted();
  // const { t: tHeader } = useTranslation('header');
  // const { t: tCommon } = useTranslation('common');

  return (
    <div className="flex h-screen bg-gray-100">
      {/* <AuthFlow currentModal={currentModal} setCurrentModal={setCurrentModal} /> */}

   

      <div className="relative flex flex-col flex-1 w-0 bg-white ">
        <div
          className={clsx(
            'relative z-10',
            'flex-shrink-0 flex',
            'justify-between items-center',
            'h-20 container',
            'absolute top-0 left-0 right-0',
            'transition-colors duration-200',
            'print:hidden',
          )}
        >
          <div className="flex items-center justify-between w-full">
   
            <div className="items-center hidden xl:flex">
              {/* <HeaderItems className="text-[#004E9E]" /> */}
              <Button
                variant="outline-primary"
                className="h-10 font-semibold uppercase"
                size="sm"
              >
                <div className="flex items-center justify-center gap-2">
                  <RiFileDownloadLine className="w-6 h-6" />

                </div>
              </Button>

              <div className="h-14 rounded-full w-0.5 hidden xl:flex bg-gray-200" />

              
            </div>
          </div>

          <div className="flex items-center justify-center xl:hidden">

            <Button
              onClick={() => setSidebarIsOpen(true)}
              startIcon={<FiMenu className="w-8 h-8" aria-hidden="true" />}
              size="sm"
              className="bg-[#ffffff] border-none text-primary shadow-none"
              style={{
                boxShadow: 'none',
                marginRight: '-15px',
              }}
            />
          </div>
        </div>
        <main className="relative flex-1 focus:outline-none bg-[#F8F8F8]">
          {children}
        </main>
      </div>
    </div>
  );
};
