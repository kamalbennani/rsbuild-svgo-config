import "./App.css";
import { useTranslation } from "react-i18next";
import { ReactComponent } from "./Indicator.svg";

const App = () => {
	const { t } = useTranslation();
	return (
		<div className="content">
			<h1>Rsbuild with React</h1>
			<p>{t("key")}</p>
			<ReactComponent width={200} height={200} />
		</div>
	);
};

export default App;
