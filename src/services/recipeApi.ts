import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const APP_KEY = "";
const APP_ID = "";

export const recipeApi = createApi({
    reducerPath:"recipeApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://api.edeman.com/" }),
    endpoints:(builder) => ({
        getRecipes: builder.mutation({
            query:({query, health}) => {
                return{
                    url:`search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&&health=${health}`
                }
            }
        })
    })
})

export const { useGetRecipesMutation } = recipeApi;