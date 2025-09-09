import { axiosInstance } from "./instance"

async function getLanding() {
    const res = await axiosInstance.get('/landing')
    return res
}
async function getCategory() {
    const res = await axiosInstance.get('/category')
    return res
}
async function getGallery(id) {
    const res = await axiosInstance.get('/galery/' + id)
    return res.data
}
export {
    getLanding, getCategory, getGallery
}