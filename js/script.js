(function(global, factory) {
	// ------------------------------------------- //
	/* Reusable Function */
	// ------------------------------------------- //
	// Selector Function
	function element(selector) {
		var element = document.querySelectorAll(selector);

		this.hi = function() {
			return 2;
		};

		if (element[1]) {
			return element;
		}

		return element[0];
	}

	var hi = new element(".lang");

	// Remove Class Function
	// Add Class Function

	// ------------------------------------------- //
	/* Header Languages Dropdown Function */
	// ------------------------------------------- //
	// var selectTag = element(".lang");
	// var selectTagIcon = element(".lang .change");

	// selectTag.mouseenter(function() {
	// 	selectTagIcon.removeClass("fa-sort-down");
	// 	selectTagIcon.addClass("fa-sort-up");
	// });

	// selectTag.mouseleave(function() {
	// 	selectTagIcon.removeClass("fa-sort-up");
	// 	selectTagIcon.addClass("fa-sort-down");
	// });
	// ------------------------------------------- //
	/* Animate In Function */
	// ------------------------------------------- //
	var scrollPos;
	var viewportHeight = global.innerHeight;
	var processSection = element(".process");
	var processPos = processSection.offsetTop;
	var processHit = processPos - viewportHeight;
	// var animateElem = document.querySelector("");

	global.onscroll = function() {
		scrollPos = global.pageYOffset;
		if (scrollPos >= processHit) {
			console.log("Hi");
		}
	};
})(window, document);
