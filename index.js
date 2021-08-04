let driver = {};

function updateDriverWithKeyAndValue (obj, key, value) {
    return Object.assign({}, obj, {[key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue (obj, key, value) {
    obj[key] = value;
    return obj;
}

function deleteFromDriverByKey (driver, key) {
    const newObj = Object.assign({}, driver);
    delete newObj[key];
    return newObj
}

function destructivelyDeleteFromDriverByKey (driver, key) {
    delete driver[key];
    return driver;
}