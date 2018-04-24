const expect = require('expect');

const {Users} = require('./users');

describe('Users',()=>{
  var users;

  beforeEach(()=>{
    users = new Users();
    users.users=[{
      id:'1',
      name:'Roy',
      room:'IT studs'
    },{
      id:'2',
      name:'Moss',
      room:'IT studs'
    },{
      id:'3',
      name:'Jen',
      room:'Office Divas'
    }];
  });

  it('should add new user',()=>{
    var users = new Users();
    var user = {
      id: 123,
      name: 'Prateek',
      room: 'Ultimate'
    }
    var resUser = users.addUser(user.id,user.name,user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user',()=>{
    var userId = '1';
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove a user',()=>{
    var userId = '79';
    var user = users.removeUser(userId);

    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find user',()=>{
    var userId = '1';
    var user = users.getUser(userId);

    expect(user.id).toBe(userId);
  });

  it('should not find user',()=>{
    var userId = '99';
    var user = users.getUser(userId);

    expect(user).toNotExist();
  });

  it('should return names for "IT studs"',()=>{
    var userList = users.getUserList("IT studs");
    expect(userList).toEqual(['Roy','Moss']);
  });

  it('should return names for "Office Divas"',()=>{
    var userList = users.getUserList("Office Divas");
    expect(userList).toEqual(['Jen']);
  });
});
