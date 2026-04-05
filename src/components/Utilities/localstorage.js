
export const getInstalledApps = () => {
    const storedApps = localStorage.getItem('installed-apps');
    return storedApps ? JSON.parse(storedApps) : [];
};

export const installApp = (product) => {
    const installedApps = getInstalledApps();
    const isAlreadyInstalled = installedApps.find(app => app.id === product.id);
    
    if (!isAlreadyInstalled) {
        installedApps.push(product);
        localStorage.setItem('installed-apps', JSON.stringify(installedApps));
        alert(`${product.title} has been installed!`);
    } else {
        alert("This app is already installed.");
    }
};