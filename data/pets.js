import dog1 from '../assets/images/dog-1.png';
import dog2 from '../assets/images/dog-2.png';
import dog3 from '../assets/images/dog-3.png';
import dog4 from '../assets/images/dog-4.png';
import cat1 from '../assets/images/cat-1.png';
import cat2 from '../assets/images/cat-2.png';

const PETS = [
  {
    name: 'Pokki',
    type: 'dogs',
    sex: 'Male',
    breed: 'Chihuahua',
    src: [dog1, dog2, dog3, dog4],
    location: 'New York City',
    info: 'Please welcome our special little dude Pokki. He\'s sweet and very much a good boy. Pokki has a heart condition called pulmonary stenosis. It does require surgery. Basically one of his valvs is closed and the surgery will open it up. Without surgery his life expectancy will not be super long. He\'s just looking for his special adopter that can take care of his heart conditon.'
  },
  {
    name: 'Dobbie',
    type: 'dogs',
    sex: 'Female',
    breed: 'Dobermann',
    src: [dog2, dog2, dog2, dog2],
    location: 'Tokyo',
    info: 'Who is this big goofy boy? Well, its our charmer Dobbie! He loves to swim in the pool and play with his favorite toys. Dobie also enjoys the company of his favorite people and will give you his all once he gets to know you. He is looking for a home with an experienced adopter where he can be your one and only! He would be perfect for a couple or a home with adults only.'
  },
  {
    name: 'Buddy',
    type: 'dogs',
    sex: 'Female',
    breed: 'Pomeranian',
    src: [dog3, dog3, dog3, dog3],
    location: 'Shanghai',
    info: 'Meet Buddy! Buddy is a Male Pomeranian that is 3 years old and weighs about 18 pounds. Buddy is best described as energetic, playful, sweet, silly, and loads of fun! He needs an experienced adopter who is willing to understand his condition and help him through it! Could you be his forever buddy? Apply to adopt Buddy!'
  },
  {
    name: 'Musketeer',
    type: 'dogs',
    sex: 'Male',
    breed: 'Pug',
    src: [dog4, dog4, dog4, dog4],
    location: 'New York City',
    info: 'Say Hi to Musketeer. He is 1-2 years old and weighs 17 pounds. He is a Pug/Poodle/Pomeranian mix from a house with 33 other dogs. Due to this he has had no training in the housebreaking and leash department. He is sweet but shy and ready to learn. Since he came from a house with many other dogs he would do best in a house with other dogs. Musketeer needs a special owner with patience who is willing to give him the time to come out of his shell.'
  },
  {
    name: 'Bluey',
    type: 'cats',
    sex: 'Male',
    breed: 'Mix',
    src: [cat1, cat1, cat1, cat1],
    location: 'Paris',
    info: 'I am looking for a quiet and experienced home so I can properly relax, no other pets please!!  I also need to be the only cat in the neighbourhood please. My new home needs to be close to Gables and with someone who has experience with regular medication and skin issues, it’s time for me to have some TLC and daily pampering to my needs.'
  },
  {
    name: 'Gypsy',
    type: 'cats',
    sex: 'Female',
    breed: 'Mix',
    src: [cat2, cat2, cat2, cat2],
    location: 'Madrid',
    info: ' Could you be my happy ever after? I am looking for a home in a rural location as I have been known to squabble with the neighbouring cats previously. I also love to be up high so lots of places to climb would make me very happy. I’d prefer a quieter home as I am cautious of new people to begin with. Once I get to know you I do enjoy a fuss but I wouldn’t say I was a lap cat, I am more of an independent young lady.'
  },
];

export { PETS };