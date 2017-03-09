'use strict';

import templates from './Test01.soy';
import Component from 'metal-component';
import Soy from 'metal-soy';
import Tooltip from "metal-tooltip";
import Modal from "metal-modal";
import Toggler from "metal-toggler";
import Autocomplete from "metal-autocomplete";
import Select from "metal-select";

class Test01 extends Component {

    initTooltipExamples() {
	new Tooltip({
	    delay: [300, 150],
	    elementClasses: 'fade',
	    selector: '[data-title]',
	    visible: false
	});

	new Tooltip({
	    delay: [300, 150],
	    elementClasses: 'fade',
	    position: Tooltip.Align.Right,
	    selector: '#tooltip1',
	    title: 'tooltip 1',
	    visible: false
	});

	console.log("tooltips initialized");

    }

    initModalExamples() {
	var modal = new Modal({
	    element: '.modal',
	    header: '<h4 class="modal-title">Modal header</h4>',
	    body: 'One fine body...',
	    footer: '<button type="button" class="btn btn-primary closeModal">OK</button>',
	    visible: false
	});

	var openElement = this.element.querySelector('.openModal');
	openElement.addEventListener('click', function() {
	    modal.show();
	});

	var closeElement = modal.element.querySelector('.closeModal');
	closeElement.addEventListener('click', function() {
	    modal.hide();
	});

	console.log("modals initialized");

    }

    initTogglerExamples() {
	new Toggler({
	    content: '.toggler-content',
    	    header: '.btn-primary'
	});
	console.log("Toggler initialized");
    }

    initAutocompleteExample() {
	var continents = ['Asia', 'Africa', 'North America', 'South America', 'Antarctica', 'Europe', 'Australia'];
	new Autocomplete({
	    element: this.element.querySelector('#autocompletelist'),
	    inputElement: this.element.querySelector('#autocompleteinput'),
	    data: function(query) {
		    var arr = continents;
		    var filteredArr = 
			    arr.filter(function(item) {
				return query && item.toLowerCase().indexOf(query.toLowerCase()) === 0;
			    });
		return filteredArr;
	    }
	});
	console.log("Autocomplete initialized");
    }

    initSelectExample() {
	new Select({
	    label: '<i>Select</i>',
	    items: ['GET', 'HEAD', 'POST', 'PATCH', 'PUT', 'DELETE'],
	    hiddenFieldName: 'method'
	}, this.element.querySelector('#first'));
	new Select({
	    items: ['Number', 'String', 'Boolean', 'Array', '<i>Object</i>'],
	    values: ['Number', 'String', 'Boolean', 'Array', 'Object'],
	    label: 'Type',
	}, this.element.querySelector('#second'));

	console.log("Select initialized");
    }


    rendered() {
	this.initTooltipExamples();
	this.initModalExamples();
	this.initTogglerExamples();
	this.initAutocompleteExample();
	this.initSelectExample();
    };
}


Soy.register(Test01, templates);

export default Test01;
