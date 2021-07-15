/* src/web/js/lib/Modal.svelte generated by Svelte v3.38.3 */
import {
	SvelteComponent,
	attr,
	create_component,
	create_slot,
	destroy_component,
	detach,
	element,
	init,
	insert,
	mount_component,
	safe_not_equal,
	transition_in,
	transition_out,
	update_slot
} from "svelte/internal";

import { navigateTo } from "yrv";
import { Fence } from "smoo";
const get_default_slot_changes = dirty => ({});
const get_default_slot_context = ctx => ({ back: /*back*/ ctx[0] });

// (15:2) 
function create_main_slot(ctx) {
	let div;
	let current;
	const default_slot_template = /*#slots*/ ctx[1].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[2], get_default_slot_context);

	return {
		c() {
			div = element("div");
			if (default_slot) default_slot.c();
			attr(div, "class", "formator p");
			attr(div, "slot", "main");
		},
		m(target, anchor) {
			insert(target, div, anchor);

			if (default_slot) {
				default_slot.m(div, null);
			}

			current = true;
		},
		p(ctx, dirty) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 4)) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[2], !current ? -1 : dirty, get_default_slot_changes, get_default_slot_context);
				}
			}
		},
		i(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			if (default_slot) default_slot.d(detaching);
		}
	};
}

function create_fragment(ctx) {
	let fence;
	let current;

	fence = new Fence({
			props: {
				noform: true,
				autofocus: true,
				visible: true,
				modal: true,
				$$slots: { main: [create_main_slot] },
				$$scope: { ctx }
			}
		});

	fence.$on("cancel", /*back*/ ctx[0]);

	return {
		c() {
			create_component(fence.$$.fragment);
		},
		m(target, anchor) {
			mount_component(fence, target, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			const fence_changes = {};

			if (dirty & /*$$scope*/ 4) {
				fence_changes.$$scope = { dirty, ctx };
			}

			fence.$set(fence_changes);
		},
		i(local) {
			if (current) return;
			transition_in(fence.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(fence.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(fence, detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;

	function back() {
		if (window.history.length > 1) {
			window.history.back();
			return;
		}

		navigateTo("/");
	}

	$$self.$$set = $$props => {
		if ("$$scope" in $$props) $$invalidate(2, $$scope = $$props.$$scope);
	};

	return [back, slots, $$scope];
}

class Modal extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {});
	}
}

export default Modal;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL2FsdmFyby9Xb3Jrc3BhY2UvanNvbi1zY2hlbWEtZmFrZXIvc3JjL3dlYi9qcy9saWIvTW9kYWwuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gIGltcG9ydCB7IG5hdmlnYXRlVG8gfSBmcm9tICd5cnYnO1xuICBpbXBvcnQgeyBGZW5jZSB9IGZyb20gJ3Ntb28nO1xuXG4gIGZ1bmN0aW9uIGJhY2soKSB7XG4gICAgaWYgKHdpbmRvdy5oaXN0b3J5Lmxlbmd0aCA+IDEpIHtcbiAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBuYXZpZ2F0ZVRvKCcvJyk7XG4gIH1cbjwvc2NyaXB0PlxuPEZlbmNlIG5vZm9ybSBhdXRvZm9jdXMgdmlzaWJsZSBtb2RhbCBvbjpjYW5jZWw9e2JhY2t9PlxuICA8ZGl2IGNsYXNzPVwiZm9ybWF0b3IgcFwiIHNsb3Q9XCJtYWluXCI+XG4gICAgPHNsb3Qge2JhY2t9IC8+XG4gIDwvZGl2PlxuPC9GZW5jZT5cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBQ1csVUFBVSxRQUFRLEtBQUs7U0FDdkIsS0FBSyxRQUFRLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQVdtQixHQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBVDFDLElBQUk7TUFDUCxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDO0dBQzNCLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSTs7OztFQUlyQixVQUFVLENBQUMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=