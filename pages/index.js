import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'first meetup',
    image:
      'https://meobserver.org/wp-content/uploads/2016/02/Cairo-University.jpg',
    address: 'Cairo university',
    description: 'This is an amazing meetup'
  },
  {
    id: 'm2',
    title: 'second meetup',
    image:
      'https://english.ahram.org.eg/Media/News/2020/8/23/2020-637338066226000907-600.jpg',
    address: 'Giza Zoo',
    description: 'This is an amazing meetup!'
  }
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
