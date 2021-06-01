export const findOrder = (order, name) => {
    return order.find((order) => order.name == name);
};
