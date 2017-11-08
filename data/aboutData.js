import mongoose from 'mongoose';
import AboutRow from '../models/aboutModel';

const aboutData = [
  {
    title: 'Software Engineer',
    supportingText: `As a professional, I'm a Senior Software engineer. I specialize in Front-End Engineering. Clean code, high-quality architecture, and appropriate documentation are my top priorities when implementing solutions. I'm interested in all tech industries and the engineering lifestyle that comes with digital agencies.`
  },
  {
    title: 'Mentor',
    supportingText: `In Boulder, CO, a community innondated with tech folk alike, I've had several opportunities to mentor engineers that are young in their careers. My mentoring style consists of code reviews, coffee shop pep talks, sharing my experiences, and encouraging my mentees to set and achieve their goals.`
  },
  {
    title: 'Athlete',
    supportingText: `Living in one of the fittest cities in the world, I'm constantly pushing my athleticism to my max potential. A healthy lifestyle and exercise contribute to my strong and focused work ethic. I play several team sports in Boulder, CO and also enjoy riding my road bike in town and up Flagstaff when I'm up for a challenge.`
  },
  {
    title: 'Amateur Chef',
    supportingText: `Food fuels my potential and determination. When I lived in Chicago, I had the pleasure of working at Pastoral -- a beer, cheese, and wine shop -- which exposed me to a whole new foodie community. While working at Pastoral, I met several 4-5 star chefs, staged in their kitchens, and tried food I never knew existed. I've never let my desire to challenge myself cooking amazingly intricate meals, as well as tasting new cuisines and exotic menu items that I previously would not dare attempt previously.`
  },
  {
    title: 'Homebrewer',
    supportingText: `I credit my brother-in-law and Pastoral for introducing me to Craft Beer. Over the years, I've developed a palette for tasting different styles of beer and being able to differentiate them by color, smell, and flavor profile. As I developed these tastes, I needed to take on a new challenge, homebrewing. Homebrewing is surprisingly rewarding when the output is drinkable. If you're a fellow homebrewer, you know exactly what I'm talking about. While I'm not nearly as passionate about homebrewing as I am cooking, I still love sitting in a camping chair in my driveway creating some tastey wort in my 10 gallon brew kettle.`
  }
];

// Connect to MongoDB
mongoose.createConnection('mongodb://localhost/about');

// Go through each movie
aboutData.map(data => {
  // Initialize a model with movie data
  const about = new AboutRow(data);
  // and save it into the database
  about.save();
});
