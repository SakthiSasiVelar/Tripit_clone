import { useQuery } from "@tanstack/react-query"
import { getContents } from "../QueryFunctions/homePageServiceQueryFunctions"


export const useGetHomePageServiceContents = () => {
    return useQuery({
        queryFn : getContents,
        queryKey : ['homePageContents'],
        retry : false
    })
}

