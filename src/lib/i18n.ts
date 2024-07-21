"use client";

import { initReactI18next } from "react-i18next";

import i18next from "i18next";

// Initialize i18next on the client side
i18next.use(initReactI18next).init({
	lng: "en", // if you're using a language detector, do not define the lng option
	debug: true,
	resources: {
		en: {
			translation: {
				key: "Start building amazing things with Rsbuild.",
			},
		},
		fr: {
			translation: {
				key: "Commencez à créer des choses incroyables avec Rsbuild.",
			},
		},
	},
});

export { i18next };
