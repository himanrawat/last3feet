import React from "react";
import {
	createBrowserRouter,
	Outlet,
	RouterProvider,
	ScrollRestoration,
} from "react-router-dom"; // Change these imports
import Header from "./Header";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Footer from "./components/Footer";
import Contact from "./Contact";
import Project from "./Project";
import ServicesPage from "./ServicesPage";
import NotFound from "./NotFound";
import StrategicPrintProcurement from "./service/StrategicPrintProcurement";
import RetailBranding from "./service/RetailBranding";
import StoreDisplays from "./service/StoreDisplays";
import CreativeProduction from "./service/CreativeProduction";
import RetailActivation from "./service/RetailActivation";
import EventMarketing from "./service/EventMarketing";
import CorporateGifting from "./service/CorporateGifting";
import ContentDevelopment from "./service/ContentDevelopment";
import RetailStoreFabrication from "./service/RetailStoreFabrication";

function Layout() {
	return (
		<div className="bg-white dark:bg-gray-900">
			<ScrollRestoration />
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
}

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/about",
				element: <AboutUs />,
			},
			{
				path: "/services",
				children: [
					{
						index: true,
						element: <ServicesPage />,
					},
					{
						path: "Strategic-Print-Procurement",
						element: <StrategicPrintProcurement />,
					},
					{
						path: "Retail-Branding",
						element: <RetailBranding />,
					},
					{
						path: "store-Displays-POSM",
						element: <StoreDisplays />,
					},
					{
						path: "Creative-Production",
						element: <CreativeProduction />,
					},
					{
						path: "Retail-Activation",
						element: <RetailActivation />,
					},
					{
						path: "Event-Marketing",
						element: <EventMarketing />,
					},
					{
						path: "Corporate-Gifting",
						element: <CorporateGifting />,
					},
					{
						path: "Content-Development",
						element: <ContentDevelopment />,
					},
					{
						path: "Retail-Store-Fabrication",
						element: <RetailStoreFabrication />,
					},
				],
			},
			{
				path: "/project",
				element: <Project />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "*",
				element: <NotFound />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
