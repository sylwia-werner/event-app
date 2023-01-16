import { createContext, useContext } from "react";
import { DEFAULT_CATEGORY, MIN_PEOPLE_LIMIT } from "../config";
import { PostsType, WallFiltersType } from "../types/posts.type";
import { PostsResponse } from "../types/responses/postsResponse.type";

// Jeszcze trzeba obczaić jak przechowywać te filtry

interface Props {
    posts: PostsType[];
    wallFiltersSSR?: WallFiltersType;
    isError: boolean;
    isLoading: boolean;
    fetchNextPage: () => void;
    isFetchingNextPage: boolean;
    hasNextPage?: boolean;
}

export const WallContext = createContext<Props>({
    posts: [],
    wallFiltersSSR: {
        city: "",
        category: DEFAULT_CATEGORY,
        date: "",
        peopleLimit: MIN_PEOPLE_LIMIT,
    },
    isError: false,
    isLoading: false,
    fetchNextPage: () => {},
    isFetchingNextPage: false,
});

export const useWallContext = () => useContext(WallContext);
