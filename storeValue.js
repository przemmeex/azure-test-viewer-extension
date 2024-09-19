function storeValue(key, valueToStore) {
    window.requirejs(['SDK'], function (SDK) {
        let extensionContext;

        if (typeof SDK !== 'undefined') {
            SDK.ready().then(() => {
                extensionContext = SDK.getExtensionContext();
                SDK.getAccessToken()
                    .then(accessToken => {
                        SDK.getService("ms.vss-features.extension-data-service")
                            .then(fetchedExtDataService => {
                                fetchedExtDataService.getExtensionDataManager(extensionContext.id, accessToken)
                                    .then(dataManager => {
                                        dataManager.setValue(key, valueToStore);
                                    });
                            });
                    });
            });

        } else {
            console.log('SDK is not defined');
        }
    });
}

function getValue(key) {
    return new Promise((resolve, reject) => {
        window.requirejs(['SDK'], function (SDK) {
            let extensionContext;

            if (typeof SDK !== 'undefined') {
                SDK.ready().then(() => {
                    extensionContext = SDK.getExtensionContext();
                    SDK.getAccessToken()
                        .then(accessToken => {
                            SDK.getService("ms.vss-features.extension-data-service")
                                .then(fetchedExtDataService => {
                                    fetchedExtDataService.getExtensionDataManager(extensionContext.id, accessToken)
                                        .then(dataManager => {
                                            dataManager.getValue(key).then(result => {
                                                resolve(result);
                                            });

                                        });
                                });
                        });
                });

            } else {
                console.log('SDK is not defined');
                reject(new Error('SDK is not defined'));
            }
        });
    });
}