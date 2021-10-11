// dynamic import after 3 seconds

setTimeout(() => {

  import('./user.mjs').then(({ default: User, printUser }) => {
    const user = new User('John', 'Doe');
    printUser(user);
  })

}, 3000);
