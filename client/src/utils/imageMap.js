import hero from '../assets/images/hero.jpg'
import ind5 from '../assets/images/ind5.jpg'
import juc1 from '../assets/images/juc1.jpg'
import juc2 from '../assets/images/juc2.jpg'
import juc3 from '../assets/images/juc3.jpg'
import juc4 from '../assets/images/juc4.jpg'
import piz1 from '../assets/images/piz1.jpg'
import piz2 from '../assets/images/piz2.jpg'
import piz3 from '../assets/images/piz3.jpg'
import piz4 from '../assets/images/piz4.jpg'
import piz5 from '../assets/images/piz5.jpg'
import pst1 from '../assets/images/pst1.jpg'
import pst2 from '../assets/images/pst2.jpg'
import pst3 from '../assets/images/pst3.jpg'
import pst4 from '../assets/images/pst4.jpg'
import pst5 from '../assets/images/pst5.jpg'

export const imageMap = {
  hero,
  ind5,
  juc1,
  juc2,
  juc3,
  juc4,
  piz1,
  piz2,
  piz3,
  piz4,
  piz5,
  pst1,
  pst2,
  pst3,
  pst4,
  pst5,
  burger: juc1,
  pizza: piz1,
  sandwich: pst1,
  juice: juc2,
  dessert: pst2,
  noodles: ind5,
  biryani: piz2,
  salad: pst3,
  coffee: juc3,
  shawarma: piz3,
  tacos: pst4,
  pasta: ind5,
  wraps: juc4,
  momos: pst5,
  fries: piz4,
  kulfi: pst1,
  smoothie: juc2,
  dosa: ind5,
  cheesecake: pst2,
  waffles: juc1,
  brownie: pst3,
  rolls: piz5,
}

export const getImageByKey = (key) => imageMap[key] || hero
