
import Header from '@components/header';
import Section1 from '@components/section';
import Section2 from '@components/section2';
import Section3 from '@components/section3';

const Page = () => {
 

  return (
    <div className='flex flex-col'>
      <Header/>
      <Section1/>
      <Section2/>
      <Section3/>
    </div>
  );
};

export default Page;
