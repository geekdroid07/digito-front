import dynamic from 'next/dynamic';

const ContentLayout = dynamic(
  () => import('@/components/layouts/ContentLayout'),
);
const Dashboard = dynamic(() => import('@/components/templates/Dashboard'));

const Home = () => {

  return (
      <ContentLayout title={'TESTING MY SKILLS'}>
        <Dashboard />
      </ContentLayout>
  );
};


export default Home;
