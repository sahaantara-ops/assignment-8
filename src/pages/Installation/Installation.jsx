
import React, { useEffect, useState } from 'react';
import { getInstalledApps } from '../../components/Utilities/localstorage';
import { FcRating } from "react-icons/fc";
import { PiDownloadSimpleLight } from "react-icons/pi";
import Swal from 'sweetalert2';

const Installation = () => {
    const [installedApps, setInstalledApps] = useState([]);

    const handleUninstall = (id) => {
    // 1. Get the current list from Local Storage
    const storedApps = JSON.parse(localStorage.getItem('installed-apps')) || [];

    // 2. Filter out the app that matches the ID
    const updatedApps = storedApps.filter(app => app.id !== id);

    // 3. Save the new list back to Local Storage
    localStorage.setItem('installed-apps', JSON.stringify(updatedApps));

    // 4. Update the React state so the UI refreshes
    setInstalledApps(updatedApps);
    
    // Optional: Add a little feedback
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

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-6"> Your Installed Applications</h1>
            {installedApps.length === 0 ? (
                <p>No apps installed yet.</p>
            ) : (
                <div className="grid gap-4">
                    {installedApps.map(app => (
                        <div key={app.id} className="flex items-center p-4 bg-gray-100 rounded shadow">
                            <img src={app.image} alt={app.title} className="w-12 h-12 mr-4" />
                          <div className="flex items-center justify-between w-full">
  {/* 1. The Title (Left) */}
  <h3 className="font-bold text-lg">{app.title}</h3>

  {/* 2. Uninstall Button (Middle) */}
  <button 
    onClick={() => handleUninstall(app.id)} 
    className="bg-green-600 hover:bg-green-700 text-white px-4 py-1.5 rounded-md text-sm font-medium transition-colors"
  >
    Uninstall
  </button>

  {/* 3. The Stats Container (Right) */}
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