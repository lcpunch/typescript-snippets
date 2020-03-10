import {User} from './Models/User';

const user = new User({ name: 'Lucas', age: 20 });

user.on('change', () => {
  console.log('1');
});

user.on('change', () => {
  console.log('2');
});

user.trigger('change');