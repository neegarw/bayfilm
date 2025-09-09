import { axiosInstance } from "./instance"

async function getLanding() {
    const res = await axiosInstance.get('/landing')
    return res
}
async function getCategory() {
    const res = await axiosInstance.get('/category')
    return res
}
async function getGallery() {
    const res = await axiosInstance.get('/galery')
    return res
}
export {
    getLanding, getCategory, getGallery
}