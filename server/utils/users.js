class Users{
  constructor(){
    this.users = [];
  }

  addUser(id, name, room){
    var user = {id, name, room};
    this.users.push(user);
    return user;
  }

  removeUser(id){
    var result = this.users.filter((user) => user.id === id)[0];

    if(result){
      this.users = this.users.filter((user) => user.id !== id);
    }

    return result;
  }

  getUser(id){
    return this.users.filter((user) => user.id === id)[0];
  }

  getUserList(room){
    var sameRoomUsers =
    this.users.filter((user) => user.room === room);
    var nameArray = sameRoomUsers.map((user) => {
      return user.name;
    });
    return nameArray;
  }
}

module.exports = {Users};
