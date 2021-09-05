```js
let user = {
  name: 'Arya',
  sibling: ['Robb', 'Ryan', 'John'],
};
let allBrothers = ['Robb', 'Ryan', 'John'];
let brothersCopy = user.sibling;
let usename = user.name;
let newUser = user;
```

1. Memory representation

- Create the memory representation of the above snippet on notebook.
- Take a photo/screenshot and add it to the folder `code`

<!-- To add this image here use ![name](./hello.jpg) -->
![memory_representation](./memory_representation.png) 

2. Answer the following with reason:

- `user == newUser;` // true both are holding same address
- `user === newUser;` // true both are holding same address
- `user.name === newUser.name;` // true both are holding same address
- `user.name == newUser.name;` // true both are holding same address
- `user.sibling == newUser.sibling;` // true both are holding same address
- `user.sibling === newUser.sibling;`// true both are holding same address
- `user.sibling == allBrothers;`// true both are having same array
- `user.sibling === allBrothers;`// true both are having same array
- `brothersCopy === allBrothers;`// true both are having same array
- `brothersCopy == allBrothers;` // true both are having same array
- `brothersCopy == user.sibling;` // true both are having same array
- `brothersCopy === user.sibling;`// true both are having same array
- `brothersCopy[0] === user.sibling[0];`// true both are having same array
- `brothersCopy[1] === user.sibling[1];` // true both are having same array
- `user.sibling[1] === newUser.sibling[1];`// true both are having same address
