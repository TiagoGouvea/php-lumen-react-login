
const RequireRole = (component, roles = [], user) => {
    roles = Array.isArray(roles) ? roles : [roles];
    user = user || {};
    if (roles.indexOf(user.role) > -1) {
        return component;
    }
    return null;
};

export default RequireRole;
