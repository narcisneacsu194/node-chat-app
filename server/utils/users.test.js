const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {

  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Name1',
      room: 'Room1'
    }, {
      id: '2',
      name: 'Name2',
      room: 'Room2'
    }, {
      id: '3',
      name: 'Name3',
      room: 'Room1'
    }];
  });

  it('should add new user', () => {
    var users = new Users();

    var user = {
      id: '123',
      name: 'Narcis',
      room: 'The Room'
    };

    var result = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
    expect(result).toEqual(user);
  });

  it('should remove user', () => {
    var result = users.removeUser('2');

    var user = {
      id: '2',
      name: 'Name2',
      room: 'Room2'
    };

    expect(result).toEqual(user);
    expect(users.users).toNotInclude(result);
    expect(users.users.length).toBe(2);
  });

  it('should not remove user', () => {
    var result = users.removeUser('123');

    expect(result).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should get specific user', () => {
    var result = users.getUser('1');
    var user = {
      id: '1',
      name: 'Name1',
      room: 'Room1'
    };

    expect(result).toEqual(user);
  });

  it('should not return user', () => {
    var result = users.getUser('123');

    expect(result).toNotExist();
  });

  it('should get user list from Room1', () => {
    var userList = users.getUserList('Room1');

    expect(userList).toEqual(['Name1', 'Name3']);
    expect(userList.length).toBe(2);
  });

  it('should get user list from Room2', () => {
    var userList = users.getUserList('Room2');

    expect(userList).toEqual(['Name2']);
    expect(userList.length).toBe(1);
  });
});
