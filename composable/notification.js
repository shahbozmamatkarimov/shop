const success = (message) => {
    ElNotification({
        title: "Success",
        message: h("b", { style: "color: green;" }, message),
        customClass: "background: black;",
        type: "success",
    });
};

const warning = (message) => {
    ElNotification({
        title: "Warning",
        message: h("b", { style: "color: #e6a23c;" }, message),
        type: "warning",
    });
};

const error = (message) => {
    ElNotification({
        title: "Error",
        message: message,
        type: "error",
    });
};

return { success, warning, error };
