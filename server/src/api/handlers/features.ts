import { AxiosError } from "axios";
import { urls } from "../../contants";
import { axiosInstance } from "../../service/tmdb"

const randomizeFeatureList = (list: any[]) => {
    const randomNumber = Math.floor(Math.random() * list.length)
    return list[randomNumber]
}

const selectAFeatureByMedia = async (media: any): Promise<any> => {
    let selectedFeature;
    const url = `trending/${media}/week`
    try {
        const { data } = await axiosInstance.get(url)
        return selectedFeature = randomizeFeatureList(data.results)
    } catch (error: AxiosError | any) {
        throw new Error(error)
    }
}

const fetchTrailerById = async (media: any, selectedFeature: any): Promise<any> => {
    const trailerUrl = `/${media}/${selectedFeature.id}/videos`
    try {
        const { data } = await axiosInstance.get(trailerUrl)

        if (!data.results) return null;
        else {
            const trailerInfo = data.results.find((item: any) => item.site === "YouTube" && item.type === "Trailer")
            return urls.YOUTUBE_VIDEO_BASE_URL + `${trailerInfo.key}?autoplay=1`
        }
    } catch (error: AxiosError | any) {
        throw new Error(error)
    }
}


export const featureHandlers = {
    selectAFeatureByMedia,
    fetchTrailerById
}