import { config, collection, fields } from "@keystatic/core";
import { block } from "@keystatic/core/content-components";

export default config({
	storage: {
		kind: "local",
	},
	collections: {
		posts: collection({
			label: "Posts",
			slugField: "title",
			path: "posts/*",
			format: { contentField: "content" },
			schema: {
				title: fields.slug({ name: { label: "Title" } }),
				content: fields.mdx({
					label: "Content",
					components: {
						MyWidget: block({
							label: "My widget",
							description: "Just a test widget",
							schema: {},
						}),
					},
				}),
			},
		}),
	},
});
