export default function getRoutes(route, route2) {
    if (route === route2.name) {
        return true;
    }
    return false;
}
