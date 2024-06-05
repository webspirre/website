"use strict";
exports.__esModule = true;
exports.getFilteredProjects = exports.getProjectsByDeviceType = exports.getProjectsByPageType = exports.getProjectsByCategory = exports.db = void 0;
/// db.ts
var data_1 = require("@mswjs/data");
var faker_1 = require("@faker-js/faker");
var filterOptions = [
    "Landing Page",
    "Pricing Page",
    "About Page",
    "Login Page",
    "Sign Up Page",
    "404 Page",
];
var deviceFilters = ["Desktop", "Mobile"];
var categories = [
    "Software & SaaS",
    "AI",
    "Fintech",
    "Agency & Corporate",
    "E-Commerce",
    "Crypto & Web3",
    "Travel & Hospitality",
];
exports.db = data_1.factory({
    project: {
        id: data_1.primaryKey(faker_1.faker.number.int),
        name: function () { return faker_1.faker.commerce.productName(); },
        category: function () { return faker_1.faker.helpers.arrayElement(categories); },
        mobileImageUrlss: function () { return faker_1.faker.image.imageUrl(); },
        imageUrl: function () { return faker_1.faker.image.imageUrl(); },
        pageType: function () { return faker_1.faker.helpers.arrayElement(filterOptions); },
        deviceType: function () { return faker_1.faker.helpers.arrayElement(deviceFilters); },
        logoUrl: function () { return faker_1.faker.image.imageUrl(); },
        description: function () { return faker_1.faker.lorem.sentence(); },
        mobileImageUrl: function () { return faker_1.faker.image.imageUrl(); },
        deskstopImageUrl: function () { return faker_1.faker.image.imageUrl(); },
        longDescription: function () { return faker_1.faker.lorem.paragraph(); },
        views: function () { return faker_1.faker.number.int({ min: 1000, max: 50000 }).toString(); },
        lastUpdated: function () { return faker_1.faker.date.recent().toDateString(); }
    }
});
exports.getProjectsByCategory = function (category) {
    return exports.db.project.findMany({
        where: {
            category: { equals: category }
        }
    });
};
exports.getProjectsByPageType = function (pageType) {
    return exports.db.project.findMany({
        where: {
            pageType: { equals: pageType }
        }
    });
};
exports.getProjectsByDeviceType = function (deviceType) {
    return exports.db.project.findMany({
        where: {
            deviceType: { equals: deviceType }
        }
    });
};
exports.getFilteredProjects = function (category, pageType, deviceType) {
    return exports.db.project.findMany({
        where: {
            category: { equals: category },
            pageType: { equals: pageType },
            deviceType: { equals: deviceType }
        }
    });
};
