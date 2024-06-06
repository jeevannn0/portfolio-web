import { Button } from '@/components';
import { Layout } from '@/containers';

const NotFound = () => {
  return (
    <Layout className="grid h-screen place-items-center">
      <div className="w-full max-w-xl text-center">
      
        <p className="mt-5 text-3xl capitalize md:text-4xl text-dark-2">
          Sus, Entered the wrong page
        </p>

        <Button type="link" href="/" size="lg" className="mt-20" sameTab center>
          go home
        </Button>
      </div>
    </Layout>
  );
};

export default NotFound;
