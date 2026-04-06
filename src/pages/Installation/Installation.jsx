import React, { useEffect, useState } from 'react';
import { getInstalledApps } from '../../components/Utilities/localstorage';
import { FcRating } from "react-icons/fc";
import { PiDownloadSimpleLight } from "react-icons/pi";
import Swal from 'sweetalert2';

const Installation = () => {
    const [installedApps, setInstalledApps] = useState([]);
    const [sortOrder, setSortOrder] = useState(""); // "", "high-low", "low-high"

    // Convert downloads string like "50K" -> number 50000
    const parseDownloads = (downloads) => {
        if (!downloads) return 0;
        let num = parseFloat(downloads.replace(/,/g, ""));
        if (downloads.toUpperCase().includes("K")) num *= 1000;
        if (downloads.toUpperCase().includes("M")) num *= 1000000;
        return num;
    };

    const handleUninstall = (id) => {
        const storedApps = JSON.parse(localStorage.getItem('installed-apps')) || [];
        const updatedApps = storedApps.filter(app => app.id !== id);
        localStorage.setItem('installed-apps', JSON.stringify(updatedApps));
        setInstalledApps(updatedApps);

        Swal.fire({
            title: 'Uninstalled!',
            text: 'The app has been successfully uninstalled.',
            icon: 'success',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK'
        });
    };

    useEffect(() => {
        const apps = getInstalledApps();
        setInstalledApps(apps);
    }, []);

    // Sort apps based on dropdown selection
    const sortedApps = [...installedApps].sort((a, b) => {
        const aDownloads = parseDownloads(a.downloads);
        const bDownloads = parseDownloads(b.downloads);

        if (sortOrder === "high-low") return bDownloads - aDownloads;
        if (sortOrder === "low-high") return aDownloads - bDownloads;
        return 0;
    });

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Your Installed Applications</h1>

            {/* Sort Bar */}
            {installedApps.length > 0 && (
                <div className="mb-6 flex items-center gap-2">
                    <label htmlFor="sort" className="text-gray-700 font-medium">Sort by Downloads:</label>
                    <select
                        id="sort"
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                        className="border rounded px-3 py-1"
                    >
                        <option value="">Default</option>
                        <option value="high-low">High → Low</option>
                        <option value="low-high">Low → High</option>
                    </select>
                </div>
            )}

            {installedApps.length === 0 ? (
                <p>No apps installed yet.</p>
            ) : (
                <div className="grid gap-4">
                    {sortedApps.map(app => (
                        <div key={app.id} className="flex items-center p-4 bg-gray-100 rounded shadow">
                            <img src={app.image} alt={app.title} className="w-12 h-12 mr-4" />
                            <div className="flex items-center justify-between w-full">
                                <h3 className="font-bold text-lg">{app.title}</h3>

                                <button 
                                    onClick={() => handleUninstall(app.id)} 
                                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-1.5 rounded-md text-sm font-medium transition-colors"
                                >
                                    Uninstall
                                </button>

                                <div className="flex gap-4">
                                    <p className="flex items-center gap-1 text-sm text-gray-500">
                                        Ratings <FcRating /> {app.ratingAvg}
                                    </p>
                                    <p className="flex items-center gap-1 text-sm text-gray-500">
                                        Downloads <PiDownloadSimpleLight /> {app.downloads}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Installation;