# Chat App For Algo8 - Task 3B

A Basic Chat App with Socket.IO with functionalities like - one-to-one between two or more users - public group chat. - anyone can join a group - anyone can create a group - Notification on user joining, leaving, typing in one-to-one and group chat.

---

# Hosted On
### https://pijush-task3c.herokuapp.com/

---

# Project Author
👤 **Pijush Konar**

- Github: [@pijush-konar-au7](https://github.com/pijush-konar-au7)

---

## Requirements

For development, you will only need Node.js and a node global package installed in your environement.

---

## Project Installation
  After installing node, this project will need many NPM Packages, so just run the following command to install all.

    $ git clone Here(https://github.com/pijush-konar-au7/assignmentchatapp)
    $ cd assignmentchatapp
    $ npm i

---

## Configuration

Open `robin-chat-app-two\config` then create and dev.env file and edit it with your infos. You will need:

- PORT=`Your Desired Port`
- MONGODB_URL=`Your Database Address`
- SENDGRID_API_KEY=`Enter Your SendGrid Email API Register On Sendgrid`
---

## Running The Project

```sh
    $ npm run dev
```
## Liabrary Used

- ##### `moments.js` - We used moments.js liabrary to format the time.

## NPM Packages Used -

- ##### `express` - It's the web framework for Node.js that we used to structure our web application. You can find more details here [express](https://www.npmjs.com/package/express).

- ##### `socket.io` - We used Socket.IO as it enables real-time bidirectional event-based communication. For more details check here [socket.io](https://www.npmjs.com/package/socket.io).


- ##### `bad-words` - It is a javascript filter for bad words. It’s an npm module that you can find it out here at [bad-words](https://www.npmjs.com/package/bad-words). We have used this to add as a profanity filter in our chat room, to save our users from abuses/hatered of any sort inside the chat room.

---

 ## 📝 License

Copyright © 2020 [Pijush Konar](https://github.com/pijush-konar-au7).

---