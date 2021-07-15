/* src/web/js/lib/Icon.svelte generated by Svelte v3.38.3 */
import {
	SvelteComponent,
	append,
	attr,
	detach,
	init,
	insert,
	noop,
	safe_not_equal,
	svg_element,
	xlink_attr
} from "svelte/internal";

function create_fragment(ctx) {
	let svg;
	let use;
	let use_xlink_href_value;

	return {
		c() {
			svg = svg_element("svg");
			use = svg_element("use");
			xlink_attr(use, "xlink:href", use_xlink_href_value = "#icon-" + /*name*/ ctx[0]);
			attr(svg, "width", /*size*/ ctx[1]);
			attr(svg, "height", /*size*/ ctx[1]);
		},
		m(target, anchor) {
			insert(target, svg, anchor);
			append(svg, use);
		},
		p(ctx, [dirty]) {
			if (dirty & /*name*/ 1 && use_xlink_href_value !== (use_xlink_href_value = "#icon-" + /*name*/ ctx[0])) {
				xlink_attr(use, "xlink:href", use_xlink_href_value);
			}

			if (dirty & /*size*/ 2) {
				attr(svg, "width", /*size*/ ctx[1]);
			}

			if (dirty & /*size*/ 2) {
				attr(svg, "height", /*size*/ ctx[1]);
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(svg);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { name = null } = $$props;
	let { size = 16 } = $$props;

	$$self.$$set = $$props => {
		if ("name" in $$props) $$invalidate(0, name = $$props.name);
		if ("size" in $$props) $$invalidate(1, size = $$props.size);
	};

	return [name, size];
}

class Icon extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { name: 0, size: 1 });
	}
}

export default Icon;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL2FsdmFyby9Xb3Jrc3BhY2UvanNvbi1zY2hlbWEtZmFrZXIvc3JjL3dlYi9qcy9saWIvSWNvbi5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiAgZXhwb3J0IGxldCBuYW1lID0gbnVsbDtcbiAgZXhwb3J0IGxldCBzaXplID0gMTY7XG48L3NjcmlwdD5cblxuPHN2ZyB3aWR0aD17c2l6ZX0gaGVpZ2h0PXtzaXplfT5cbiAgPHVzZSB4bGluazpocmVmPVwiI2ljb24te25hbWV9XCIgLz5cbjwvc3ZnPlxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0RUFNMEIsR0FBSTsrQkFEbEIsR0FBSTtnQ0FBVSxHQUFJOzs7Ozs7O2tHQUNKLEdBQUk7Ozs7O2dDQURsQixHQUFJOzs7O2lDQUFVLEdBQUk7Ozs7Ozs7Ozs7OztPQUpqQixJQUFJLEdBQUcsSUFBSTtPQUNYLElBQUksR0FBRyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7OzsifQ==