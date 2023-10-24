type TAuthLayoutProps = {
  title: string;
  children: React.ReactNode;
  subTitle?: React.ReactNode;
};

export const AuthLayout = ({ title, subTitle, children }: TAuthLayoutProps) => {
  return (
    <div className="grid h-screen grid-cols-1 bg-white lg:grid-cols-2 col-r">
      <div
        style={{
          backgroundImage: `url(/images/placeholders/girl.png)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          width: '100%',
        }}
        className="hidden lg:flex"
      />
      <div className="grid justify-center mt-24">
        <div className="max-w-sm">
          <div>
            <h4 className="mb-2 text-4xl font-bold text-center lg:text-left">
              {title}
            </h4>
            <p className="mb-6 text-sm font-light ">{subTitle}</p>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};
