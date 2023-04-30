const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
document.body.append(wrapper);

const title = document.createElement('h1');
title.classList.add('title');
title.innerText = 'Virtual Keyboard';
wrapper.append(title);

const textarea = document.createElement('textarea');
textarea.classList.add('textarea');
textarea.setAttribute('rows', 10);
wrapper.append(textarea);

const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
wrapper.append(keyboard);



