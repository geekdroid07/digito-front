export const AuthLayout = ({ title, subTitle, children }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 col-r h-screen bg-white">
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
            <h4 className="font-bold text-4xl mb-2 lg:text-left text-center">
              {title}
            </h4>
            <p className="font-light text-sm mb-6 ">{subTitle}</p>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};
