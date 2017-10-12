

class User {
  protected user: string;
  protected userId: number;

  constructor(public name: string, public id: number) {
    this.user = name;
    this.userId = id;
  }
}


class Message {
  protected message: string;
  protected messageId: number;

  constructor(public text: string, public id: number) {
    this.message = text;
    this.messageId = id;
  }
}


class Group {
  protected groupName: string;
  protected groupId: number;

  constructor(public name: string, public id: number){
    this.groupName = name;
    this.groupId = id;
  }
}


interface Person {
  name: string;
  id: number;
}

interface Message {
  text: string;
  id: number;
}

interface Group extends Person {}


function chat(person: Person, message: Message, group: Group) {

  if (message.id == person.id) {
    return person.name +"@"+ group.name +": "+ message.text;
  } else {
    return "Error message ID didn't match user ID!"
  }
}


var user1 = new User("Maxvanderschee", 1),
message1 = new Message("Ik hou van pindakaas", 1),
group1 = new Group("Henkies", 1);

var user2 = new User("Henk", 2),
message2 = new Message("Ik ook!", 2),
group2 = new Group("Henkies", 2);


document.body.innerHTML += "<span>" + chat(user1, message1, group1) + "</span>";
document.body.innerHTML += "<span>" + chat(user2, message2, group2) + "</span>";
