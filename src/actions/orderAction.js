

export const Edit_Order = (formData, name) => {
    return { type: "EDIT_ORDER", payload: { formData, name } };
};



export const Add_New_Order = (formData) => {
    return { type: "ADD_ORDER", payload: formData };
};


export const Delete_Order = (name) => {
    return { type: "DELETE_ORDER", payload: name };
};

