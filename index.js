var User = (function () {
    function User(name, id) {
        this.name = name;
        this.id = id;
        this.user = name;
        this.userId = id;
    }
    return User;
}());
var Message = (function () {
    function Message(text, id) {
        this.text = text;
        this.id = id;
        this.message = text;
        this.messageId = id;
    }
    return Message;
}());
var Group = (function () {
    function Group(name, id) {
        this.name = name;
        this.id = id;
        this.groupName = name;
        this.groupId = id;
    }
    return Group;
}());
function chat(person, message, group) {
    if (message.id == person.id) {
        return person.name + "@" + group.name + ": " + message.text;
    }
    else {
        return "Error message ID didn't match user ID!";
    }
}
var user1 = new User("Maxvanderschee", 1), message1 = new Message("Ik hou van pindakaas", 1), group1 = new Group("Henkies", 1);
var user2 = new User("Henk", 2), message2 = new Message("Ik ook!", 2), group2 = new Group("Henkies", 2);
document.body.innerHTML += "<span>" + chat(user1, message1, group1) + "</span>";
document.body.innerHTML += "<span>" + chat(user2, message2, group2) + "</span>";
