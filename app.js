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

const shortCut = document.createElement('p');
shortCut.classList.add('shortCut');
shortCut.innerText = 'Use the shortcut to change the language – Shift Left + Control.';
wrapper.append(shortCut);

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

function del() {
	if (textarea.selectionStart !== textarea.selectionEnd) {
		const text = Array.from(textarea.value);
		text.splice(textarea.selectionStart, textarea.selectionEnd - textarea.selectionStart);
		textarea.value = text.join('');
		textarea.setSelectionRange(cursor, cursor);
	} else {
		const text = Array.from(textarea.value);
		text.splice(cursor, 1);
		textarea.value = text.join('');
		textarea.setSelectionRange(cursor, cursor);
	}
}

function enter() {
	const text = Array.from(textarea.value);
	text.splice(textarea.selectionStart, textarea.selectionEnd - textarea.selectionStart, '\n');
	textarea.value = text.join('');
	cursor += 1;
	textarea.setSelectionRange(cursor, cursor);
}

function space() {
	const text = Array.from(textarea.value);
	text.splice(textarea.selectionStart, textarea.selectionEnd - textarea.selectionStart, ' ');
	textarea.value = text.join('');
	cursor += 1;
	textarea.setSelectionRange(cursor, cursor);
}

document.addEventListener('keydown', (event) => {
	changeLanguage(event);
	textarea.focus();
	if (document.getElementById(event.code)) {
		document.getElementById(event.code).classList.add('pressed');
		if (event.code === 'CapsLock') {
			if (english === 'true') {
				if (capsPressed) {
					capsPressed = false;
					shiftUp(event.code);
				} else {
					capsPressed = true;
					capsDown(event.code);
				}
			} else if (capsPressed) {
				capsPressed = false;
				shiftUpRussian(event.code);
			} else {
				capsPressed = true;
				capsDownRussian(event.code);
			}
		}
		if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
			if (english === 'true') {
				if (capsPressed) {
					capsUp(capsPressed);
				} else {
					shiftDown(event.code);
				}
			} else if (capsPressed) {
				capsUpRussian(capsPressed);
			} else {
				shiftDownRussian(event.code);
			}
		}
		event.preventDefault();
		if (event.code === 'Backspace') {
			backspace();
		} else if (event.code === 'Tab') {
			tab();
		} else if (event.code === 'Delete') {
			del();
		} else if (event.code === 'Enter') {
			enter();
		} else if (event.code === 'CapsLock'
		|| event.code === 'ShiftLeft'
		|| event.code === 'ShiftRight'
		|| event.code === 'ControlLeft'
		|| event.code === 'ControlRight'
		|| event.code === 'ControlRight'
		|| event.code === 'AltLeft'
		|| event.code === 'AltRight'
		|| event.code === 'MetaLeft'
		|| event.code === 'MetaRight') {
			event.preventDefault();
		} else if (event.code === 'Space') {
			space();
		} else {
			const text = Array.from(textarea.value);
			const letter = document.getElementById(event.code).textContent;
			text.splice(textarea.selectionStart, textarea.selectionEnd - textarea.selectionStart, letter);
			textarea.value = text.join('');
			cursor += 1;
			textarea.setSelectionRange(cursor, cursor);
		}
	}
});

document.addEventListener('keyup', (event) => {
	event.preventDefault();
	if (document.getElementById(event.code)) {
		pressed.delete(event.code);
		if (event.code !== 'CapsLock') {
			document.getElementById(event.code).classList.remove('pressed');
		}
		if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
			if (english === 'true') {
				if (capsPressed) {
					capsDown(event.code);
				} else {
					shiftUp(event.code);
				}
			} else if (capsPressed) {
				capsDownRussian(event.code);
			} else {
				shiftUpRussian(event.code);
			}
		}
	}
});

textarea.addEventListener('click', () => {
	if (textarea.selectionStart !== textarea.selectionEnd) {
		textarea.setSelectionRange(textarea.selectionStart, textarea.selectionEnd);
		cursor = textarea.selectionStart;
	} else {
		cursor = textarea.selectionStart;
		textarea.setSelectionRange(cursor, cursor);
	}
});

keyboard.addEventListener('mousedown', (event) => {
	textarea.focus();
	if (event.target.id === 'CapsLock') {
		if (english === 'true') {
			if (capsPressed) {
				capsPressed = false;
				shiftUp(event.target.id);
			} else {
				capsPressed = true;
				capsDown(event.target.id);
			}
		} else if (capsPressed) {
			capsPressed = false;
			shiftUpRussian(event.target.id);
		} else {
			capsPressed = true;
			capsDownRussian(event.target.id);
		}
	}
	if (event.target.id === 'ShiftLeft' || event.target.id === 'ShiftRight') {
		if (english === 'true') {
			if (capsPressed) {
				capsUp();
			} else {
				shiftDown(event.target.id);
			}
		} else if (capsPressed) {
			capsUpRussian();
		} else {
			shiftDownRussian(event.target.id);
		}
	}
	event.preventDefault();
	if (event.target.id === 'Backspace') {
		backspace();
	} else if (event.target.id === 'Tab') {
		tab();
	} else if (event.target.id === 'Delete') {
		del();
	} else if (event.target.id === 'Enter') {
		enter();
	} else if (event.target.id === 'CapsLock'
	|| event.code === 'ShiftLeft'
	|| event.code === 'ShiftRight'
	|| event.code === 'ControlLeft'
	|| event.code === 'ControlRight'
	|| event.code === 'ControlRight'
	|| event.code === 'AltLeft'
	|| event.code === 'AltRight'
	|| event.code === 'MetaLeft'
	|| event.code === 'MetaRight') {
		event.preventDefault();
	} else if (event.target.id === 'Space') {
		space();
	} else {
		const text = Array.from(textarea.value);
		if (event.target.id) {
			const letter = document.getElementById(event.target.id).textContent;
			text.splice(textarea.selectionStart, textarea.selectionEnd - textarea.selectionStart, letter);
			textarea.value = text.join('');
			cursor += 1;
			textarea.setSelectionRange(cursor, cursor);
		}
	}
});

keyboard.addEventListener('mouseup', (event) => {
	event.preventDefault();
	pressed.delete(event.target.id);
	if (event.target.id) {
		if (event.target.id !== 'CapsLock') {
			document.getElementById(event.target.id).classList.remove('pressed');
		}
		if (event.target.id === 'ShiftLeft' || event.target.id === 'ShiftRight') {
			if (english === 'true') {
				if (capsPressed) {
					capsDown(event.target.id);
				} else {
					shiftUp(event.target.id);
				}
			} else if (capsPressed) {
				capsDownRussian(event.target.id);
			} else {
				shiftUpRussian(event.target.id);
			}
		}
	}
});










