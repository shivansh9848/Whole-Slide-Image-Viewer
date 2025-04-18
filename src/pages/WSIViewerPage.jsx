import Header from "@/components/Header.jsx";
import LeftPanel from "@/components/LeftPanel.jsx";
import CenterView from "@/components/CenterView.jsx";
import RightPanel from "@/components/RightPanel.jsx";
import ReportButton from "@/components/ReportButton.jsx";
import { ViewportProvider } from "@/contexts/ViewportContext.jsx";

export default function WSIViewerPage() {
    return (
        <ViewportProvider>
            <div className="flex flex-col min-h-screen">
                <Header />
                <div className="grid grid-cols-20 w-full flex-grow">
                    <div className="col-span-5 bg-gray-100 p-4">
                        <LeftPanel />
                    </div>

                    <div className="col-span-15 p-4 bg-gray-200 relative overflow-hidden">
                        <CenterView />

                        <div
                            className="absolute top-4 right-4 z-20 bg-white shadow-lg rounded-lg"
                            style={{
                                width: "250px",
                                maxHeight: "calc(100vh - 100px)", 
                                overflowY: "auto",
                                overflowX: "hidden",
                                padding: "1rem",
                                boxSizing: "border-box"
                            }}
                        >
                            <RightPanel />
                        </div>

                    </div>

                </div>
                <ReportButton />
            </div>
        </ViewportProvider>
    );
}
