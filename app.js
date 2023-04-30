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
textarea.setAttribute('cols', 50);
wrapper.append(textarea);

const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
wrapper.append(keyboard);

const smallEnglish = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'delete',
	                 'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\',
	                 'caps lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'return',
	                 'shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'shift',
	                 'ctrl', 'opt', 'cmd', 'space', 'cmd', 'opt', '◄', '▼', '►'];

const shiftEnglish = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'delete',
	                 'tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|',
	                 'caps lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'return',
	                 'shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '▲', 'shift',
	                 'ctrl', 'opt', 'cmd', 'space', 'cmd', 'opt', '◄', '▼', '►'];

const capsEnglish = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'delete',
	                'tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\',
	                'caps lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'return',
	                'shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '▲', 'shift',
	                'ctrl', 'opt', 'cmd', 'space', 'cmd', 'opt', '◄', '▼', '►'];

const capsShiftEnglish = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'delete',
	                     'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', '|',
	                     'caps lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '"', 'return',
	                     'shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '?', '▲', 'shift',
	                     'ctrl', 'opt', 'cmd', 'space', 'cmd', 'opt', '◄', '▼', '►'];

const smallRussian = [']', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'delete',
	                 'tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'ё',
	                 'caps lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'return',
	                 'shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '/', '▲', 'shift',
	                 'ctrl', 'opt', 'cmd', 'space', 'cmd', 'opt', '◄', '▼', '►'];

const shiftRussian = ['[', '!', '"', '№', '%', ':', ',', '.', ';', '(', ')', '_', '+', 'delete',
	                 'tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', 'Ё',
	                 'caps lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'return',
	                 'shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '?', '▲', 'shift',
	                 'ctrl', 'opt', 'cmd', 'space', 'cmd', 'opt', '◄', '▼', '►'];

const capsRussian = [']', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'delete',
	                'tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', 'Ё',
	                'caps lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'return',
	                'shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '/', '▲', 'shift',
	                'ctrl', 'opt', 'cmd', 'space', 'cmd', 'opt', '◄', '▼', '►'];

const capsShiftRussian = ['[', '!', '"', '№', '%', ':', ',', '.', ';', '(', ')', '_', '+', 'delete',
	                     'tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'ё',
	                     'caps lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'return',
	                     'shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '?', '▲', 'shift',
 	                     'ctrl', 'opt', 'cmd', 'space', 'cmd', 'opt', '◄', '▼', '►'];

const keys = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4',
	         'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9',
	         'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab',
	         'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT',
	         'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP',
	         'BracketLeft', 'BracketRight', 'Backslash', 'CapsLock', 'KeyA',
	         'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH',
	         'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote',
	         'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC',
	         'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma',
	         'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft',
	         'AltLeft', 'MetaLeft', 'Space', 'MetaRight', 'AltRight',
	         'ArrowLeft', 'ArrowDown', 'ArrowRight'];












