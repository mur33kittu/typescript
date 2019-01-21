"use strict";
var DropDown = /** @class */ (function () {
    function DropDown() {
    }
    DropDown.prototype.insertAfter = function (newNode, referenceNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    };
    DropDown.prototype.setAttribute = function (el, attr, value) {
        el.setAttribute(attr, value);
    };
    DropDown.prototype.createEl = function () {
        this.mainEl = document.getElementById('main');
        this.li = document.createElement('li');
        this.label = document.createElement('label');
        this.checkbox = document.createElement('input');
        this.setAttribute(this.checkbox, 'type', 'checkbox');
        this.setAttribute(this.checkbox, 'checked', 'checked'); //set attribute
        this.setAttribute(this.checkbox, 'value', 'select 1'); //set attribute
        this.span = document.createElement('span');
        this.registrar = document.createElement('form');
        this.setAttribute(this.registrar, 'id', 'registrar');
        // this.registrar.setAttribute('id', 'registrar');
        this.insertAfter(this.registrar, this.mainEl);
        this.insertAfter(this.checkbox, this.mainEl);
    };
    DropDown.prototype.createLI = function (text) {
        this.span.textContent = text;
        this.li.appendChild(this.span);
        this.label.textContent = 'Confirmed';
        this.checkbox.type = 'checkbox';
        this.label.appendChild(this.checkbox);
        this.li.appendChild(this.label);
        this.editButton.textContent = 'edit';
        this.li.appendChild(this.editButton);
        this.removeButton.textContent = 'remove';
        this.li.appendChild(this.removeButton);
        return this.li;
    };
    DropDown.prototype.createElement = function () {
        var _this = this;
        this.createEl();
        var form = document.getElementById('registrar');
        // console.log(form);
        var input = document.querySelector('input');
        var mainDiv = document.querySelector('.main');
        var ul = document.getElementById('invitedList');
        var div = document.createElement('div');
        var filterLabel = document.createElement('label');
        var filterCheckBox = document.createElement('input');
        filterLabel.textContent = "Hide those who haven't responded";
        filterCheckBox.type = 'checkbox';
        div.appendChild(filterLabel);
        div.appendChild(filterCheckBox);
        // mainDiv.insertBefore(div, ul);
        document.addEventListener('submit', function (e) {
            var text = input.value;
            var li = _this.createLI(text);
            e.preventDefault();
            _this.input.value = '';
            _this.ul.appendChild(li);
        });
        // ul.addEventListener('change', e => {
        // 	const checkbox = e.target;
        // 	const checked = this.checkbox.checked;
        // 	const listItem = this.checkbox.parentNode.parentNode;
        // 	if (checked) {
        // 		listItem.className = 'responded';
        // 	} else {
        // 		listItem.className = '';
        // 	}
        // });
        // ul.addEventListener('click', e => {
        // 	if (e.target.tagName === 'BUTTON') {
        // 		const button = e.target;
        // 		const li = button.parentNode;
        // 		const ul = li.parentNode;
        // 		if (button.textContent === 'remove') {
        // 			ul.removeChild(li);
        // 		} else if (button.textContent === 'edit') {
        // 			const span = li.firstElementChild;
        // 			const input = document.createElement('input');
        // 			input.type = 'text';
        // 			input.value = span.textContent;
        // 			li.insertBefore(input, span);
        // 			li.removeChild(span);
        // 			button.textContent = 'save';
        // 		} else if (button.textContent === 'save') {
        // 			const input = li.firstElementChild;
        // 			const span = document.createElement('span');
        // 			span.textContent = input.value;
        // 			li.insertBefore(span, input);
        // 			li.removeChild(input);
        // 			button.textContent = 'save';
        // 		}
        // 	}
        // });
    };
    return DropDown;
}());
new DropDown().createElement();
//# sourceMappingURL=index.js.map