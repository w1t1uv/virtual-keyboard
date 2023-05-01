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

const smallEnglish = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
	                 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del',
	                 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Return',
	                 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift',
	                 'Ctrl', 'Opt', 'Cmd', 'Space', 'Cmd', '◄', '▼', '►', 'Opt'];

const shiftEnglish = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
	                 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del',
	                 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Return',
	                 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '▲', 'Shift',
	                 'Ctrl', 'Opt', 'Cmd', 'Space', 'Cmd', '◄', '▼', '►', 'Opt'];

const capsEnglish = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
	                'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Del',
	                'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'Return',
	                'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '▲', 'Shift',
	                'Ctrl', 'Opt', 'Cmd', 'Space', 'Cmd', '◄', '▼', '►', 'Opt'];

const capsShiftEnglish = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
	                     'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', '|', 'Del',
	                     'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '"', 'Return',
	                     'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '?', '▲', 'Shift',
	                     'Ctrl', 'Opt', 'Cmd', 'Space', 'Cmd', '◄', '▼', '►', 'Opt'];

const smallRussian = [']', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
	                 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'ё', 'Del',
	                 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Return',
	                 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '/', '▲', 'Shift',
	                 'Ctrl', 'Opt', 'Cmd', 'Space', 'Cmd', '◄', '▼', '►', 'Opt'];

const shiftRussian = ['[', '!', '"', '№', '%', ':', ',', '.', ';', '(', ')', '_', '+', 'Backspace',
	                 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', 'Ё', 'Del',
	                 'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Return',
	                 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '?', '▲', 'Shift',
	                 'Ctrl', 'Opt', 'Cmd', 'Space', 'Cmd', '◄', '▼', '►', 'Opt'];

const capsRussian = [']', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
	                'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', 'Ё', 'Del',
	                'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Return',
	                'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '/', '▲', 'Shift',
	                'Ctrl', 'Opt', 'Cmd', 'Space', 'Cmd', '◄', '▼', '►', 'Opt'];

const capsShiftRussian = ['[', '!', '"', '№', '%', ':', ',', '.', ';', '(', ')', '_', '+', 'Backspace',
	                     'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'ё', 'Del',
	                     'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Return',
	                     'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '?', '▲', 'Shift',
 	                     'Ctrl', 'Opt', 'Cmd', 'Space', 'Cmd', '◄', '▼', '►', 'Opt'];

const keysCode = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4',
	         'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9',
	         'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab',
	         'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT',
	         'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP',
	         'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA',
	         'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH',
	         'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote',
	         'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC',
	         'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma',
	         'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft',
	         'AltLeft', 'MetaLeft', 'Space', 'MetaRight',
	         'ArrowLeft', 'ArrowDown', 'ArrowRight', 'AltRight'];

function createKeyboard(arr) {
	for (let i = 0; i < keysCode.length; i++) {
		const keys = document.createElement('div');
		keys.classList.add('key');
		keys.innerText = arr[i];
		keys.setAttribute('id', keysCode[i]);
		keyboard.append(keys);
	}
}

function cleanKeyboard() {
	document.querySelectorAll('.key').forEach((el) => {
		el.remove();
	});
}

const description = document.createElement('p');
description.classList.add('description');
description.innerText = 'The virtual keyboard was created in the MacOS operating system.';
wrapper.append(description);

function shiftDown(event) {
	cleanKeyboard();
	createKeyboard(shiftEnglish);
	document.getElementById(event).classList.add('pressed');
}

function shiftUp(event) {
	cleanKeyboard();
	createKeyboard(smallEnglish);
	document.getElementById(event).classList.remove('pressed');
}

function capsDown() {
	cleanKeyboard();
	createKeyboard(capsEnglish);
	document.getElementById('CapsLock').classList.add('pressed');
}

function capsUp() {
	cleanKeyboard();
	createKeyboard(capsShiftEnglish);
}

function shiftDownRussian(event) {
	cleanKeyboard();
	createKeyboard(shiftRussian);
	document.getElementById(event).classList.add('pressed');
}

function shiftUpRussian(event) {
	cleanKeyboard();
	createKeyboard(smallRussian);
	document.getElementById(event).classList.remove('pressed');
}

function capsDownRussian() {
	cleanKeyboard();
	createKeyboard(capsRussian);
	document.getElementById('CapsLock').classList.toggle('pressed');
}

function capsUpRussian() {
	cleanKeyboard();
	createKeyboard(capsShiftRussian);
}

let capsPressed = false;
let english = localStorage.getItem('english');
let pressed = new Set();

if (english === 'true') {
	createKeyboard(smallEnglish);
} else {
	createKeyboard(smallRussian);
}

function changeLanguage(event) {
	pressed.add(event.code);
	if (!pressed.has('ShiftLeft') || !pressed.has('ControlLeft')) {
		return;
	}
	pressed.clear();
	if (english === 'true') {
		english = 'false';
		localStorage.setItem('english', false);
		if (capsPressed) {
			capsDownRussian(event.code);
		} else {
			shiftUpRussian(event.code);
		}
	} else {
		english = 'true';
		localStorage.setItem('english', true);
		if (capsPressed) {
			capsDown(event.code);
		} else {
			shiftUp(event.code);
		}
	}
}

let cursor = textarea.selectionStart;

function backspace() {
	if (textarea.value.length !== 0 && cursor !== 0) {
		if (textarea.selectionStart !== textarea.selectionEnd) {
			const text = Array.from(textarea.value);
			text.splice(textarea.selectionStart, textarea.selectionEnd - textarea.selectionStart);
			textarea.value = text.join('');
			textarea.setSelectionRange(cursor, cursor);
		} else {
			textarea.setSelectionRange(cursor, cursor);
			const text = Array.from(textarea.value);
			text.splice(cursor - 1, 1);
			textarea.value = text.join('');
			cursor -= 1;
			textarea.setSelectionRange(cursor, cursor);
		}
	}
}

function tab() {
	const text = Array.from(textarea.value);
	text.splice(textarea.selectionStart, textarea.selectionEnd - '    ');
	cursor += 4;
	textarea.setSelectionRange(cursor, cursor);
}














