// static/scripts/fixedsearch/fixedsearch.js
/*--------------------------------------------------------------
fixedsearch — Super fast, client side search for Hugo.io with Fusejs.io
based on https://gist.github.com/cmod/5410eae147e4318164258742dd053993
--------------------------------------------------------------*/

if (typeof variable !== 'undefined') {
	console.log('search.js already loaded');
} else {
fixedsearch = function(){
	var search_form = document.getElementById('search-form'); // search form
	var search_input = document.getElementById('search-input'); // input box for search
	var search_results = document.getElementById('search-results'); // targets the <ul>
	var fuse; // holds our search engine
	var results_available = false; // did we get any search results?
	var first_run = true; // allow us to delay loading json data unless search activated

	/*--------------------------------------------------------------
	The keyboard event listener
	--------------------------------------------------------------*/
	search_form.addEventListener('keydown', function(e) {
		// Use Enter to do nothing
		if (e.keyCode == 13) {
			if (document.activeElement == search_input) {
				e.preventDefault(); // stop form from being submitted
			}
		}
	});

	/*--------------------------------------------------------------
	Load our json data and builds fuse.js search index
	--------------------------------------------------------------*/
	search_form.addEventListener('focusin', function(e) {
		search_init(); // try to load the search index
	});

	/*--------------------------------------------------------------
	Fetch some json without jquery
	--------------------------------------------------------------*/
	function fetch_JSON(path, callback) {
		var httpRequest = new XMLHttpRequest();
		httpRequest.onreadystatechange = function() {
			if (httpRequest.readyState === 4) {
				if (httpRequest.status === 200) {
					var data = JSON.parse(httpRequest.responseText);
						if (callback) callback(data);
				}
			}
		};
		httpRequest.open('GET', path);
		httpRequest.send();
	}

	/*--------------------------------------------------------------
	Load script based on https://stackoverflow.com/a/55451823
	--------------------------------------------------------------*/
	function load_script(url) {
		return new Promise(function(resolve, reject) {
			let script = document.createElement("script");
			script.onerror = reject;
			script.onload = resolve;
			if (document.currentScript) {
				document.currentScript.parentNode.insertBefore(script, document.currentScript);
			}
			else {
				document.head.appendChild(script)
			}
			script.src = url;
		});
	}

	/*--------------------------------------------------------------
	Load our search index, only executed once on first call
	--------------------------------------------------------------*/
	function search_init() {
		if (first_run) {
			load_script(window.location.origin + '/fuse.js').then(() => {
				search_input.value = ""; // reset default value
				first_run = false; // let's never do this again
				fetch_JSON(search_form.getAttribute('data-language-prefix') + '/index.json', function(data){
					var options = { // fuse.js options; check fuse.js website for details
						shouldSort: true,
						location: 0,
						distance: 100,
						threshold: 0.2,
						ignoreLocation: true,
						minMatchCharLength: 2,
						keys: [
							'permalink',
							'title',
							'author',
							'author_url',
							'date',
							'summary',
							'content',
							'tags'
							]
					};

					fuse = new Fuse(data, options); // build the index from the json file

					search_input.addEventListener('keyup', function(e) { // execute search as each character is typed
						search_exec(this.value);
					});
					// console.log("index.json loaded"); // DEBUG
				});
			}).catch((error) => { console.log('fixedsearch failed to load: ' + error); });
		}
	}

	/*--------------------------------------------------------------
	Using the index we loaded, run a search query (for "term") every
	time a letter is typed in the search box
	--------------------------------------------------------------*/
	function search_exec(term) {
		let results = fuse.search(term); // the actual query being run using fuse.js
		let search_items = ''; // our results bucket

		if (results.length === 0) { // no results based on what was typed into the input box
			results_available = false;
			search_items = '';
		} else { // build our html
			for (let item in results.slice(0,10)) { // only show first 5 results
				search_items = search_items +
`<article class="h-entry post-entry">
        <header class="entry-header">
          <h2 class="p-name"><a class="u-url" title="${results[item].item.title}" href="${results[item].item.permalink}">${results[item].item.title}</a></h2>
        </header>

        <section class="p-summary entry-content">
            <p>${results[item].item.summary}</p>
        </section>

        <footer class="entry-footer">
          <time class="dt-published" datetime="${results[item].item.date}">${results[item].item.date}</time>
          <span>by <a class="p-author h-card" href="${results[item].item.author_url}">${results[item].item.author}</a></span>
        </footer>
</article>
`;
			}
			results_available = true;
		}

		search_results.innerHTML = search_items;
	}
}();
}
