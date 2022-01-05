import io from 'socket.io-client';

let socket = io('https://app-chattt.herokuapp.com');

export default socket;