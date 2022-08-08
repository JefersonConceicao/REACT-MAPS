export const colors = () => {
    return {
        primary: "#145DA0",
        default: "#2E8BC0",
        secondary: "#B1D4E0",
        colorBody: "#F9F5EB",
    }
}

export const px2vw = (size, width = 1440) => `${(size / width) * 100}vw`;