/* src/web/js/lib/Save.svelte generated by Svelte v3.38.3 */
import {
	SvelteComponent,
	detach,
	init,
	insert,
	noop,
	safe_not_equal,
	text
} from "svelte/internal";

function create_fragment(ctx) {
	let t;

	return {
		c() {
			t = text("Not yet implemented...");
		},
		m(target, anchor) {
			insert(target, t, anchor);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(t);
		}
	};
}

class Save extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, {});
	}
}

export default Save;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL2FsdmFyby9Xb3Jrc3BhY2UvanNvbi1zY2hlbWEtZmFrZXIvc3JjL3dlYi9qcy9saWIvU2F2ZS5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiTm90IHlldCBpbXBsZW1lbnRlZC4uLlxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9