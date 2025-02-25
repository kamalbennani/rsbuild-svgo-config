import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginSvgr } from "@rsbuild/plugin-svgr";

export default defineConfig({
	plugins: [
		pluginReact(),
		pluginSvgr({
			mixedImport: true,
			svgrOptions: {
				svgoConfig: {
					plugins: [
						{
							name: "preset-default",
							params: {
								overrides: {
									removeViewBox: false,
									cleanupIds: false,
								},
							},
						},
					],
				},
			},
		}),
	],
});
