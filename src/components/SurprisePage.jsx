import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function SurprisePage() {
  const navigate = useNavigate();
  return (
    <section
      className='max-w-prose mx-auto font-quicksand'
      aria-label='Surprise Page'>
      <p className='py-8 sm:text-2xl'>
        Ha! I bet you didn't expect to stumble upon a surprise page like this.
        Well, since you're here, I'll let you in on a little secret: This app
        was created with love and coded using React and Redux, to put it simply.
        Wish me luck, carry on with your day, and feel free to click the button
        to head back home.
      </p>
      <div className='text-center'>
        <Button
          variant='outlined'
          onClick={() => navigate('/')}>
          Home, sweet home
        </Button>
      </div>
    </section>
  );
}

export default SurprisePage;
